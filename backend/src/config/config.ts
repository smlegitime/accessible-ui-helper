/**
 * Description: Configuration file
 * Created: Sybille Légitime
 * Created date: Oct 22, 2024 | Updated date:
 */

interface Config {
    host: string;
    port: number;
    logLevel: 'debug' | 'info' | 'error';
}

// Default config
const baseConfig: Config = {
    host: 'localhost',
    port: 8000,
    logLevel: 'info'
}

export default baseConfig;