/**
 * @fileoverview Bad request custom error class
 * @author Sybille Légitime
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */

import { BaseCustomError } from "./baseCustomError";

export class BadRequestError extends BaseCustomError {
    private static readonly _statusCode = 400;
    private readonly _code: number;
    private readonly _logging: boolean;
    private readonly _context: { [key: string]: any };

    constructor(params?: { code?: number, message?: string, logging?: boolean, context?: { [key: string]: any } }) {
        const { code, message, logging } = params || {};

        super(message || "Bad request");
        this._code = code || BadRequestError._statusCode;
        this._logging = logging || false;
        this._context = params?.context || {};

        // Extending a built in class
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }

    get errors() {
        return [{ message: this.message, context: this._context }];
    }

    get statusCode() {
        return this._code;
    }

    get logging() {
        return this._logging;
    }
}

export class ServerError extends BaseCustomError {
    private static readonly _statusCode = 500;
    private readonly _code: number;
    private readonly _logging: boolean;
    private readonly _context: { [key: string]: any };

    constructor(params?: { code?: number, message?: string, logging?: boolean, context?: { [key: string]: any } }) {
        const { code, message, logging } = params || {};

        super(message || "Server error");
        this._code = code || ServerError._statusCode;
        this._logging = logging || false;
        this._context = params?.context || {};

        // Extending a built in class
        Object.setPrototypeOf(this, ServerError.prototype);
    }

    get errors() {
        return [{ message: this.message, context: this._context }];
    }

    get statusCode() {
        return this._code;
    }

    get logging() {
        return this._logging;
    }
}