/**
 * Description: File that assigns the Express app to an HTTP server
 * Created: Sybille Légitime
 * Created date: Oct 18, 2024 | Updated date:
 */

import app from './index'

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});