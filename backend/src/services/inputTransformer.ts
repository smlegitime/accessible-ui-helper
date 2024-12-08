/**
 * @fileoverview Performs standard transformations to input file for downstream processing
 * @author Sybille Légitime
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */

import { JSDOM } from 'jsdom';
import { Result } from 'axe-core';
import {
  FileCollection,
  FileType,
  Framework,
  FileData,
  FixedFileData
} from '../models/models';
import { logging } from '../lib/logging';
import { ServerError } from './errors/customErrors';
import { BaseCustomError } from './errors/baseCustomError';

const logger = logging.getLogger('services.inputTransformer');

export class InputTransformer {
  private scannedInput: any;

  constructor(scannedInput: any) {
    this.scannedInput = scannedInput;
  }

  /**
   * Main class method
   * @returns Transformed and standardized list of input pages
   */
  public transformInput(): any {

    try {
      const webFramework: Framework = this.scannedInput['framework'];
      const currentPage: string = this.scannedInput['currentScannedPage'];
      const inputFiles: FileCollection = this.scannedInput['fileCollection'];
      const inputAccResults: Array<Result> = this.scannedInput['violations'];

      const organizedInputs = this.organizeInputContent(currentPage, inputFiles, inputAccResults);
      
      logger.info('Input transformation complete.');

      return organizedInputs;

    } catch (err) {
      if (err instanceof BaseCustomError) {
        throw new ServerError({
          code: 500,
          message: 'Input transformer error occurred.',
          logging: true,
          context: { service: 'InputTransformer' }
        });
      }
      throw err;
    }
  }

  /**
   * Organize HTML page and related violation into a single structure
   * @param currentPage - current scanned page
   * @param inputFiles - all input files from the uploaded project
   * @param violations - all selected violations associated with the currenPage
   * @returns - transformed object with embedded violations merged with unscanned original files
   */
  private organizeInputContent(currentPage: string, inputFiles: FileCollection, violations: Array<Result>) : any {
    const { filteredCollection, transformedInputObj, violationNodes } = this.initializeTransformedInputStruct(inputFiles, violations);
    
    for (const file in filteredCollection) {
      transformedInputObj[file]['htmlWithInlineScripts'] = this.addInlineScriptsToHtml(inputFiles, filteredCollection[file]);
      for (const node of violationNodes) {
        let violationInfoObj = {
          'target': node['target'].join(', '),
          'targetCode': node['html'],
          'message': node['failureSummary']
        }
        if (currentPage !== '' && currentPage === file) {
          transformedInputObj[file]['violationInfo'].push(violationInfoObj);
        }
        else if (filteredCollection[file]['content'].includes(node['html'])) {
          transformedInputObj[file]['violationInfo'].push(violationInfoObj);
        }
      }
    }

    const transformedInput = this.mergeInputs(transformedInputObj, inputFiles);

    return transformedInput;
  }

  /**
   * Initialize the structures that will be used for input transformation
   * @param inputFiles - input file collection
   * @param violations - violations array
   * @returns - an object with the filtered collection, initialized transformed input, and filtered violations
   */
  private initializeTransformedInputStruct(inputFiles: FileCollection, violations: Array<Result>): any {
    const filteredCollection = this.getHtmlPages(inputFiles);

    // Initialize the structure of the transformed input
    const transformedInputObj: any = { ...filteredCollection };
    Object.keys(filteredCollection).forEach(file => transformedInputObj[file]['violationInfo'] = []);

    // Get violation nodes
    const violationNodes = violations.map(violation => violation['nodes']).flat();

    return { filteredCollection, transformedInputObj, violationNodes }
  }

  /**
   * Performs an outer merge between the transformed input and original input files
   * @param transformedInputObj - transformed object with embedded violations
   * @param inputFiles - unscanned original files
   * @returns - transformed object with embedded violations merged with unscanned original files
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
   * Inject CSS script into style tag of corresponding html file and JS script into script tag
   * Design to fit a bundler configuration change to account for different frontend frameworks
   * @param inputFiles - input file collection
   * @param htmlPage - input HTML page to be processed
   * @returns - ouptut HTML with embedded CSS and JS scripts
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
   * Inject script inside the provided document
   * @param htmlDocument - HTML document to manipulate
   * @param inputFiles - filtered file collection
   * @param fileTypeMap - structure determining which script to embed, and how
   * @returns - updated document with inline script
   */
  private injectInline(htmlDocument: Document, inputFiles: FileCollection, fileTypeMap: any): Document {
    const elements = htmlDocument.getElementsByTagName(fileTypeMap['oldTagName']);

    for (const e of elements) {
      const fileName = e.getAttribute(fileTypeMap['tagAttribute']);
      if (fileName){
        if (fileTypeMap['fileExtension'].test(fileName)){
          const newElement = htmlDocument.createElement(fileTypeMap['newTagName']);
          newElement.id = `/${fileName}`;
          newElement.innerHTML = inputFiles[`/${fileName}`]['content'];
          e.parentElement?.appendChild(newElement);
        }
      }
    }

    return htmlDocument;
  }

  /**
   * Get the HTML pages from the input file collection
   * @param inputFiles - input file collection
   * @returns - file collection with just the HTML pages
   */
  private getHtmlPages(inputFiles: FileCollection): FileCollection {
    const filteredCollection: FileCollection = {};

    for (const file in inputFiles) {
      if (inputFiles[file]['type'] == FileType.Html) {
        filteredCollection[file] = inputFiles[file]
      }
    }
    return filteredCollection;
  }  
}