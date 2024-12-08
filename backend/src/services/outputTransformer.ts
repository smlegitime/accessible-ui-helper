/**
 * @fileoverview Reverses the embedding of CSS and JS from HTML
 * @author Ruoqian Zhang
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */

import { JSDOM } from 'jsdom';
import { logging } from '../lib/logging';
import { GeneratedFilesInfo } from '../models/models';
import { BaseCustomError } from './errors/baseCustomError';
import { ServerError } from './errors/customErrors';

const logger = logging.getLogger('services.outputTransformer');

export class OutputTransformer {
  private generatedFilesInfo: GeneratedFilesInfo;

  constructor(generatedFilesInfo: GeneratedFilesInfo) {
    this.generatedFilesInfo = generatedFilesInfo;
  }

  /**
   * Extracts CSS and JS from the updated HTML and updates the original files
   * @returns Updated FileCollection with modified CSS and JS files
   */
  public transformOutput(): GeneratedFilesInfo {
    try {

      const firstContent = this.generatedFilesInfo.generatedCode[Object.keys(this.generatedFilesInfo.generatedCode)[0]]?.content;

      const dom = new JSDOM(firstContent);
      const document = dom.window.document;
      
      // Extract and update CSS files
      this.extractCssJs(document);

      // Update the HTML content and  updatedCodeBlocks 
      const firstKey = Object.keys(this.generatedFilesInfo.generatedCode)[0];
      if (firstKey) {
        this.generatedFilesInfo.generatedCode[firstKey].content = document.documentElement.outerHTML;
      }

      this.cleanupGeneratedFilesInfo(this.generatedFilesInfo);

      return this.generatedFilesInfo;

    } catch (err) {
      if (err instanceof BaseCustomError) {
        throw new ServerError({
          code: 500,
          message: 'Output transformer error occurred.',
          logging: true,
          context: { service: 'OutputTransformer' }
        });
      }
      throw err;
    }
  }

  /**
   * Extracts CSS from <style> tags and updates the corresponding CSS files
   * @param document 
   */
  private extractCssJs(document: Document) : any {
    const originalData = this.generatedFilesInfo.originalData;

      Object.keys(originalData).forEach(key => {
      const element = document.getElementById(key);

      //extract css and js from inject code
      if (element != null){

        const content = element.innerHTML;
        this.generatedFilesInfo.generatedCode[key] = {
          type: originalData[key].type,
          content: content.trim(),
        };

        element.parentElement?.removeChild(element);
      }
    });
  }

  /**
   * Removes extra violationsInfo and inline HTML properties
   * @param generatedFileInfo 
   */
  private cleanupGeneratedFilesInfo(generatedFileInfo: GeneratedFilesInfo): void {
    Object.entries(generatedFileInfo.originalData).forEach(([key, value]) => {
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
  }
}

  