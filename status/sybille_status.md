## Sybille Légitime

### 9/25
- Set up an initial README.md
- Reworded specs defined in last week's meeting

### 9/30
- Updated Repo Wiki

### 10/4
- Updated high-level design diagram for project presentation

### 10/4
- Updated main data models for use throughout the app

### 10/11
- Created github CI workflow for node.js. Later refactored config for backend application.

### 10/18
- Restructured the /backend/src subfolder for decoupling and scalability. Included `/controllers`, `/routes`, `/lib` (for utilities), `/models`, and `/services` subfolders

### 10/22
- Added base configuration file
- Updated model.ts
- Added input transformer service and logger utility which I will be implementing in the future

### 11/12
- Created and included sample backend request and response objects for backend development under `/src/models/mocks`
- Added initial generated page evaluator logic for the backend (`/src/services/fixedPageEvaluator.ts`)
- Added custom logger code (`/src/lib/logging.ts`)
- Completed main Input Transformer code (`src/services/inputTransformer.ts`)

Sample transformed output for an `about.html` page with accessibility violations:
```
{
    "/index.html": {
        "type": "Html",
        "content": "<html>\n        <head>\n          <link rel=\"stylesheet\" href=\"style.css\">\n        </head>\n        <body>\n          <h1>Home Page</h1>\n          <button id=\"btn\">Click Me</button>\n          <div id=\"count\"></div>\n          <a href=\"about.html\">Go to About</a>\n          <script src=\"script.js\"></script>\n        \n    <script src=\"node_modules/axe-core/axe.min.js\"></script>\n    <script src=\"axe-script.js\"></script>\n    </body>\n      </html>",
        "violationInfo": [],
        "htmlWithInlineScripts": "<html><head>\n          <link rel=\"stylesheet\" href=\"style.css\">\n        <style id=\"/style.css\">body { font-family: Arial; } img { width: 100px; }</style></head>\n        <body>\n          <h1>Home Page</h1>\n          <button id=\"btn\">Click Me</button>\n          <div id=\"count\"></div>\n          <a href=\"about.html\">Go to About</a>\n          <script src=\"script.js\"></script>\n        \n    <script src=\"node_modules/axe-core/axe.min.js\"></script>\n    <script src=\"axe-script.js\"></script>\n    \n      <script id=\"/script.js\">document.getElementById('btn').addEventListener('click', function() {\n        alert('Button clicked!');\n        });</script></body></html>"
    },
    "/about.html": {
        "type": "Html",
        "content": "<html>\n        <head><link rel=\"stylesheet\" href=\"about-style.css\"></head>\n        <body>\n          <h1>About Us</h1>\n          <p>This is the about page.</p>\n          <a href=\"index.html\">Go to Home</a>\n          <script src=\"about-script.js\"></script>\n        \n    <script src=\"node_modules/axe-core/axe.min.js\"></script>\n    <script src=\"axe-script.js\"></script>\n    </body>\n      </html>",
        "violationInfo": [
            {
                "target": "h1",
                "targetCode": "<h1>About Us</h1>",
                "message": "Fix any of the following:\n  Element has insufficient color contrast of 1.07 (foreground color: #ffff00, background color: #ffffff, font size: 24.0pt (32px), font weight: bold). Expected contrast ratio of 3:1"
            },
            {
                "target": "html",
                "targetCode": "<html lang=\"en\">",
                "message": "Fix all of the following:\n  Document does not have a main landmark"
            },
            {
                "target": "h1",
                "targetCode": "<h1>About Us</h1>",
                "message": "Fix any of the following:\n  Some page content is not contained by landmarks"
            },
            {
                "target": "p",
                "targetCode": "<p>This is the about page.</p>",
                "message": "Fix any of the following:\n  Some page content is not contained by landmarks"
            },
            {
                "target": "a",
                "targetCode": "<a href=\"index.html\">Go to Home</a>",
                "message": "Fix any of the following:\n  Some page content is not contained by landmarks"
            }
        ],
        "htmlWithInlineScripts": "<html><head><link rel=\"stylesheet\" href=\"about-style.css\"><style id=\"/about-style.css\">h1 { color: yellow; }</style></head>\n        <body>\n          <h1>About Us</h1>\n          <p>This is the about page.</p>\n          <a href=\"index.html\">Go to Home</a>\n          <script src=\"about-script.js\"></script>\n        \n    <script src=\"node_modules/axe-core/axe.min.js\"></script>\n    <script src=\"axe-script.js\"></script>\n    \n      <script id=\"/about-script.js\">console.log('About page loaded');</script></body></html>"
    },
    "/about-script.js": {
        "type": "Js",
        "content": "console.log('About page loaded');"
    },
    "/about-style.css": {
        "type": "Css",
        "content": "h1 { color: yellow; }"
    },
    "/script.js": {
        "type": "Js",
        "content": "document.getElementById('btn').addEventListener('click', function() {\n        alert('Button clicked!');\n        });"
    },
    "/package.json": {
        "type": "Json",
        "content": "{\n              \"name\": \"html-css-js\",\n              \"version\": \"1.0.0\",\n              \"description\": \"\",\n              \"main\": \"index.html\",\n              \"scripts\": {\n                \"start\": \"parcel index.html --open\",\n                \"build\": \"parcel build index.html\"\n              },\n              \"dependencies\": {\"axe-core\": \"^4.10.1\"},\n              \"devDependencies\": {\n                \"@babel/core\": \"7.2.0\",\n                \"parcel-bundler\": \"^1.6.1\",\n                \"axe-core\": \"^4.10.1\"\n              },\n              \"keywords\": []\n            }"
    },
    "/style.css": {
        "type": "Css",
        "content": "body { font-family: Arial; } img { width: 100px; }"
    },
    "/axe-script.js": {
        "type": "Js",
        "content": "\n                import axe from 'axe-core';\n                \n                // Add highlight function\n                function highlightElement(selector, html, active) {\n                    console.log('Highlighting element:', { selector, html, active });\n                    try {\n                        let elements = [];\n                        \n                        // 1. Try direct selector\n                        elements = Array.from(document.querySelectorAll(selector));\n                        \n                        // 2. If not found and we have html, try to find by content\n                        if (elements.length === 0 && html) {\n                            const cleanHtml = html.replace(/['\"]/g, '');\n                            document.querySelectorAll(selector.split('>')[0]).forEach(el => {\n                                if (el.outerHTML.replace(/['\"]/g, '') === cleanHtml) {\n                                    elements.push(el);\n                                }\n                            });\n                        }\n                        \n                        // 3. If still not found, try basic tag\n                        if (elements.length === 0) {\n                            elements = Array.from(document.getElementsByTagName(selector));\n                        }\n\n                        console.log('Found elements to highlight:', elements);\n                        \n                        // Add styles if not already present\n                        if (!document.getElementById('highlight-styles')) {\n                            const style = document.createElement('style');\n                            style.id = 'highlight-styles';\n                            style.textContent = `\n                                @keyframes pulseOutline {\n                                    0% { outline-color: rgba(253, 144, 144, 0.8); }\n                                    50% { outline-color: rgba(253, 144, 144, 0.4); }\n                                    100% { outline-color: rgba(253, 144, 144, 0.8); }\n                                }\n                                \n                                @keyframes pulseBackground {\n                                    0% { background-color: rgba(253, 144, 144, 0.1); }\n                                    50% { background-color: rgba(253, 144, 144, 0.05); }\n                                    100% { background-color: rgba(253, 144, 144, 0.1); }\n                                }\n                            `;\n                            document.head.appendChild(style);\n                        }\n                        \n                        elements.forEach(el => {\n                            if (active) {\n                                // Add smooth transition\n                                el.style.transition = 'all 0.3s ease-in-out';\n                                \n                                // Main highlight effect\n                                el.style.outline = '2px solid rgba(253, 144, 144, 0.8)';\n                                el.style.outlineOffset = '4px';\n                                el.style.boxShadow = '0 0 0 4px rgba(253, 144, 144, 0.2)';\n                                \n                                // Background effect\n                                el.style.backgroundColor = 'rgba(253, 144, 144, 0.1)';\n                                \n                                // Add animations\n                                el.style.animation = 'pulseOutline 2s infinite, pulseBackground 2s infinite';\n                                \n                                // Scroll into view\n                                el.scrollIntoView({ \n                                    behavior: 'smooth', \n                                    block: 'center',\n                                    inline: 'center'\n                                });\n                            } else {\n                                // Clear all effects\n                                el.style.transition = '';\n                                el.style.outline = '';\n                                 el.style.outlineOffset = '';\n                                el.style.boxShadow = '';\n                                el.style.backgroundColor = '';\n                                el.style.animation = '';\n                            }\n                        });\n                    } catch (error) {\n                        console.error('Error highlighting element:', error);\n                    }\n                }\n\n                // Message handler\n                function handleMessage(event) {\n                    console.log('Received message in iframe:', event.data);\n                    if (event.data.type === 'highlightViolation') {\n                        const { selector, html, active } = event.data;\n                        highlightElement(selector, html, active);\n                    } else if (event.data.type === 'clearHighlights') {\n                        // Clear all highlights\n                        document.querySelectorAll('*').forEach(el => {\n                            el.style.transition = '';\n                            el.style.outline = '';\n                            el.style.outlineOffset = '';\n                            el.style.boxShadow = '';\n                            el.style.backgroundColor = '';\n                            el.style.animation = '';\n                        });\n                    }\n                }\n\n                // Initialize highlight system\n                function initializeHighlight() {\n                    console.log('Initializing highlight system');\n                    window.removeEventListener('message', handleMessage);\n                    window.addEventListener('message', handleMessage);\n                    console.log('Highlight system initialized');\n                }\n\n                // Run initialization\n                initializeHighlight();\n                \n                // Run axe check\n                axe.run({\n                    runOnly: ['wcag21aa','wcag2aa','best-practice']\n                }).then((results) => {\n                    console.log('Axe scan results:', results);\n                    window.parent.postMessage({ type: 'axeResults', results }, '*')\n                });\n            "
    }
}
```

### 11/20
- Refactored `controller` and `InputTransformer` code
- Standardized copyright statement for file headers
- Added code changes from group code review
- Added unit test `inputTransformer.test.ts` file

### 11/22
- Merged `frontend-dev` and `backend-dev` branches to `main` as part of team meeting, and resolved merged conflicts

### 11/30
- Updated frontend request payload to include `currentScannedPage`, the value of the current page being scanned for accessibility violations (`frontend/src/pages/Scan/index.tsx` and `frontend/src/pages/Scan/AccessibilityPanel.tsx`)
- Updated input transformer code to file names of associated CSS and JS files as ID to tags in `htmlWithInline` code that is passed in to LLM service, and used by output processor.

### 12/1
- Preliminary refactoring of backend code to standardize and cleanup code files. (Packaged similar code into function, added file headers, removed commented code and `console.log` statements)
- Cleaned project folder and removed unnecessary subfolders.
- Updated `README` files for the repo.

### 12/3
- Added containerization and reverse proxy configurations for front end and backend