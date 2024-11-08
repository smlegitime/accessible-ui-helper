/**
 * Description: Performs standard transformations to input file for downstream processing
 * @author Sybille Légitime
 * @copyright 2024
 */

import { 
  Page,
  PageAsset,
  FileCollection
} from '../models/models';

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

  // Inject css script into style tag of corresponding html file and JS script into script tag
  // Design to fit a bundler configuration change to account for different frontend frameworks
  private injectScriptsIntoHtml(){}

  /**
   * Encode images, videos and other assets 
   * @param pageAssets 
   * @returns Encoded list of assets for a page
   */
  private encodeAssets(pageAssets: Array<PageAsset>) : Array<PageAsset> | null { return null; }

  /**
   * Organize HTML/CSS/Js and assets into a single Page structure
   * @param pageJson 
   * @returns Restructured input page
   */
  private organizeInputContent(inputFiles: FileCollection, inputAccResults: Array<any>) : any {  
    let organizedInput: {[key: string]: any} = {};
    const pagesSet = new Set<string>();

    // Populate with keys (need to optimize)
    for (const accRes of inputAccResults) {
      accRes['pages'].forEach((page: string) => pagesSet.add(page));
    }
    pagesSet.forEach(item => organizedInput[item] = {});

    // NEED INPUT FILE NAME FROM FRONT END

    // Update organizedInputSet (TODO: finish)
    for (const accRes of inputAccResults) {
      for (const page of accRes['pages']) {
        organizedInput[page] = {
          'type': inputFiles[page]['type'],
          'content': inputFiles[page]['content'],
          'violationInfo': {}
        }
      }
    }

    return {
      fileCollection: {
        '/index.html': {
            "type": "html",
            "content": "<!DOCTYPE html>\n  <html>\n    <head>\n      <title>Home Page Updated</title>\n      <link rel=\"stylesheet\" href=\"style.css\">\n    </head>\n    <body>\n      <h1>Home Page Updated</h1>\n      <button id=\"btn\">Click Me</button>\n      <a href=\"about.html\">Go to About</a>\n      <script src=\"node_modules/axe-core/axe.min.js\"></script>\n      <script src=\"script.js\"></script>\n      <script src=\"axe-script.js\"></script>\n    </body>\n  </html>",
            'violationInfo': [
              {
                'target': ['h1'],
                'targetCode': {
                  'startIndex': 1,
                  'endIndex': 4,
                  'content': '<h1>Home Page Updated</h1>'
                },
                'message': 'Some page content is not contained by landmarks'
              }
            ]
        },
        '/about.html': {
            "type": "html",
            "content": "<!DOCTYPE html>\n  <html>\n    <head>\n      <title>About Us</title>\n      <link rel=\"stylesheet\" href=\"about-style.css\">\n    </head>\n    <body>\n      <h1>CHANGED</h1>\n      <p>This is the about page.</p>\n      <a href=\"index.html\">Go to Home</a>\n      <script src=\"node_modules/axe-core/axe.min.js\"></script>\n      <script src=\"about-script.js\"></script>\n      <script src=\"axe-script.js\"></script>\n    </body>\n  </html>",
            'violationInfo': [
              {
                'target': ['a'],
                'targetCode': {
                  'startIndex': 1,
                  'endIndex': 4,
                  'content': '<a href=\"about.html\">Go to About</a>'
                },
                'message': 'Some page content is not contained by landmarks'
              }
            ]
        }
      }
    }
  }

  /**
   * Store list of pages (cache, filesystem, or database)
   * @param webInputs 
   */
  private storeInput(webInputs: Array<Page>) : void {}

  /**
   * Main class method
   * @param webInputs 
   * @returns Transformed and standardized list of input pages
   */
  public async transformInput() {

    try {
      const inputFiles: FileCollection = this.scannedInput['fileCollection'];
      const inputAccResults: Array<Result> = this.scannedInput['accessibilityResults']['violations'];

      const organizedInputs = this.organizeInputContent(inputFiles, inputAccResults);
      
      logger.info('Input transformation complete.');

      return organizedInputs;

    } catch (err) {
      logger.error(`An error occurred: ${err}`);
      return err;
    }
  }
}