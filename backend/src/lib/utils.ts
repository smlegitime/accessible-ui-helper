/**
 * Description: Utility functions
 * @author Sybille Légitime
 * @copyright 2024. All rights reserved.
 */

import * as fs from 'fs';

/**
 * Reads file in async manner
 * @param filePath 
 * @returns 
 */
export const readFile = (filePath: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

/**
 * Calculate position of code snippet in input code
 * @param str Input code string
 * @param substr Code snippet
 * @returns 
 */
export const findSubstringIndices = (str: string, substr: string): { start: number, end: number } | null => {
  const start = str.indexOf(substr);

  if (start !== -1) {
    const end = start + substr.length;
    return { start, end };
  }

  return null;
}