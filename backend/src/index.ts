import express, { Express } from 'express';
import cors from 'cors';
import axe from 'axe-core'
const app: Express = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from Node.js backend!');
    const results = axe.getRules(['wcag2aa', 'wcag2a']) // example of using axe-core
    console.log(results)
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});