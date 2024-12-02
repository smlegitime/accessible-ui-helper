/**
 * @fileoverview Performs accessibility evaluation on page after LLM code generation
 * @author Ruoqian Zhang
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */

import axe, { AxeResults, Result } from 'axe-core';
import { JSDOM } from 'jsdom';
import { GeneratedFilesInfo, FileCollection } from '../models/models';
import { logging } from '../lib/logging';


const logger = logging.getLogger('services.fixedPageEvaluator');

export class FixedPageEvaluator {

    //llm generated format
    private generatedFilesInfo: GeneratedFilesInfo;
    // the data which pass to the llm
    private fileCollection :FileCollection;

    private accessibilityStandards :Array<string>

    constructor(fileCollection: FileCollection, generatedPage: GeneratedFilesInfo, accessibilityStandards:Array<string>) {
        this.generatedFilesInfo = generatedPage;
        this.fileCollection = fileCollection
        this.accessibilityStandards = accessibilityStandards
    }

    /**
    * Main class method
    * @returns A boolean value to determine success or failure: if successful,
    * return GeneratedFilesInfo; if not, return NewFileCollection to allow the LLM to run again.
    */

    public async evaluatePage(): Promise<any>  {
        const htmlWithViolations:string = this.generatedFilesInfo.currentScannedPage;

        //Extracts the originalViolation for comparison with the new one.
        const oldViolations = this.generatedFilesInfo.originalData[htmlWithViolations]?.violationInfo?.map(violation => ({
            target: violation.target,
            targetCode: violation.targetCode,
            message: violation.message
        })) || [];
  
        //Put the modified htmlInlineCssJs into axecore and run it.
        const generatedCode = this.generatedFilesInfo.generatedCode[htmlWithViolations];
        const res = await this.getAxeResults(generatedCode.htmlWithInlineScripts?? '')

        const failedViolation = this.compare(oldViolations, res.violations)

        //Pass the evaluation
        if (failedViolation == null){
            return {
                success: true, 
                result: this.generatedFilesInfo
            }
        }
        
        //Generate a new filecollection to call llm again.
        const newfileCollection = this.generateFailedInput(htmlWithViolations,failedViolation, this.fileCollection, this.generatedFilesInfo)
        return {
            success: false, 
            result: newfileCollection
        }
    }

    /**
     * Generates the DOM tree from the input HTML
     * @param inputHtml String of html content
     * @returns 
     */
    private generateDOMFromHtml(inputHtml: string): Document {
        const { document } = new JSDOM(inputHtml).window;
        return document;
    }

    /**
     * Retrieves the Axe accessibility results from HTML page
     * @returns the accessibility results object
     */
    private async getAxeResults(generatedPage: string): Promise<AxeResults> {
        try {

            const document: Document = this.generateDOMFromHtml(generatedPage);

            axe.setup(document);
            const axeResults = await axe.run(document, {
                runOnly: {
                    type: 'tag',
                    values: this.accessibilityStandards
                }
            });
            
            logger.info('Retrieved Axe Core evaluation.')

            return axeResults;
        } catch (error) {
            logger.error(`An error occurred ${error}`);
            throw error;
        }
        
    }

    /**
     * Determine if there are any failed violations.
     * @param originalViolations Axe violations returned by the frontend
     * @param newViolations Axe violations generated by the backend evaluation
     * @returns the vialations which failed to fix
     */
    private compare(originalViolations: Array<Object>, newViolations: Array<Result>): any{

        const extractedViolations: { target: string | object; targetCode: string; message: string }[] = [];


        // Iterate through the violations array and extract the same data structure as the originalViolations
        newViolations.forEach(violation => {
            if (violation.nodes && Array.isArray(violation.nodes)) {
                violation.nodes.forEach(node => {
                    if (node.html && node.failureSummary) {
                        extractedViolations.push({
                         target : node.target[0],
                         targetCode: node.html,
                         message: node.failureSummary
                     });
                }
                });
            }
        });

        // find which violation failed to fix
        const intersection = originalViolations.filter(item1 =>
            extractedViolations.some(item2 => JSON.stringify(item1) === JSON.stringify(item2))
        );

        return intersection.length > 0 ? intersection : null;
    }

    /**
     * generate the new fileCollection with failed violation
     * @param page file name
     * @param failedViolation Axe violations which failed to pass
     * @param fileCollection which need to pass to the LLM
     * @param generatedFilesInfo The LLM output
     * @returns mnew fileCollection
     */
    private generateFailedInput(page: string, failedViolation: any, fileCollection:FileCollection, generatedFilesInfo: GeneratedFilesInfo): any{
        //update fileCollection's htmlWithInlineScripts to new htmlWithInlineScripts

        fileCollection[page].htmlWithInlineScripts = generatedFilesInfo.generatedCode[page].htmlWithInlineScripts;
        fileCollection[page].content = generatedFilesInfo.generatedCode[page].content;

        //Leave only the duplicates and delete the rest.
        if (fileCollection && fileCollection[page]) {
            fileCollection[page].violationInfo = failedViolation;
          }

       return fileCollection
  
    }
}
