/**
 * Description: File that assigns the Express app to an HTTP server
 * Created: Sybille Légitime
 * Created date: Oct 18, 2024 | Updated date: Oct 22, 2024
 */

import app from './index';
import config from './config/config';

const HOST = config.host;
const PORT = config.port;

app.listen(PORT, HOST, () => {
    console.log(`Server is running on port ${PORT}`)
});