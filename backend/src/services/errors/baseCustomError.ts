/**
 * @fileoverview Abstract class for custom server errors
 * @author Sybille Légitime
 * @author Rio Young
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */

export type CustomErrorContent = {
    message: string,
    context?: { [key: string]: any }
  };
  
export abstract class BaseCustomError extends Error {
    abstract readonly statusCode: number;
    abstract readonly errors: CustomErrorContent[];
    abstract readonly logging: boolean;

    constructor(message: string) {
        super(message);

        // Extending a built in class
        Object.setPrototypeOf(this, BaseCustomError.prototype);
    }
}