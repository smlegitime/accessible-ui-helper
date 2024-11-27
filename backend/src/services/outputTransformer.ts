/**
 * @fileoverview Reverses the embedding of CSS and JS from HTML
 * @author Ruoqian Zhang
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */

  import { JSDOM } from 'jsdom';
  import { logging } from '../lib/logging';
  import { GeneratedFilesInfo} from '../models/models';

  
  const logger = logging.getLogger('services.outputTransformer');
  
  export class OutputTransformer {
    private generatedFilesInfo: GeneratedFilesInfo;
  
    constructor(generatedFilesInfo: GeneratedFilesInfo) {
      this.generatedFilesInfo = generatedFilesInfo;
    }
  

    /**
     * Extracts CSS from <style> tags and updates the corresponding CSS files
     * @param document 
     */
    private extractAndUpdateCSS(document: Document, updatedCodeBlocks: string[]) : any {
      const styleElements = document.getElementsByTagName('style');
      const links = document.getElementsByTagName('link');
      let newCodeBlocks = updatedCodeBlocks;
  
      //Find all style elements
      for (const styleElement of Array.from(styleElements)) {
        const cssContent = styleElement.innerHTML;
        let href: string | null = null;
        let linkElement: HTMLLinkElement | null = null;

        //Find out which link is connected to this style.
        for (const link of Array.from(links)) {
          if (link.rel === 'stylesheet') {
            // Assume the <link> tag precedes the <style> tag
            if (link.nextElementSibling === styleElement) {
              linkElement = link;
              href = link.href;
              break;
            }
          }
        }

        
        //Determine if the href exists in the originalcode.
        const formattedHref = href && href.startsWith("/") ? href : `/${href || ""}`; 


        if (Object.keys(this.generatedFilesInfo.originalData).includes(formattedHref)){
           const normalizeString = (str: unknown): string =>
            String(str).replace(/\s+/g, ' ').trim();
          

           const matchingElements = updatedCodeBlocks.filter(
            (element) => normalizeString(cssContent).includes(normalizeString(element))
          );

            newCodeBlocks = updatedCodeBlocks.filter((block) => !matchingElements.includes(block));

            this.generatedFilesInfo.generatedCode[formattedHref] = {
                type: "Css",
                content: cssContent.trim(),
                updatedCodeBlocks: matchingElements,
              };

        }
        
        // Remove the <style> element from the document
        styleElement.parentElement?.removeChild(styleElement);
      }
      
      return newCodeBlocks
    }   

    /**
     * Extracts CSS and JS from the updated HTML and updates the original files
     * @returns Updated FileCollection with modified CSS and JS files
     */
    public OutputTransformer(): GeneratedFilesInfo {
        try {

          //The HtmlInlineScript codd and updatedCodeBlocks
          const firstContent = this.generatedFilesInfo.generatedCode[Object.keys(this.generatedFilesInfo.generatedCode)[0]]?.content;
          const updatedCodeBlocks = this.generatedFilesInfo.generatedCode[Object.keys(this.generatedFilesInfo.generatedCode)[0]]?.updatedCodeBlocks

          const dom = new JSDOM(firstContent);
          const document = dom.window.document;
          
          // Extract and update CSS files
          const newBlock = this.extractAndUpdateCSS(document,updatedCodeBlocks);

          // Update the HTML content and  updatedCodeBlocks 
          const firstKey = Object.keys(this.generatedFilesInfo.generatedCode)[0];
          if (firstKey) {
            this.generatedFilesInfo.generatedCode[firstKey].updatedCodeBlocks = newBlock;
            this.generatedFilesInfo.generatedCode[firstKey].content = document.documentElement.outerHTML;
          }
    
          //If the updatedCodeBlocks of an element are empty, then it will be deleted,
          //it is used to deal with the case where the violation is all css and the html is not updated.
          for (const key in this.generatedFilesInfo.generatedCode) {
            if (
              Array.isArray(this.generatedFilesInfo.generatedCode[key].updatedCodeBlocks) &&
              this.generatedFilesInfo.generatedCode[key].updatedCodeBlocks.length === 0
            ) {
              delete this.generatedFilesInfo.generatedCode[key]; 
            }
          }   
    
          return this.generatedFilesInfo;
    
        } catch (err) {
          logger.error(`An error occurred: ${err}`);
          throw err;
        }
      }}

  