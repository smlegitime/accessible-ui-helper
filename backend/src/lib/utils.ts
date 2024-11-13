/**
 * Description: Utility functions
 * @author Sybille Légitime
 * @copyright 2024. All rights reserved.
 */

import * as fs from 'fs';

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