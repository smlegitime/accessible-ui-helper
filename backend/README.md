# `accessible-ui-helper/backend`
Folder containing the backend code for the  - [CSCI2340](https://sites.google.com/brown.edu/csci2340/home) Software Engineering Course. The backend is built using [Express.js](https://expressjs.com/), and is written in [TypeScript](https://www.typescriptlang.org/).

## 🗂️ Folder structure
```
.
├── archive                 # Old unused code
├── src                     # Source files
│   ├── config/                  # Backend config
│   ├── controllers/             # Handles orchestration at /fix route
│   ├── lib/                     # Contains utilities
│   ├── middleware/              # Has middleware
│   ├── models/                  # Contains interfaces
│   ├── routes/                  # Routes folder
│   ├── services/                # Contains all the backend services
│   ├── test/                    # Has Jest tests
│   ├── index.ts                 # Express app definition
│   └── server.ts                # Server file
├── .env                    # ADD FILE IN THIS FOLDER: GPT_API_TOKEN=<yourOpenAIAPIKey>
├── .gitignore
├── Dockerfile            
├── package-lock.json             
├── package.json
├── README.md
└── ...                     # Transpiler, linter config files
```

## ✅ Pre-requisites
- Node.js (`v16` and up)
- OpenAI API key. Add a `.env` file to the root of `accessible-ui-helper/backend/`, and inside the file add `GPT_API_TOKEN=<yourOpenAiApiKey>`. For more info on OpenAI API keys, check the [OpenAI website](https://openai.com/index/openai-api/).

## 🛠️ Installation

Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install the `accessible-ui-helper` backend dependencies.

```bash
cd accessible-ui-helper/backend

npm install
```

To start the server, or run the test suite, choose one of the following options:
```bash
npm run dev #(dev environment and hot reload)

npm start #(prod environment)

npm test #(run Jest test suite)
```

## 💻 Usage

The server will be running on `localhost:8000`. The main endpoint for the api is `/api/fix`;

Below is an example cURL request against the endpoint:

```bash
curl --location 'http://localhost:8000/api/fix' \
--header 'Content-Type: application/json' \
--data-raw '{
    "framework": "Vanilla",
    "currentScannedPage": "/about.html",
    "fileCollection": {
        "/index.html": {
            "type": "Html",
            "content": "<html>\n        <head>\n          <link rel=\"stylesheet\" href=\"style.css\">\n        </head>\n        <body>\n          <h1>Home Page</h1>\n          <button id=\"btn\">Click Me</button>\n          <div id=\"count\"></div>\n          <a href=\"about.html\">Go to About</a>\n          <script src=\"script.js\"></script>\n        \n    <script src=\"node_modules/axe-core/axe.min.js\"></script>\n    <script src=\"axe-script.js\"></script>\n    </body>\n      </html>"
        },
        "/about.html": {
            "type": "Html",
            "content": "<html>\n        <head><link rel=\"stylesheet\" href=\"about-style.css\"></head>\n        <body>\n          <h1>About Us</h1>\n          <p>This is the about page.</p>\n          <a href=\"index.html\">Go to Home</a>\n          <script src=\"about-script.js\"></script>\n        \n    <script src=\"node_modules/axe-core/axe.min.js\"></script>\n    <script src=\"axe-script.js\"></script>\n    </body>\n      </html>"
        },
        "/about-script.js": {
            "type": "Js",
            "content": "console.log('\''About page loaded'\'');"
        },
        "/about-style.css": {
            "type": "Css",
            "content": "h1 { color: yellow; }"
        },
        "/script.js": {
            "type": "Js",
            "content": "document.getElementById('\''btn'\'').addEventListener('\''click'\'', function() {\n        alert('\''Button clicked!'\'');\n        });"
        },
        "/package.json": {
            "type": "Json",
            "content": "{\n              \"name\": \"html-css-js\",\n              \"version\": \"1.0.0\",\n              \"description\": \"\",\n              \"main\": \"index.html\",\n              \"scripts\": {\n                \"start\": \"parcel index.html --open\",\n                \"build\": \"parcel build index.html\"\n              },\n              \"dependencies\": {\"axe-core\": \"^4.10.1\"},\n              \"devDependencies\": {\n                \"@babel/core\": \"7.2.0\",\n                \"parcel-bundler\": \"^1.6.1\",\n                \"axe-core\": \"^4.10.1\"\n              },\n              \"keywords\": []\n            }"
        },
        "/style.css": {
            "type": "Css",
            "content": "body { font-family: Arial; } img { width: 100px; }"
        }
    },
    "violations": [
        {
            "id": "region",
            "impact": "moderate",
            "tags": [
                "cat.keyboard",
                "best-practice"
            ],
            "description": "Ensure all page content is contained by landmarks",
            "help": "All page content should be contained by landmarks",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/region?application=axeAPI",
            "nodes": [
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "Some page content is not contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": "moderate",
                    "html": "<h1>About Us</h1>",
                    "target": [
                        "h1"
                    ],
                    "failureSummary": "Fix any of the following:\n  Some page content is not contained by landmarks"
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "Some page content is not contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": "moderate",
                    "html": "<p>This is the about page.</p>",
                    "target": [
                        "p"
                    ],
                    "failureSummary": "Fix any of the following:\n  Some page content is not contained by landmarks"
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "Some page content is not contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": "moderate",
                    "html": "<a href=\"index.html\">Go to Home</a>",
                    "target": [
                        "a"
                    ],
                    "failureSummary": "Fix any of the following:\n  Some page content is not contained by landmarks"
                }
            ]
        }
    ],
    "accessibilityStandards": [
        "wcag21aa",
        "wcag2aa",
        "best-practice"
    ]
}'
```

## 👥 Contributors

Backend Team members:

- [Sybille Légitime](https://github.com/)
- [Rio Young](https://github.com/)
- [Ruoqian Zhang](https://github.com/)
- [Zheng Que](https://github.com/)

## 📜 License

[MIT License](https://choosealicense.com/licenses/mit/)