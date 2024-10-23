/**
 * Description: Custom logger configuration and logger for backend server
 * Created: Sybille Légitime
 * Created date: Oct 22, 2024| Updated date: 
 */

import { EventEmitter } from 'events';

// LOGGER CONFIGURATION
export class LogManager extends EventEmitter {
    /**
     * Main configuration method
     * @param options
     */
    public configure(options: LogOptions) : LogManager { return this; }

    /**
     * Getter for logger instance
     * @param module
     */
    public getLogger(module: string) : Logger { return new Logger(); }
    
    /**
     * Log listener
     * @param listener 
     * @returns 
     */
    public onLogEntry(listener: (logEntry: LogEntry) => void) : LogManager { return this; }
}

export interface LogEntry {
    level: string;
    module: string;
    location?: string;
    message: string;
}

export interface LogOptions {
    minLevels: string;
}

export const logging = new LogManager();

// LOGGER CLASS
export class Logger {
    /**
     * Convert a string level into a number
     * @param minLevel 
     */
    private levelToInt(minLevel: string) : number { return 1; }

    /**
     * Main logging method
     * @param logLevel 
     * @param message 
     */
    public log(logLevel: string, message: string) : void {}

    public trace(message: string): void { this.log('trace', message); }
    public debug(message: string): void { this.log('debug', message); }
    public info(message: string): void  { this.log('info', message); }
    public warn(message: string): void  { this.log('warn', message); }
    public error(message: string): void { this.log('error', message); }
}