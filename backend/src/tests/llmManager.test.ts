
import { LLMManager } from "../services/llmManager"; 
import {GeneratedFilesInfo, FileData, AccViolation, FileCollection, FixedFileCollection } from '../models/models';

// llm sample output
// ```html
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Home Page Updated</title>
//     <link rel="stylesheet" href="style.css">
//   </head>
//   <body>
//     <h1>Home Page Updated</h1>
//     <main>
//       <button id="btn">Click Me</button>
//       <a href="about.html">Go to About</a>
//     </main>
//     <script src="node_modules/axe-core/axe.min.js"></script>
//     <script src="script.js"></script>
//     <script src="axe-script.js"></script>
//   </body>
// </html>
// ```
let test_output_string = "```html\n\
<!DOCTYPE html>\n\
<html>\n\
  <head>\n\
    <title>Home Page Updated</title>\n\
    <link rel=\"stylesheet\" href=\"style.css\">\n\
  </head>\n\
  <body>\n\
    <header>\n\
      <h1>Home Page Updated</h1>\n\
    </header>\n\
    <main>\n\
      <button id=\"btn\">Click Me</button>\n\
      <a href=\"about.html\">Go to About</a>\n\
    </main>\n\
    <script src=\"node_modules/axe-core/axe.min.js\"></script>\n\
    <script src=\"script.js\"></script>\n\
    <script src=\"axe-script.js\"></script>\n\
  </body>\n\
</html>\n\
```\n\
*****\n\
```html\n\
<header>\n\
  <h1>Home Page Updated</h1>\n\
</header>\n\
*****\n\
<main>\n\
  <button id=\"btn\">Click Me</button>\n\
  <a href=\"about.html\">Go to About</a>\n\
</main>\n\
*****"

let manager = new LLMManager();
            


        
const fileCollection: FileCollection = {}
fileCollection["/index.html"] = {
  type: "html",
  content: "<!DOCTYPE html>\n  <html>\n    <head>\n      <title>Home Page Updated</title>\n      <link rel=\"stylesheet\" href=\"style.css\">\n    </head>\n    <body>\n      <h1>Home Page Updated</h1>\n      <button id=\"btn\">Click Me</button>\n      <a href=\"about.html\">Go to About</a>\n      <script src=\"node_modules/axe-core/axe.min.js\"></script>\n      <script src=\"script.js\"></script>\n      <script src=\"axe-script.js\"></script>\n    </body>\n  </html>",
  violationInfo: [
    {
      target: 'h1',
      targetCode: '<h1>Home Page Updated',
      message: 'Some page content not contained by landmarks'
    }
  ]
}

fileCollection["/style.css"] = {
  type: "css",
  content: "body { \n    font-family: Arial; \n  } \n  img { \n    width: 100px; \n  }"
};

fileCollection["/script.js"] = {
  type: "js",
  content: "document.getElementById('btn').addEventListener('click', function() {\n    alert('Updated Button Clicked!');\n  });"
};

fileCollection["/about.html"] = {
  type: "html",
  content: "<!DOCTYPE html>\n  <html>\n    <head>\n      <title>About Us</title>\n      <link rel=\"stylesheet\" href=\"about-style.css\">\n    </head>\n    <body>\n      <h1>CHANGED</h1>\n      <p>This is the about page.</p>\n      <a href=\"index.html\">Go to Home</a>\n      <script src=\"node_modules/axe-core/axe.min.js\"></script>\n      <script src=\"about-script.js\"></script>\n      <script src=\"axe-script.js\"></script>\n    </body>\n  </html>"
};

fileCollection["/about-style.css"] = {
    type: "css",
    content: "h1 { \n    color: yellow; \n  }"
};

fileCollection["/about-script.js"] = {
    type: "js",
    content: "console.log('About page loaded lglg');"
};

fileCollection["/axe-script.js"] = {
    type: "js",
    content: "\n      console.log(1);\n    import axe from 'axe-core';\n      \n    axe.run().then((results) =>\n      window.parent.postMessage({ type: 'axeResults', results }, '*')\n      );\n    "
};
fileCollection["/package.json"] = {
    type: "json",
    content: "{\n    \"name\": \"html-css-js\",\n    \"version\": \"1.0.0\",\n    \"description\": \"\",\n    \"main\": \"index.html\",\n    \"scripts\": {\n      \"start\": \"parcel index.html --open\",\n      \"build\": \"parcel build index.html\"\n    },\n    \"dependencies\": {\"axe-core\": \"^4.10.1\"},\n    \"devDependencies\": {\n      \"@babel/core\": \"7.2.0\",\n      \"parcel-bundler\": \"^1.6.1\",\n      \"axe-core\": \"^4.10.1\"\n  \n    },\n    \"keywords\": []\n  }"
};

fileCollection["/about_img.jpg"] = {
    type: "img",
    content: ""
}

let violationArray: AccViolation[] = []

violationArray.push(
  {
    pages: [
        "/index.html"
    ],
    id: "landmark-one-main",
    impact: "moderate",
    tags: [
        "cat.semantics",
        "best-practice"
    ],
    description: "Ensure the document has a main landmark",
    help: "Document should have one main landmark",
    helpUrl: "https://dequeuniversity.com/rules/axe/4.10/landmark-one-main?application=axeAPI",
    nodes: [
        {
            "any": [],
            "all": [
                {
                    "id": "page-has-main",
                    "data": null,
                    "relatedNodes": [],
                    "impact": "moderate",
                    "message": "Document does not have a main landmark"
                }
            ],
            "none": [],
            "impact": "moderate",
            "html": "<html lang=\"en\">",
            "target": [
                "html"
            ],
            failureSummary: "Fix all of the following:\n  Document does not have a main landmark"
        }
    ]
}
)

// violationArray.push(
//   {
//     pages: [],
//     id: "region",
//     impact: "moderate",
//     tags: [
//         "cat.keyboard",
//         "best-practice"
//     ],
//     description: "Ensure all page content is contained by landmarks",
//     help: "All page content should be contained by landmarks",
//     helpUrl: "https://dequeuniversity.com/rules/axe/4.10/region?application=axeAPI",
//     nodes: [
//         {
//             "any": [
//                 {
//                     "id": "region",
//                     "data": {
//                         "isIframe": false
//                     },
//                     "relatedNodes": [],
//                     "impact": "moderate",
//                     "message": "Some page content is not contained by landmarks"
//                 }
//             ],
//             "all": [],
//             "none": [],
//             "impact": "moderate",
//             "html": "<h1>Home Page Updated</h1>",
//             "target": [
//                 "h1"
//             ],
//             "failureSummary": "Fix any of the following:\n  Some page content is not contained by landmarks"
//         },
//         {
//             "any": [
//                 {
//                     "id": "region",
//                     "data": {
//                         "isIframe": false
//                     },
//                     "relatedNodes": [],
//                     "impact": "moderate",
//                     "message": "Some page content is not contained by landmarks"
//                 }
//             ],
//             "all": [],
//             "none": [],
//             "impact": "moderate",
//             "html": "<a href=\"about.html\">Go to About</a>",
//             "target": [
//                 "a"
//             ],
//             "failureSummary": "Fix any of the following:\n  Some page content is not contained by landmarks"
//         }
//     ]
// }
// )

// const llmPrompt: LlmPrompt = {
//   files: fileCollection,
//   violations: violationArray
// };

manager.getFixes(fileCollection);