/**
 * @fileoverview Error-handling middleware
 * @author Sybille Légitime
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */

import { Request, Response, NextFunction } from "express";
import { BaseCustomError } from "../services/errors/baseCustomError";
import { logging } from "../lib/logging";

const logger = logging.getLogger('middleware.errors');

export const errorHandlerMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
    // Handled errors
    if (err instanceof BaseCustomError) {
        
        const { statusCode, errors, logging } = err;
        if (logging) {
            logger.error(JSON.stringify({
              code: err.statusCode,
              errors: err.errors,
              stack: err.stack
            }, null, 2));
          }

        console.log(statusCode)
    
        res.status(statusCode).send({ errors });
    }

    // Unhandled errors
    logger.error(JSON.stringify(err, null, 2));
    res.status(500).send({ errors: [{ message: 'Something went wrong' }] });
};