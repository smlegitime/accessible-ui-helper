/**
 * Description: File that assigns the Express app to an HTTP server
 * Created: Sybille Légitime
 * Created date: Oct 18, 2024 | Updated date: Nov 6, 2024
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