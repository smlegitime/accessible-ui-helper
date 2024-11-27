/**
 * @fileoverview Processes requests/passes them along to the service layer.
 * @author Sybille L��gitime
 * @copyright 2024. All rights reserved.
 */

import { AxeResults } from 'axe-core';
import { InputTransformer } from '../services/inputTransformer';

import { logging } from '../lib/logging';
import { FixedPageEvaluator } from '../services/fixedPageEvaluator';
import { Request, Response } from 'express';
import { FileCollection, GeneratedFilesInfo } from '../models/models';
import { LLMManager } from '../services/llmManager';
import { convertToOpenAIFunction } from '@langchain/core/utils/function_calling';
import { output } from 'pdfkit';
import { OutputTransformer } from '../services/outputTransformer';
// Logger setup
const logger = logging.getLogger('controllers');

export const handleScannedInput = async (req: Request, res: Response) => {
    try {
        const scannedInput = req.body;
        logger.info('Request successfully received.');

        const inputTransformer = new InputTransformer(scannedInput);
        const transformedInput: FileCollection = inputTransformer.transformInput();

        logger.info('Request successfully transformed.');
        logger.info('Generating fixes...');
        
        const llmManager = new LLMManager();
        let generatedFileInfo: GeneratedFilesInfo = await llmManager.getFixes(transformedInput);

        Object.entries(generatedFileInfo.originalData).forEach(([key, value]) => {
            if (value.violationInfo && Array.isArray(value.violationInfo)) {
              value.violationInfo.forEach((violation) => {
                if (Array.isArray(violation.target)) {
                  violation.target = violation.target.join(', ');
                }
              });
            }
          });
        
        

        logger.info('Fixes successfully generated.');
        logger.info('Preparing generated code for evaluation...');

        for (const htmlPage in generatedFileInfo['generatedCode']) {
            generatedFileInfo['generatedCode'][htmlPage]['htmlWithInlineScripts'] = inputTransformer.addInlineScriptsToHtml(
                generatedFileInfo['originalData'],
                generatedFileInfo['generatedCode'][htmlPage]
            )
        }
        

        logger.info('Performing accessibility evaluation of the generated code...');

        const evaluator: FixedPageEvaluator = new FixedPageEvaluator(transformedInput, generatedFileInfo);
        const result = await evaluator.evaluatePage();
                
        if(result.success == false){

            logger.info('Fixes failed to pass evaluation.');
            logger.info('Generating fixes again...');

            const newTransformedInput = result.result
            let newGeneratedFileInfo = await llmManager.getFixes(newTransformedInput);

            // Merge the initial generated code with the new generated code.
            logger.info(' Merging two updatedCodeBlocks....');

            Object.keys(newGeneratedFileInfo.generatedCode).forEach((fileName) => {
            if (newGeneratedFileInfo.generatedCode[fileName] && Array.isArray(generatedFileInfo.generatedCode[fileName].updatedCodeBlocks)) {
                if (!Array.isArray(newGeneratedFileInfo.generatedCode[fileName].updatedCodeBlocks)) {
                    newGeneratedFileInfo.generatedCode[fileName].updatedCodeBlocks = [];
                }

                // merge old updatedCodeBlocks to new updatedCodeBlocks
                newGeneratedFileInfo.generatedCode[fileName].updatedCodeBlocks = [
                    ...newGeneratedFileInfo.generatedCode[fileName].updatedCodeBlocks,
                    ...generatedFileInfo.generatedCode[fileName].updatedCodeBlocks,
                ];

                newGeneratedFileInfo.generatedCode[fileName].updatedCodeBlocks = [...new Set(newGeneratedFileInfo.generatedCode[fileName].updatedCodeBlocks)];
            }

            generatedFileInfo = newGeneratedFileInfo
    });


        }
               
        logger.info('Generated code evaluation completed.');

        logger.info('Transformering output ...');
        
        generatedFileInfo.originalData = { ...scannedInput.fileCollection };

        const outputTransformer  = new OutputTransformer(generatedFileInfo);
        generatedFileInfo = outputTransformer.OutputTransformer();

        Object.entries(scannedInput.fileCollection).forEach(([key, value]) => {
          if ((value as any).type === 'Html') {
              delete (value as any).htmlWithInlineScripts;
              delete (value as any).violationInfo;
          }
      });


        Object.entries(generatedFileInfo.generatedCode).forEach(([key, value]) => {
            if (value.type === 'Html') {
            delete (value as { htmlWithInlineScripts?: string }).htmlWithInlineScripts;
            }
          });

        logger.info('Transformer output completed.');
        logger.info('Returning result...');
      
        const output = {
            generatedFilesInfo: generatedFileInfo
            };

        res.send(output);

    } catch (error: any) {
        logger.error(error);
        res.status(500).send({error});
    }
};