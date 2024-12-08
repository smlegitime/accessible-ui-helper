/**
 * @fileoverview Tests the LLMManager for correctness
 * @author Rio Young
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */
import { LLMManager } from "../services/llmManager"; 
import {GeneratedFilesInfo, FileData, AccViolation, FileCollection, FixedFileCollection } from '../models/models';

describe('LlmManager', () => {

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

  it('should call LLM', async() => {
    await manager.getFixes('/index.html', fileCollection);
  });
});
