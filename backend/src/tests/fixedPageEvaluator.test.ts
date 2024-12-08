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
      currentScannedPage: '/about.html',
      originalData: {
        '/index.html': {
          type: 'Html',
          content: '<html>\n' +
            '        <head>\n' +
            '          <link rel="stylesheet" href="style.css">\n' +
            '        </head>\n' +
            '        <body>\n' +
            '          <h1>Home Page</h1>\n' +
            '          <button id="btn">Click Me</button>\n' +
            '          <div id="count"></div>\n' +
            '          <a href="about.html">Go to About</a>\n' +
            '          <script src="script.js"></script>\n' +
            '        \n' +
            '    <script src="node_modules/axe-core/axe.min.js"></script>\n' +
            '    <script src="axe-script.js"></script>\n' +
            '    </body>\n' +
            '      </html>',
          violationInfo: [],
          htmlWithInlineScripts: '<html><head>\n' +
            '          <link rel="stylesheet" href="style.css">\n' +
            '        <style id="/style.css">body { font-family: Arial; } img { width: 100px; }</style></head>\n' +
            '        <body>\n' +
            '          <h1>Home Page</h1>\n' +
            '          <button id="btn">Click Me</button>\n' +
            '          <div id="count"></div>\n' +
            '          <a href="about.html">Go to About</a>\n' +
            '          <script src="script.js"></script>\n' +
            '        \n' +
            '    <script src="node_modules/axe-core/axe.min.js"></script>\n' +
            '    <script src="axe-script.js"></script>\n' +
            '    \n' +
            `      <script id="/script.js">document.getElementById('btn').addEventListener('click', function() {\n` +
            "        alert('Button clicked!');\n" +
            '        });</script></body></html>'
        },
        '/about.html': {
          type: 'Html',
          content: '<html>\n' +
            '        <head><link rel="stylesheet" href="about-style.css"></head>\n' +
            '        <body>\n' +
            '          <h1>About Us</h1>\n' +
            '          <p>This is the about page.</p>\n' +
            '          <a href="index.html">Go to Home</a>\n' +
            '          <script src="about-script.js"></script>\n' +
            '        \n' +
            '    <script src="node_modules/axe-core/axe.min.js"></script>\n' +
            '    <script src="axe-script.js"></script>\n' +
            '    </body>\n' +
            '      </html>',
          violationInfo: [
            {
              target: 'h1',
              targetCode: '<h1>About Us</h1>',
              message: 'Fix any of the following:\n' +
                '  Element has insufficient color contrast of 1.07 (foreground color: #ffff00, background color: #ffffff, font size: 24.0pt (32px), font weight: bold). Expected contrast ratio of 3:1'
            },
            {
              target: 'html',
              targetCode: '<html lang="en">',
              message: 'Fix all of the following:\n  Document does not have a main landmark'
            },
            {
              target: 'h1',
              targetCode: '<h1>About Us</h1>',
              message: 'Fix any of the following:\n' +
                '  Some page content is not contained by landmarks'
            },
            {
              target: 'p',
              targetCode: '<p>This is the about page.</p>',
              message: 'Fix any of the following:\n' +
                '  Some page content is not contained by landmarks'
            },
            {
              target: 'a',
              targetCode: '<a href="index.html">Go to Home</a>',
              message: 'Fix any of the following:\n' +
                '  Some page content is not contained by landmarks'
            }
          ],
          htmlWithInlineScripts: '<html><head><link rel="stylesheet" href="about-style.css"><style id="/about-style.css">h1 { color: yellow; }</style></head>\n' +
            '        <body>\n' +
            '          <h1>About Us</h1>\n' +
            '          <p>This is the about page.</p>\n' +
            '          <a href="index.html">Go to Home</a>\n' +
            '          <script src="about-script.js"></script>\n' +
            '        \n' +
            '    <script src="node_modules/axe-core/axe.min.js"></script>\n' +
            '    <script src="axe-script.js"></script>\n' +
            '    \n' +
            `      <script id="/about-script.js">console.log('About page loaded');</script></body></html>`
        },
        '/about-script.js': { type: 'Js', content: "console.log('About page loaded');" },
        '/about-style.css': { type: 'Css', content: 'h1 { color: yellow; }' },
        '/script.js': {
          type: 'Js',
          content: "document.getElementById('btn').addEventListener('click', function() {\n" +
            "        alert('Button clicked!');\n" +
            '        });'
        },
        '/package.json': {
          type: 'Json',
          content: '{\n' +
            '              "name": "html-css-js",\n' +
            '              "version": "1.0.0",\n' +
            '              "description": "",\n' +
            '              "main": "index.html",\n' +
            '              "scripts": {\n' +
            '                "start": "parcel index.html --open",\n' +
            '                "build": "parcel build index.html"\n' +
            '              },\n' +
            '              "dependencies": {"axe-core": "^4.10.1"},\n' +
            '              "devDependencies": {\n' +
            '                "@babel/core": "7.2.0",\n' +
            '                "parcel-bundler": "^1.6.1",\n' +
            '                "axe-core": "^4.10.1"\n' +
            '              },\n' +
            '              "keywords": []\n' +
            '            }'
        },
        '/style.css': {
          type: 'Css',
          content: 'body { font-family: Arial; } img { width: 100px; }'
        },
        '/axe-script.js': {
          type: 'Js',
          content: '\n' +
            "                import axe from 'axe-core';\n" +
            '                \n' +
            '                // Add highlight function\n' +
            '                function highlightElement(selector, html, active) {\n' +
            "                    console.log('Highlighting element:', { selector, html, active });\n" +
            '                    try {\n' +
            '                        let elements = [];\n' +
            '                        \n' +
            '                        // 1. Try direct selector\n' +
            '                        elements = Array.from(document.querySelectorAll(selector));\n' +
            '                        \n' +
            '                        // 2. If not found and we have html, try to find by content\n' +
            '                        if (elements.length === 0 && html) {\n' +
            `                            const cleanHtml = html.replace(/['"]/g, '');\n` +
            "                            document.querySelectorAll(selector.split('>')[0]).forEach(el => {\n" +
            `                                if (el.outerHTML.replace(/['"]/g, '') === cleanHtml) {\n` +
            '                                    elements.push(el);\n' +
            '                                }\n' +
            '                            });\n' +
            '                        }\n' +
            '                        \n' +
            '                        // 3. If still not found, try basic tag\n' +
            '                        if (elements.length === 0) {\n' +
            '                            elements = Array.from(document.getElementsByTagName(selector));\n' +
            '                        }\n' +
            '\n' +
            "                        console.log('Found elements to highlight:', elements);\n" +
            '                        \n' +
            '                        // Add styles if not already present\n' +
            "                        if (!document.getElementById('highlight-styles')) {\n" +
            "                            const style = document.createElement('style');\n" +
            "                            style.id = 'highlight-styles';\n" +
            '                            style.textContent = `\n' +
            '                                @keyframes pulseOutline {\n' +
            '                                    0% { outline-color: rgba(253, 144, 144, 0.8); }\n' +
            '                                    50% { outline-color: rgba(253, 144, 144, 0.4); }\n' +
            '                                    100% { outline-color: rgba(253, 144, 144, 0.8); }\n' +
            '                                }\n' +
            '                                \n' +
            '                                @keyframes pulseBackground {\n' +
            '                                    0% { background-color: rgba(253, 144, 144, 0.1); }\n' +
            '                                    50% { background-color: rgba(253, 144, 144, 0.05); }\n' +
            '                                    100% { background-color: rgba(253, 144, 144, 0.1); }\n' +
            '                                }\n' +
            '                            `;\n' +
            '                            document.head.appendChild(style);\n' +
            '                        }\n' +
            '                        \n' +
            '                        elements.forEach(el => {\n' +
            '                            if (active) {\n' +
            '                                // Add smooth transition\n' +
            "                                el.style.transition = 'all 0.3s ease-in-out';\n" +
            '                                \n' +
            '                                // Main highlight effect\n' +
            "                                el.style.outline = '2px solid rgba(253, 144, 144, 0.8)';\n" +
            "                                el.style.outlineOffset = '4px';\n" +
            "                                el.style.boxShadow = '0 0 0 4px rgba(253, 144, 144, 0.2)';\n" +
            '                                \n' +
            '                                // Background effect\n' +
            "                                el.style.backgroundColor = 'rgba(253, 144, 144, 0.1)';\n" +
            '                                \n' +
            '                                // Add animations\n' +
            "                                el.style.animation = 'pulseOutline 2s infinite, pulseBackground 2s infinite';\n" +
            '                                \n' +
            '                                // Scroll into view\n' +
            '                                el.scrollIntoView({ \n' +
            "                                    behavior: 'smooth', \n" +
            "                                    block: 'center',\n" +
            "                                    inline: 'center'\n" +
            '                                });\n' +
            '                            } else {\n' +
            '                                // Clear all effects\n' +
            "                                el.style.transition = '';\n" +
            "                                el.style.outline = '';\n" +
            "                                 el.style.outlineOffset = '';\n" +
            "                                el.style.boxShadow = '';\n" +
            "                                el.style.backgroundColor = '';\n" +
            "                                el.style.animation = '';\n" +
            '                            }\n' +
            '                        });\n' +
            '                    } catch (error) {\n' +
            "                        console.error('Error highlighting element:', error);\n" +
            '                    }\n' +
            '                }\n' +
            '\n' +
            '                // Message handler\n' +
            '                function handleMessage(event) {\n' +
            "                    console.log('Received message in iframe:', event.data);\n" +
            "                    if (event.data.type === 'highlightViolation') {\n" +
            '                        const { selector, html, active } = event.data;\n' +
            '                        highlightElement(selector, html, active);\n' +
            "                    } else if (event.data.type === 'clearHighlights') {\n" +
            '                        // Clear all highlights\n' +
            "                        document.querySelectorAll('*').forEach(el => {\n" +
            "                            el.style.transition = '';\n" +
            "                            el.style.outline = '';\n" +
            "                            el.style.outlineOffset = '';\n" +
            "                            el.style.boxShadow = '';\n" +
            "                            el.style.backgroundColor = '';\n" +
            "                            el.style.animation = '';\n" +
            '                        });\n' +
            '                    }\n' +
            '                }\n' +
            '\n' +
            '                // Initialize highlight system\n' +
            '                function initializeHighlight() {\n' +
            "                    console.log('Initializing highlight system');\n" +
            "                    window.removeEventListener('message', handleMessage);\n" +
            "                    window.addEventListener('message', handleMessage);\n" +
            "                    console.log('Highlight system initialized');\n" +
            '                }\n' +
            '\n' +
            '                // Run initialization\n' +
            '                initializeHighlight();\n' +
            '                \n' +
            '                // Run axe check\n' +
            '                axe.run({\n' +
            "                    runOnly: ['wcag21aa','wcag2aa','best-practice']\n" +
            '                }).then((results) => {\n' +
            "                    console.log('Axe scan results:', results);\n" +
            "                    window.parent.postMessage({ type: 'axeResults', results }, '*')\n" +
            '                });\n' +
            '            '
        }
      },
      generatedCode: {
        '/about.html': {
          type: 'Html',
          content: '<html lang="en"><head><link rel="stylesheet" href="about-style.css"><style id="/about-style.css">h1 { color: #333; }</style></head>\n' +
            '  <body>\n' +
            '    <header>\n' +
            '      <h1>About Us</h1>\n' +
            '    </header>\n' +
            '    <main>\n' +
            '      <p>This is the about page.</p>\n' +
            '      <a href="index.html">Go to Home</a>\n' +
            '    </main>\n' +
            '    <script src="about-script.js"></script>\n' +
            '    <script src="node_modules/axe-core/axe.min.js"></script>\n' +
            '    <script src="axe-script.js"></script>\n' +
            `    <script id="/about-script.js">console.log('About page loaded');</script></body></html>`,
          htmlWithInlineScripts: '<html lang="en"><head><link rel="stylesheet" href="about-style.css"><style id="/about-style.css">h1 { color: #333; }</style></head>\n' +
            '  <body>\n' +
            '    <header>\n' +
            '      <h1>About Us</h1>\n' +
            '    </header>\n' +
            '    <main>\n' +
            '      <p>This is the about page.</p>\n' +
            '      <a href="index.html">Go to Home</a>\n' +
            '    </main>\n' +
            '    <script src="about-script.js"></script>\n' +
            '    <script src="node_modules/axe-core/axe.min.js"></script>\n' +
            '    <script src="axe-script.js"></script>\n' +
            `    <script id="/about-script.js">console.log('About page loaded');</script></body></html>`
        }
      }
    }
          
    const accessibilityStandards = [
      "wcag21aa",
      "wcag2aa",
      "best-practice"
  ];

    const fixedPageEvaluator = new FixedPageEvaluator(transformedInput, generatedFilesInfo, accessibilityStandards);


    it('fix all violations, return true', async () => {
        const result = await fixedPageEvaluator.evaluatePage();

        expect(result.success).toBe(true);
        expect(result.result).toEqual(generatedFilesInfo);
    });

});
