/**
 * @fileoverview Test accessibility evaluation on page after LLM code generation
 * @author Ruoqian Zhang
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */


import {FixedPageEvaluator} from '../services/fixedPageEvaluator';

describe('FixedPageEvaluator', () => {
       
    
    // Initialising test data
    const transformedInput = {
          "/index.html": {
              "type": "html",
              "content": "<!DOCTYPE html>\n  <html>\n    <head>\n      <title>Home Page Updated</title>\n      <link rel=\"stylesheet\" href=\"style.css\">\n    </head>\n    <body>\n      <h1>Home Page Updated</h1>\n      <button id=\"btn\">Click Me</button>\n      <a href=\"about.html\">Go to About</a>\n      <script src=\"node_modules/axe-core/axe.min.js\"></script>\n      <script src=\"script.js\"></script>\n      <script src=\"axe-script.js\"></script>\n    </body>\n  </html>",
              "violationInfo": [
                  {
                      "target": "h1",
                      "targetCode": "<h1>Home Page Updated</h1>",
                      "message": "Fix any of the following:\n  Some page content is not contained by landmarks"
                  },
                  {
                      "target": "a",
                      "targetCode": "<a href=\"about.html\">Go to About</a>",
                      "message": "Fix any of the following:\n  Some page content is not contained by landmarks"
                  }
              ],
              "htmlWithInlineScripts": "<html><head>\n      <title>Home Page Updated</title>\n      <link rel=\"stylesheet\" href=\"style.css\">\n    <style>body { \n    font-family: Arial; \n  } \n  img { \n    width: 100px; \n  }</style></head>\n    <body>\n      <h1>Home Page Updated</h1>\n      <button id=\"btn\">Click Me</button>\n      <a href=\"about.html\">Go to About</a>\n      <script src=\"node_modules/axe-core/axe.min.js\"></script>\n      <script src=\"script.js\"></script>\n      <script src=\"axe-script.js\"></script>\n    \n  <script>document.getElementById('btn').addEventListener('click', function() {\n    alert('Updated Button Clicked!');\n  });</script></body></html>"
          },
          "/about.html": {
              "type": "html",
              "content": "<!DOCTYPE html>\n  <html>\n    <head>\n      <title>About Us</title>\n      <link rel=\"stylesheet\" href=\"about-style.css\">\n    </head>\n    <body>\n      <h1>CHANGED</h1>\n      <p>This is the about page.</p>\n      <a href=\"index.html\">Go to Home</a>\n      <script src=\"node_modules/axe-core/axe.min.js\"></script>\n      <script src=\"about-script.js\"></script>\n      <script src=\"axe-script.js\"></script>\n    </body>\n  </html>",
              "violationInfo": [],
              "htmlWithInlineScripts": "<html><head>\n      <title>About Us</title>\n      <link rel=\"stylesheet\" href=\"about-style.css\">\n    <style>h1 { \n    color: yellow; \n  }</style></head>\n    <body>\n      <h1>CHANGED</h1>\n      <p>This is the about page.</p>\n      <a href=\"index.html\">Go to Home</a>\n      <script src=\"node_modules/axe-core/axe.min.js\"></script>\n      <script src=\"about-script.js\"></script>\n      <script src=\"axe-script.js\"></script>\n    \n  <script>console.log('About page loaded lglg');</script></body></html>"
          },
          "/style.css": {
              "type": "css",
              "content": "body { \n    font-family: Arial; \n  } \n  img { \n    width: 100px; \n  }"
          },
          "/script.js": {
              "type": "js",
              "content": "document.getElementById('btn').addEventListener('click', function() {\n    alert('Updated Button Clicked!');\n  });"
          },
          "/about-style.css": {
              "type": "css",
              "content": "h1 { \n    color: yellow; \n  }"
          },
          "/about-script.js": {
              "type": "js",
              "content": "console.log('About page loaded lglg');"
          },
          "/axe-script.js": {
              "type": "js",
              "content": "\n      console.log(1);\n    import axe from 'axe-core';\n      \n    axe.run().then((results) =>\n      window.parent.postMessage({ type: 'axeResults', results }, '*')\n      );\n    "
          },
          "/package.json": {
              "type": "json",
              "content": "{\n    \"name\": \"html-css-js\",\n    \"version\": \"1.0.0\",\n    \"description\": \"\",\n    \"main\": \"index.html\",\n    \"scripts\": {\n      \"start\": \"parcel index.html --open\",\n      \"build\": \"parcel build index.html\"\n    },\n    \"dependencies\": {\"axe-core\": \"^4.10.1\"},\n    \"devDependencies\": {\n      \"@babel/core\": \"7.2.0\",\n      \"parcel-bundler\": \"^1.6.1\",\n      \"axe-core\": \"^4.10.1\"\n    },\n    \"keywords\": []\n  }"
          },
          "/about_img.jpg": {
              "type": "img",
              "content": ""
          }
      };
      

    const generatedFilesInfo = {
            'originalData': {
              "/index.html": {
                type: "html",
                content: `<!DOCTYPE html>
            <html>
              <head>
                <title>Home Page Updated</title>
                <link rel="stylesheet" href="style.css">
              </head>
              <body>
                <h1>Home Page Updated</h1>
                <button id="btn">Click Me</button>
                <a href="about.html">Go to About</a>
                <script src="node_modules/axe-core/axe.min.js"></script>
                <script src="script.js"></script>
                <script src="axe-script.js"></script>
              </body>
            </html>`,
                violationInfo: [
                  {
                    target: "h1",
                    targetCode: `<h1>Home Page Updated</h1>`,
                    message: "Fix any of the following:\n  Some page content is not contained by landmarks"
                  },
                  {
                    target: "a",
                    targetCode: `<a href="about.html">Go to About</a>`,
                    message: "Fix any of the following:\n  Some page content is not contained by landmarks"
                  }
                ],
                htmlWithInlineScripts: `<html><head>
                <title>Home Page Updated</title>
                <link rel="stylesheet" href="style.css">
              <style>body { 
              font-family: Arial; 
            } 
            img { 
              width: 100px; 
            }</style></head>
              <body>
                <h1>Home Page Updated</h1>
                <button id="btn">Click Me</button>
                <a href="about.html">Go to About</a>
                <script src="node_modules/axe-core/axe.min.js"></script>
                <script src="script.js"></script>
                <script src="axe-script.js"></script>
              
            <script>document.getElementById('btn').addEventListener('click', function() {
              alert('Updated Button Clicked!');
            });</script></body></html>`
              },
              "/about.html": {
                type: "html",
                content: `<!DOCTYPE html>
            <html>
              <head>
                <title>About Us</title>
                <link rel="stylesheet" href="about-style.css">
              </head>
              <body>
                <h1>CHANGED</h1>
                <p>This is the about page.</p>
                <a href="index.html">Go to Home</a>
                <script src="node_modules/axe-core/axe.min.js"></script>
                <script src="about-script.js"></script>
                <script src="axe-script.js"></script>
              </body>
            </html>`,
                violationInfo: [],
                htmlWithInlineScripts: `<html><head>
                <title>About Us</title>
                <link rel="stylesheet" href="about-style.css">
              <style>h1 { 
              color: yellow; 
            }</style></head>
              <body>
                <h1>CHANGED</h1>
                <p>This is the about page.</p>
                <a href="index.html">Go to Home</a>
                <script src="node_modules/axe-core/axe.min.js"></script>
                <script src="about-script.js"></script>
                <script src="axe-script.js"></script>
              
            <script>console.log('About page loaded lglg');</script></body></html>`
              },
              "/style.css": {
                type: "css",
                content: `body { 
              font-family: Arial; 
            } 
            img { 
              width: 100px; 
            }`
              },
              "/script.js": {
                type: "js",
                content: `document.getElementById('btn').addEventListener('click', function() {
              alert('Updated Button Clicked!');
            });`
              },
              "/about-style.css": {
                type: "css",
                content: `h1 { 
              color: yellow; 
            }`
              },
              "/about-script.js": {
                type: "js",
                content: `console.log('About page loaded lglg');`
              },
              "/axe-script.js": {
                type: "js",
                content: `
                console.log(1);
              import axe from 'axe-core';
                
              axe.run().then((results) =>
                window.parent.postMessage({ type: 'axeResults', results }, '*')
                );
              `
              },
              "/package.json": {
                type: "json",
                content: `{
              "name": "html-css-js",
              "version": "1.0.0",
              "description": "",
              "main": "index.html",
              "scripts": {
                "start": "parcel index.html --open",
                "build": "parcel build index.html"
              },
              "dependencies": {"axe-core": "^4.10.1"},
              "devDependencies": {
                "@babel/core": "7.2.0",
                "parcel-bundler": "^1.6.1",
                "axe-core": "^4.10.1"
              },
              "keywords": []
            }`
              },
              "/about_img.jpg": {
                type: "img",
                content: ``
              }
            },
            "generatedCode": {
              "/index.html": {
                  "type": "html",
                  "content": "<!DOCTYPE html>\n<html>\n  <head>\n    <title>Home Page Updated</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n  </head>\n  <body>\n    <header>\n      <h1>Home Page Updated</h1>\n    </header>\n    <main>\n      <button id=\"btn\">Click Me</button>\n      <a href=\"about.html\">Go to About</a>\n    </main>\n    <script src=\"node_modules/axe-core/axe.min.js\"></script>\n    <script src=\"script.js\"></script>\n    <script src=\"axe-script.js\"></script>\n  </body>\n</html>",
                  "updatedCodeBlocks": [
                      "<header>\n  <h1>Home Page Updated</h1>\n</header>",
                      "\n<main>\n  <button id=\"btn\">Click Me</button>\n  <a href=\"about.html\">Go to About</a>\n</main>"
                  ],
                  "htmlWithInlineScripts": "<html><head>\n    <title>Home Page Updated</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n  <style>body { \n    font-family: Arial; \n  } \n  img { \n    width: 100px; \n  }</style></head>\n  <body>\n    <header>\n      <h1>Home Page Updated</h1>\n    </header>\n    <main>\n      <button id=\"btn\">Click Me</button>\n      <a href=\"about.html\">Go to About</a>\n    </main>\n    <script src=\"node_modules/axe-core/axe.min.js\"></script>\n    <script src=\"script.js\"></script>\n    <script src=\"axe-script.js\"></script>\n  \n<script>document.getElementById('btn').addEventListener('click', function() {\n    alert('Updated Button Clicked!');\n  });</script></body></html>"
              }
          }
      }
          


    const fixedPageEvaluator = new FixedPageEvaluator(transformedInput, generatedFilesInfo);


    it('fix all violations, return true', async () => {
        const result = await fixedPageEvaluator.evaluatePage();
        console.log("originalViolations", JSON.stringify(result.result, null, 2));

        expect(result.success).toBe(true);
        expect(result.result).toEqual(generatedFilesInfo);
    });

});
