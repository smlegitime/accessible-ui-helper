import { Button } from "../../components/ui/button"
import { fixCodeType } from "./Resizable"


export function FixButton({setGeneratedPageFixes}:{setGeneratedPageFixes: React.Dispatch<React.SetStateAction<fixCodeType>>}) {
    return (
        <Button onClick={() => setGeneratedPageFixes(
            {
                "/index.html": {
                    code: `<html>
                        <head>
                          <link rel="stylesheet" href="style.css">
                        </head>
                        <body>
                          <h1>Home Page lallala</h1>
                          <button id="btn">Click Me</button>
                          <div id="count"></div>
                          <a href="about.html">Go to About</a>
                          <script src="script.js"></script>
                        </body>
                      </html>`,
                  },
                  "/style.css": {
                    code: `body { font-family: Arial; } img { width: 100px; }`,
                  },
                  "/script.js": {
                    code: `document.getElementById('btn').addEventListener('click', function() {
                        alert('Button clicked!');
                        });`,
                  },
                  "/about.html": {
                    code: `<html>
                            <head><link rel="stylesheet" href="about-style.css"></head>
                            <body>
                                <h1 style='color: #000000; background-color: #ffffff;'>CHANGED</h1>
                                <p>This is the about page.</p>
                                <a href="index.html">Go to Home</a>
                                <script src="about-script.js"></script>
                            </body>
                            </html>`,
                },
                  "/about-style.css": {
                    code: `h1 { color: red; }`,
                  },
                  "/about-script.js": {
                    code: `console.log('About page loaded');`,
                  },
                  "/package.json": {
                    code: `
                  {
                      "name": "html-css-js",
                      "version": "1.0.0",
                      "description": "",
                      "main": "index.html",
                      "scripts": {
                        "start": "parcel index.html --open",
                        "build": "parcel build index.html"
                      },
                      "dependencies": {},
                      "devDependencies": {
                        "@babel/core": "7.2.0",
                        "parcel-bundler": "^1.6.1"
                      },
                      "keywords": []
                    }`
                  }
            }
        )}>
            Fix
        </Button>
    )
}