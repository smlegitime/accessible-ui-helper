/**
 * @fileoverview Express app definition and configiration
 * @author Sybille Légitime
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */

import express, { Express } from 'express';
import cors from 'cors';
import 'express-async-errors';


import router from './routes/routes';
import { validateFilesMiddleware } from './middleware/validation';
import { errorHandlerMiddleware } from './middleware/errors';

const app: Express = express();


// Mounts middleware functions and routes, which execute during global or path-dependent incoming requests
app.use(cors());
app.use(express.json());

app.use(validateFilesMiddleware);

app.use('/api', router);

app.use(errorHandlerMiddleware);
  
// Export Express app for serving
export default app;