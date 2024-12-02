/**
 * @fileoverview Input validation middleware function
 * @author Bill Que
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */

import { Request, Response, NextFunction } from 'express';
import { InputValidator } from '../services/inputValidator';

export const validateFilesMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const payload = req.body; // Assuming payload contains the data in the expected format

  try {
    // Validate using InputValidator
    InputValidator.validateFiles(payload.fileCollection);

    // If validation passes, proceed to the next middleware or route handler
    next();
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({
        message: 'Validation failed.',
        error: error.message,
      });
    } else {
      res.status(400).json({
        message: 'Validation failed.',
        error: 'An unknown error occurred.',
      });
    }
  }
};