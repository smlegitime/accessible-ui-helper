import fs from 'fs';
import path from 'path';
import { ESLint } from 'eslint';



/**
 * InputValidator class that performs checks on file types, file sizes, and naming conventions. In addtion it perform brief check on Javascript and HTML file, but with limitation.
 */
export class InputValidator {

  /**
   * Validates the files provided in the payload:
   * - Checks for an equal number of HTML, CSS, and JS files.
   * - Ensures each file size is less than or equal to 200MB.
   * - Ensures each file name follows a naming convention (characters and underscores only).
   * @param fileCollection - The object containing files with their type, content, and other details.
   * @throws Error if validation fails for any file.
   */
  static validateFiles(fileCollection: { [key: string]: { type: string, content: string } }): void {
    const allowedFileTypes = ['html', 'css', 'js', 'json'];
    let htmlCount = 0;
    let cssCount = 0;
    let jsCount = 0;

    // Iterate over each file in the collection and validate
    for (const filePath in fileCollection) {
      const file = fileCollection[filePath];

      // Ensure the file type is valid
      if (!allowedFileTypes.includes(file.type.toLowerCase())) {
        throw new Error(`Invalid file type detected in ${filePath}. Only HTML, CSS, and JS files are allowed.`);
      }

      // Count each type of file
      switch (file.type) {
        case 'html':
          htmlCount++;
          break;
        case 'css':
          cssCount++;
          break;
        case 'js':
          jsCount++;
          break;
      }

      // Check file size (assuming `content` is a string, use Buffer.byteLength to get the size in bytes)
      const fileSizeInMB = Buffer.byteLength(file.content, 'utf8') / (1024 * 1024);
      if (fileSizeInMB > 200) {
        throw new Error(`File ${filePath} exceeds the 200MB size limit.`);
      }

      // Validate file name (must only contain alphanumeric characters, dashes, underscores, and periods)
      const fileName = path.basename(filePath);
      if (!/^[a-zA-Z0-9._-]+$/.test(fileName)) {
        throw new Error(`Invalid file name: ${fileName}. Only alphanumeric characters, underscores, dashes, and periods are allowed.`);
      }
    }
    

    
    // Ensure equal count of HTML, CSS, and JS files
    if (htmlCount !== cssCount || cssCount !== jsCount) {
      throw new Error(`File type count mismatch: HTML (${htmlCount}), CSS (${cssCount}), JS (${jsCount}). Each type must have an equal number of files.`);
    }
  }

  /**
   * Detects issues in JavaScript files using ESLint.
   * Throws an error if any issues are detected.
   * @param filePath - The path to the JavaScript file to check.
   * @returns Promise<void> - Resolves if no issues are found, otherwise rejects / send with ESLint error messages.
   */
  static async detectScriptIssues(filePath: string): Promise<void> {
    const eslint = new ESLint({
      overrideConfigFile: './.eslintrc.json', 
    });
    const results = await eslint.lintFiles([filePath]);
    
    if (results.length > 0 && results[0].messages.length > 0) {
      throw new Error(`Issues found in ${filePath}: ${results[0].messages.map(msg => msg.message).join(', ')}`);
    }
  }
}

//     /**
//    * Validates HTML tags, checking for empty and duplicate tag attributes.
//    * Throws an error if any empty or duplicate attributes are found.
//    * @param htmlContent - The HTML content to check.
//    * @returns void
//    */
//     static validateTagValues(htmlContent: string): void {
//       const $ = cheerio.load(htmlContent);
//       const emptyTags: string[] = [];
//       const duplicateTags: string[] = [];
  
//       $('*').each((i, elem) => {
//         const element = elem as Element;
//         const tagName = $(element).prop("tagName");
//         const attributes = (elem as any).attribs;
  
//         for (const attr in attributes) {
//           if (!attributes[attr]) {
//             emptyTags.push(`${tagName}[${attr}]`);
//           }
//         }
//       });
  
//       if (emptyTags.length > 0 || duplicateTags.length > 0) {
//         throw new Error(`Tag issues: Empty - ${emptyTags}, Duplicate - ${duplicateTags}`);
//       }
//     }
// 




// export class InputValidator {

//   /**
//    * Checks if all files in a folder are of accepted types (HTML, JS, CSS).
//    * Throws an error if any file does not match the accepted types.
//    * @param folderPath - The path of the folder to validate.
//    * @returns Promise<void> - Resolves if all files are valid, rejects with error if any invalid files found.
//    */
//   static async checkFileTypes(folderPath: string): Promise<void> {
//     const acceptedTypes = ['.html', '.js', '.css'];
//     const files = fs.readdirSync(folderPath);

//     for (const file of files) {
//       const ext = path.extname(file);
//       if (!acceptedTypes.includes(ext)) {
//         throw new Error(`Invalid file type: ${file}`);
//       }
//     }
//   }

//   /**
//    * Checks that all files in a folder follow a consistent naming convention.
//    * Throws an error if any file does not match the specified convention.
//    * @param folderPath - The path of the folder to validate.
//    * @returns void
//    */
//   static checkNamingConvention(folderPath: string): void {
//     const files = fs.readdirSync(folderPath);
//     const namingPattern = /^(about|contact|home)\.(html|css|js)$/; // Adjust pattern as needed
//     files.forEach(file => {
//       if (!namingPattern.test(file)) {
//         throw new Error(`File ${file} does not follow naming conventions.`);
//       }
//     });
//   }

//   



//   /**
//    * Sanitizes file names to remove special characters and ensure the file name length is within the limit.
//    * Special characters are replaced with underscores, and file names are truncated if they exceed the length limit.
//    * @param fileNames - Array of file names to sanitize.
//    * @returns string[] - Array of sanitized file names.
//    */
//   static sanitizeFileNames(fileNames: string[]): string[] {
//     const sanitizedNames = fileNames.map(name => {
//       // Replace special characters with underscores
//       let sanitized = name.replace(/[^a-zA-Z0-9.-]/g, '_');
//       // Truncate to 50 characters if too long
//       if (sanitized.length > 50) {
//         sanitized = sanitized.substring(0, 50);
//       }
//       return sanitized;
//     });
//     return sanitizedNames;
//   }
// }