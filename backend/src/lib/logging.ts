/**
 * @fileoverview Custom logger configuration and logger for backend server
 * @author Sybille Légitime
 * @copyright 2024. All rights reserved.
 */

import { EventEmitter } from 'events';

// CONFIGURATION AND MANAGEMENT OF THE LOGGING SYSTEM
export class LogManager extends EventEmitter {
    private options: LogOptions = {
        minLevels: { '': 'info' }
    };

    // Stop the console logger from being added twice
    private consoleLoggerRegistered: boolean = false;

    /**
     * Main configuration method
     * @param options
     */
    public configure(options: LogOptions) : LogManager { 
        this.options = Object.assign({}, this.options, options);
        return this;
    }

    /**
     * Getter for logger instance
     * @param module
     */
    public getLogger(module: string) : Logger { 
        let minLevel = 'none';
        let match = '';

        for (const key in this.options.minLevels) {
            if (module.startsWith(key) && key.length >= match.length) {
                minLevel = this.options.minLevels[key];
                match = key;
            }
        }

        return new Logger(this, module, minLevel);
    }
    
    /**
     * Log listener
     * @param listener 
     * @returns 
     */
    public onLogEntry(listener: (logEntry: LogEntry) => void) : LogManager { 
        this.on('log', listener);
        return this;
    }

    /**
     * Console log driver
     */
    public registerConsoleLogger(): LogManager {
        if (this.consoleLoggerRegistered) return this;

        this.onLogEntry((logEntry) => {
            const msg = `${logEntry.location} [${logEntry.module}] ${logEntry.message}`;
            switch (logEntry.level) {
                case 'trace':
                    console.trace(msg);
                    break;
                case 'debug':
                    console.debug(msg);
                    break;
                case 'info':
                    console.info(msg);
                    break;
                case 'warn':
                    console.warn(msg);
                    break;
                case 'error':
                    console.error(msg);
                    break;
                default:
                    console.log(`{${logEntry.level}} ${msg}`);
            }
        });

        this.consoleLoggerRegistered = true;
        return this;
    }
}

export interface LogEntry {
    level: string;
    module: string;
    location?: string;
    message: string;
}

export interface LogOptions {
    minLevels: { [module: string]: string }
}

export const logging = new LogManager();

// LOGGER CLASS
export class Logger {
    private logManager: EventEmitter;
    private minLevel: number;
    private module: string;
    private readonly levels: { [key: string]: number } =  {
        'trace': 1,
        'debug': 2,
        'info': 3,
        'warn': 4,
        'error': 5
    };

    constructor(logManager: EventEmitter, module: string, minLevel: string) {
        this.logManager = logManager;
        this.module = module;
        this.minLevel = this.levelToInt(minLevel);
    }

    /**
     * Convert a string level into a number
     * @param minLevel 
     */
    private levelToInt(minLevel: string) : number { 
        if (minLevel.toLowerCase() in this.levels) {
            return this.levels[minLevel.toLowerCase()];
        } else {
            return 99;
        }
     }

    /**
     * Main logging method
     * @param logLevel 
     * @param message 
     */
    public log(logLevel: string, message: string) : void {
        const level = this.levelToInt(logLevel);
        if (level < this.minLevel) return;

        const logEntry: LogEntry = {
            level: logLevel,
            module: this.module,
            message
        }

        // Getting the file/line. Pulls the caller from a created stack trace
        const error = new Error('');
        if (error.stack) {
            const cla = error.stack.split('\n');
            let idx = 1;
            while (idx < cla.length && cla[idx].includes('at Logger.Object.')) idx++;
            if (idx < cla.length) {
                logEntry.location = cla[idx].slice(cla[idx].indexOf('at ') + 3, cla[idx].length);
            }
        }

        this.logManager.emit('log', logEntry);
    }

    public trace(message: string): void { this.log('trace', message); }
    public debug(message: string): void { this.log('debug', message); }
    public info(message: string): void { this.log('info', message); }
    public warn(message: string): void { this.log('warn', message); }
    public error(message: string): void { this.log('error', message); }
}