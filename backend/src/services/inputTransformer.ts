/**
 * @fileoverview Performs standard transformations to input file for downstream processing
 * @author Sybille Légitime
 * @copyright 2024. All rights reserved.
 */

import { 
  Page,
  FileCollection,
  Framework,
  FileData,
  FixedFileData
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
    const { filteredCollection, transformedInputObj, violationNodes } = this.initializeTransformedInputStruct(inputFiles, violations);

    for (const file in filteredCollection) {
      transformedInputObj[file]['htmlWithInlineScripts'] = this.addInlineScriptsToHtml(inputFiles, filteredCollection[file]);
      for (const node of violationNodes) {
        if (filteredCollection[file]['content'].includes(node['html'])) {
          transformedInputObj[file]['violationInfo'].push({
            'target': node['target'],
            'targetCode': node['html'],
            'message': node['failureSummary']
          })
        }
      }
    }

    const transformedInput = this.mergeInputs(transformedInputObj, inputFiles);

    return transformedInput;
  }

  /**
   * Inject css script into style tag of corresponding html file and JS script into script tag
   * Design to fit a bundler configuration change to account for different frontend frameworks
   * @param inputFiles 
   */
  public addInlineScriptsToHtml(inputFiles: FileCollection, htmlPage: FileData | FixedFileData): string {
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

  /**
   * Main class method
   * @returns Transformed and standardized list of input pages
   */
  public transformInput(): any {

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