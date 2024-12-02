/**
 * @fileoverview Configuration file for backend
 * @author Sybille Légitime
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */

// Logger config
interface Config {
    host: string;
    port: number;
    logLevel: 'debug' | 'info' | 'error';
}

// Express server config
const baseConfig: Config = {
    host: 'localhost',
    port: 8000,
    logLevel: 'info'
}

export default baseConfig;