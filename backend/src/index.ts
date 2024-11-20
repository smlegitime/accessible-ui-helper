/**
 * @fileoverview Express app definition and configiration
 * @author Stephanie Olaiya
 * @author Sybille Légitime
 * @copyright 2024. All rights reserved.
 */

import express, { Express } from 'express';
import { Request, Response } from 'express';
import cors from 'cors';
import router from './routes/routes';
import { InputValidator } from './services/inputValidator';
import { InputTransformer } from './services/inputTransformer';

const app: Express = express();


// Mounts middleware functions and routes, which execute during global or path-dependent incoming requests
app.use(cors());
app.use(express.json());

app.use('/api', router);

app.post('/process-data', async (req: Request, res: Response) => {
    const payload = req.body; // Assume payload contains the data in the expected format
  
    try {
      // validate using inputvalidator
      InputValidator.validateFiles(payload.fileCollection);
  
      // If validation passes, return the payload for the next step
      res.status(200).json({
        message: 'Validation successful.',
        data: payload,
      });
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
  });
  
  
// Export Express app for serving
export default app;