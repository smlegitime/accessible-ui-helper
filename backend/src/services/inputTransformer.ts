/**
 * Description: Performs standard transformations to input file for downstream processing
 * Created: Sybille Légitime
 * Created date: Oct 22, 2024 | Updated date: 
 */

import { Page, PageContent, PageAsset } from '../models/models';

class InputTransformer {

     /**
      * Sanitize all file names to control for special characters and filename length
      * @param fileNames 
      * @returns List of sanitized file names
      */
    private sanitizeFilenames(fileNames: Array<string>) : Array<string> | null { return null; }

    /**
     * Replace sanitized filename occurrences in Html script
     * @param htmlContent 
     * @returns Page content with updated HTML
     */
    private updateHtml(htmlContent: PageContent) : PageContent | null { return null; }

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
    private organizeInputContent(pageJson: Page) : Page | null { return null; }

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
    public transformInput(webInputs: Array<Page>) : Array<Page> | null { return null; }
}