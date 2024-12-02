/**
 * @fileoverview Express app assigment to an HTTP server
 * @author Sybille Légitime
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */

import app from './index';
import config from './config/config';
import { logging } from './lib/logging';

// Configuring the logger
logging.configure({
    minLevels: {
        '': 'info',
        'services': 'warn',
        'controllers': 'warn'
    }
}).registerConsoleLogger();

const logger = logging.getLogger('');
const HOST = config.host;
const PORT = config.port;

app.listen(PORT, HOST, () => {
    logger.info(`Server is running on port ${PORT}`)
});