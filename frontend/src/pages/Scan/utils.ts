import { FileCollection, FileData, FileType, Framework, Page } from "../../interfaces/scanInterfaces"
import { SandpackFiles } from "@codesandbox/sandpack-react/types"

/**
 * Converts fileCollectionData to SandpackFiles to be used an input in View 
 *     component
 * @param fileCollectionData 
 * @returns SandpackFiles object containing user code files
 */
export function fileCollectionToSandPackFiles(fileCollectionData: FileCollection): SandpackFiles {
    const organizedFiles: SandpackFiles = {}
    Object.keys(fileCollectionData).map((filepath) =>
        organizedFiles[`${filepath}`] = {
            code: fileCollectionData[filepath]['content'],
            readOnly: filepath === '/axe-script.js' ? true : false
        }
    )
    return organizedFiles
}

/**
 * Insert axe-score script into user's HTML. 
 * @param htmlContent - html to insert axe-core script into 
 * @returns html code with axe-core inserted.
 */
export function insertAxeScriptHTML(htmlContent: string) {
    const bodyEndIndex = htmlContent.indexOf("</body>")
    const newHTML = htmlContent.substring(0, bodyEndIndex) +
        `
    <script src="node_modules/axe-core/axe.min.js"></script>
    <script src="axe-script.js"></script>
    `
        + htmlContent.substring(bodyEndIndex);
    return newHTML
}

/**
 * Converts pages to FileCollection 
 * @param pages - Array of Pages[] that contain users code files
 * @returns FileCollection object that contains pages info
 */
export function pagesToFileCollection(pages: Page[], accessibilityStandards: string[]) {
    const initialFileCollection: FileCollection = {}
    switch (pages[0].pageContent.framework) {
        case Framework.Vanilla:
            pages.map((page) => {
                let pageCode = ""
                // update .html files to run axe-scripts
                if (page.pageContent.fileType === FileType.Html) {
                    pageCode = insertAxeScriptHTML(page.pageContent.body.originalVersion)
                } else {
                    pageCode = page.pageContent.body.originalVersion
                }
                const pageInfo: FileData = {
                    type: page.pageContent.fileType,
                    content: pageCode
                }
                return initialFileCollection["/" + page.filePath.substring(page.filePath.indexOf('/') + 1)] = pageInfo
            });
            //Add axe-script here and file validation
            initialFileCollection["/axe-script.js"] = {
                type: FileType.Js,
                content: `
                        import axe from 'axe-core';
                          
                        axe.run(
                            {
                                runOnly: [${accessibilityStandards.map((standard) => `'${standard}'`)}]
                            },
                        ).then((results) =>
                          window.parent.postMessage({ type: 'axeResults', results }, '*')
                          );
                      `
            }
            initialFileCollection["/package.json"] = {
                type: FileType.Json,
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
            }
            return initialFileCollection
        case Framework.Angular:
            return {} as FileCollection
        case Framework.React:
            return {} as FileCollection
        case Framework.Vue:
            return {} as FileCollection
        default:
            return {} as FileCollection
    }
}
