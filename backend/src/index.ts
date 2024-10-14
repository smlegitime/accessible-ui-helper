import express, { Express } from 'express';
import jsdom, { JSDOM } from 'jsdom';
import cors from 'cors';
import axe from 'axe-core'
const app: Express = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from Node.js backend!');
    // Get all rules available on axe-core from 'wcag2aa', 'wcag2a'
    const results = axe.getRules(['wcag2aa', 'wcag2a']) // example of using axe-core

    const html = `<!DOCTYPE html>\n<html></html>`;

    // Create a virtual DOM with JSDOM
    const { window } = new JSDOM(html);

    // Setup axe with the virtual DOM
    axe.setup(window.document);

    // Run accessibility tests
    axe.run(window.document, {}, (err, results) => {
        if (err) {
            console.error(err);
        } else {
            console.log(results.violations);
        }
        console.log(results) // this has some issue with closing the axe-run interface after so please look into that
    })
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});