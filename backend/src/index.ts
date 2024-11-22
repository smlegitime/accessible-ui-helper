/**
 * Description: File that defines and configures the Express app
 * Created: Stephanie Olaiya
 * Updated: Sybille Légitime
 * Created date: Oct 3, 2024 | Updated date: Oct 18, 2024
 */

import express, { Express } from 'express';
import { Request, Response } from 'express';
import cors from 'cors';
import router from './routes/routes';
import { validateFilesMiddleware } from './middleware/middleware';
import { InputValidator } from './services/inputValidator';
import { InputTransformer } from './services/inputTransformer';

const app: Express = express();


// Mounts middleware functions and routes, which execute
// for global or path-dependent incoming requests
app.use(cors());
app.use(express.json());
app.use('/api', router);

app.use(validateFilesMiddleware);

  
// Export Express app for serving
export default app;