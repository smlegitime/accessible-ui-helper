/**
 * Description: Performs fixes on a page based on an accessibility report using an LLM
 * Created: Rio Young
 * Created date: Oct 22, 2024 | Updated date: 11/6/24
 */

import {LlmPrompt, GeneratedFixPage, AccViolation, FileCollection } from '../models/models';
import * as path from "path";
import { exec } from "child_process";
import * as fs from 'fs';




import './errorHandler';

// PromptBuilder
// Retrieve prompt template
// Add few-shot examples (from scanned results)
// Configure LLM call
// Make request
// Update data with new code
// (Store data)
// (FixedPageEvaluator?)

const LLAMA_API_URL = "https://api.llama-api.com/chat/completions"
const LLAMA_API_TOKEN= "LA-8cef0a65fa154994b08f69f22897b0c618f390884ea34aa69c1d029fa9308b4c"

class LLMManager {

  /**
   * Main class method
   * @param promptInfo: contains information needed to generate prompt, such as the 
   *  AccViolations and FileCollection to fix
   *                           
   * @returns The fixed page generated by the LLM
   */
  public async getFixes(promptInfo: LlmPrompt) : Promise<FileCollection | null >
  { 
    const fileCollection = promptInfo.files;
    const accViolations = promptInfo.violations;
    
    for (const violationKey in accViolations)
    {
      // get each violation
      const violation = accViolations[violationKey]
      console.log("violationKey: " + violationKey);
      console.log("violation: " + violation);
      // create a prompt for the violation
      const template = this.promptBuilder(violation, fileCollection);

      // If something goes wrong when generating template
      // ex: can't find file that the violation is referring to
      if (template == "")
      {
        continue;
      }

      console.log("TEMPLATE: " + template)

      fs.writeFile("template.txt", template, (err) => {
        if (err) {
          console.error('Error writing to file:', err);
        } else {
          console.log('File written successfully.');
        }
      });
      // const scriptPath = path.resolve(__dirname, "template.txt");
      // call llm with prompt for this fix
      let fixedFiles = null;
      this.callLLM("template.txt")
        .then((data) => {
          fixedFiles = data; // Output: "Data from API"
          console.log("Python script output:", data)
          
        })
        .catch((error) => {
          console.error(error);
        });
      // check files validity
      if (fixedFiles != null && this.validFixedPage(fixedFiles))
      {
        // add fixes to file
        // need to find original file and then add changes
        // fileCollection[''] = fixedFiles;
      }
      

    }

    
    return promptInfo.files; 
  }



   /**
    * Builds a prompt based on the details in the scanned report 
    * @param promptInfo 
    * @returns String of the prompt that will be used when calling the LLM
    */
  private promptBuilder(violation: AccViolation, fileCollection: FileCollection) : string
  { 
    let pages = violation.pages;
    // FOR NOW ONLY WORKING WITH ONE PAGE
    for (const pageIndex in pages)
    {
      let page = pages[pageIndex]
      console.log(page);
      if (! (page in fileCollection ))
      {
        console.error("Page not in FileCollection");
        return "";
      }
      let fileData = fileCollection[page];
      console.log(fileData);
      let content = fileData["content"]
      let fileType = fileData["type"]
      
      console.log("fileType: " + fileType);
      console.log("content: " + content);

      let nodes = violation.nodes as Object[];
      // NEED TO CHANGE TO HANDLE MULTIPLE NODES
      // ALSO NEED TO ERROR CHECK FOR FAILURE SUMMARY
      let failureSummary = violation.nodes[0]["failureSummary"];
      console.log("failureSummary: " + failureSummary);
      // const PROMPT_TEMPLATE = `You are a helpful code assistant that can help a developer
      //   develop accessible web applications. 
      //   Using the provided context, answer the user's question 
      //   to the best of your ability using only the resources provided. 
      //   Don't explain the code, just generate the code block itself.

      //   I have a ${fileType} file below:
        
      //   ${content}

      //   ${failureSummary}`;
      const PROMPT_TEMPLATE = `You are a helpful code assistant that can help a developer
        develop accessible web applications. 
        Using the provided context, answer the user's question 
        to the best of your ability using only the resources provided. 
        Don't explain the code, just generate the code block itself.

        I have a ${fileType} file below:
        
        ${content}

        Return a copy of the code above`;

        return PROMPT_TEMPLATE;
    }
    return "";
  }

  /**
   * Takes prompt returned by prompt builder, calls LLM and returns a fixed page
   * @param template 
   * @returns Page fixed based on accessibility report
   */
  // private async callLLM(template: string) : Promise<FileCollection | null> { 
  private async callLLM(template: string) : Promise<string> { 

    // Resolve the full path to script.py
  const scriptPath = path.resolve(__dirname, "llama.py");

  return new Promise((resolve, reject) => {
    exec(`python3 ${scriptPath} ${template}`, (error, stdout, stderr) => {
      if (error) {
        reject(`Error: ${error.message}`);
      } else if (stderr) {
        reject(`Stderr: ${stderr}`);
      } else {
        resolve(stdout);
      }
    });
  });
    return ""; 
  }

  /**
   * Potential additional method to ensure that the fixes returned are valid, uses Error Handler
   * @param pageFixes 
   * @returns True if page is valid, false otherwise
   */
  private validFixedPage(pageFixes: FileCollection) : boolean { return false; }
  


}

let manager = new LLMManager();
            


        
const fileCollection: FileCollection = {}
fileCollection["/index.html"] = {type: "html",
  content: "<!DOCTYPE html>\n  <html>\n    <head>\n      <title>Home Page Updated</title>\n      <link rel=\"stylesheet\" href=\"style.css\">\n    </head>\n    <body>\n      <h1>Home Page Updated</h1>\n      <button id=\"btn\">Click Me</button>\n      <a href=\"about.html\">Go to About</a>\n      <script src=\"node_modules/axe-core/axe.min.js\"></script>\n      <script src=\"script.js\"></script>\n      <script src=\"axe-script.js\"></script>\n    </body>\n  </html>"
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

const llmPrompt: LlmPrompt = {
  files: fileCollection,
  violations: violationArray
};

manager.getFixes(llmPrompt);