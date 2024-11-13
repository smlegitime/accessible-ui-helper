/**
 * Description: Performs standard transformations to input file for downstream processing
 * @author Sybille Légitime
 * @copyright 2024. All rights reserved.
 */

import { 
  Page,
  FileCollection,
  Framework,
  FileData
} from '../models/models';
import { JSDOM } from 'jsdom';
import { logging } from '../lib/logging';
import { Result } from 'axe-core';

const logger = logging.getLogger('services.inputTransformer');

export class InputTransformer {
  private scannedInput: any;

  constructor(scannedInput: any) {
    this.scannedInput = scannedInput;
  }

  /**
  * Sanitize all file names to control for special characters and filename length
  * @param fileNames 
  * @returns List of sanitized file names
  */
  private sanitizeFilenames(fileNames: Array<string>) : Array<string> | null { return null; }

  /**
   * Calculate position of code snippet in input code
   * @param str Input code string
   * @param substr Code snippet
   * @returns 
   */
  private findSubstringIndices(str: string, substr: string): { start: number, end: number } | null {
    const start = str.indexOf(substr);

    if(start !== -1) {
      const end = start + substr.length;
      return { start, end };
    }

    return null;
  }

  /**
   * Inject script inside the provided document
   * @param htmlDocument 
   * @param inputFiles 
   * @param fileTypeMap 
   * @returns updated document with inline script
   */
  private injectInline(htmlDocument: Document, inputFiles: FileCollection, fileTypeMap: any): Document {
    const elements = htmlDocument.getElementsByTagName(fileTypeMap['oldTagName']);

    for (const e of elements) {
      const fileName = e.getAttribute(fileTypeMap['tagAttribute']);
      if (fileName){
        if (fileTypeMap['fileExtension'].test(fileName)){
          const newElement = htmlDocument.createElement(fileTypeMap['newTagName']);
          newElement.innerHTML = inputFiles[`/${fileName}`]['content'];
          e.parentElement?.appendChild(newElement);
        }
      }
    }

    return htmlDocument;
  }

  /**
   * Inject css script into style tag of corresponding html file and JS script into script tag
   * Design to fit a bundler configuration change to account for different frontend frameworks
   * @param inputFiles 
   */
  private addInlineScriptsToHtml(inputFiles: FileCollection, htmlPage: FileData){
    const fileTypeMap = {
      'css': {
        'fileExtension': /.\.css$/, // all CSS files
        'oldTagName': 'link',
        'tagAttribute': 'href',
        'newTagName': 'style'
      },
      'js': {
        'fileExtension': /^(?!.*\.min\.js$)(?!.*axe*).*\.js$/, // all JS files except .min.js and files including 'axe'
        'oldTagName': 'script',
        'tagAttribute': 'src',
        'newTagName': 'script'
      }
    }

    const htmlDocument = new JSDOM(htmlPage['content']).window.document;
    const updatedDocWithJs = this.injectInline(
      this.injectInline(htmlDocument, inputFiles, fileTypeMap['css']), 
      inputFiles, 
      fileTypeMap['js']
    );

    return updatedDocWithJs.documentElement.outerHTML;
  }

  // Ensure Axe remains read-only
  private ensureAxeReadOnly(){}

  /**
   * Get the HTML pages from the input file collection
   * @param inputFiles 
   * @returns File collection with just the HTML pages
   */
  private getHtmlPages(inputFiles: FileCollection): FileCollection {
    const filteredCollection: FileCollection = {};

    for (const file in inputFiles) {
      if (inputFiles[file]['type'] == 'html') {
        filteredCollection[file] = inputFiles[file]
      }
    }
    return filteredCollection;
  }

  /**
   * Initialize the structures that will be used for input transformation
   * @param inputFiles 
   * @param violations 
   * @returns 
   */
  private initializeTransformedInputStruct(inputFiles: FileCollection, violations: Array<Result>): any {
    const filteredCollection = this.getHtmlPages(inputFiles)

    // Initialize the structure of the transformed input
    const transformedInputObj: any = { ...filteredCollection };
    Object.keys(filteredCollection).forEach(file => transformedInputObj[file]['violationInfo'] = []);

    // Get violation nodes
    const violationNodes = violations.map(violation => violation['nodes']).flat();

    return { filteredCollection, transformedInputObj, violationNodes }
  }

  /**
   * Performs an outer merge between the transformed input and original input files
   * @param transformedInputObj 
   * @param inputFiles 
   * @returns 
   */
  private mergeInputs(transformedInputObj: any, inputFiles: FileCollection) {
    for (const originalFile in inputFiles) {
      if(!Object.keys(transformedInputObj).includes(originalFile)) {
        transformedInputObj[originalFile] = inputFiles[originalFile]
      }
    }
    return transformedInputObj;
  }

  /**
   * Organize HTML/CSS/Js and assets into a single Page structure
   * @param pageJson 
   * @returns Restructured input page
   */
  private organizeInputContent(inputFiles: FileCollection, violations: Array<Result>) : any {

    const { filteredCollection, transformedInputStruct, violationNodes } = this.initializeTransformedInputStruct(inputFiles, violations)

    for (const file in filteredCollection) {
      // pagesToBeFixed[file]['htmlWithInlineScripts'] = this.addInlineScriptsToHtml(inputFiles, filteredCollection[file]);
      for (const node of violationNodes) {
        if (filteredCollection[file]['content'].includes(node['html'])) {
          transformedInputStruct[file]['violationInfo'].push({
            'target': node['target'],
            'targetCode': node['html'],
            'message': node['failureSummary']
          })
        }
      }
    }

    const transformedInput = this.mergeInputs(transformedInputStruct, inputFiles);

    return transformedInput;
  }

  /**
   * Store list of pages (cache, filesystem, or database)
   * @param webInputs 
   */
  private storeInput(webInputs: Array<Page>) : void {}

  /**
   * Main class method
   * @returns Transformed and standardized list of input pages
   */
  public async transformInput(): Promise<any> {

    try {
      const webFramework: Framework = this.scannedInput['framework'];
      const inputFiles: FileCollection = this.scannedInput['fileCollection'];
      const inputAccResults: Array<Result> = this.scannedInput['violations'];

      const organizedInputs = this.organizeInputContent(inputFiles, inputAccResults);
      
      logger.info('Input transformation complete.');

      return organizedInputs;

    } catch (err) {
      logger.error(`An error occurred: ${err}`);
      return err;
    }
  }
}