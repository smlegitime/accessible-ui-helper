import { FileCollection, FileData, FileType, Framework, Page } from "../../interfaces/scanInterfaces"
import { SandpackFiles } from "@codesandbox/sandpack-react/types"

export function fileCollectionToSandPackFiles(fileCollectionData: FileCollection): SandpackFiles {
    const organizedFiles: SandpackFiles = {}
    Object.keys(fileCollectionData).map((filepath) =>
        organizedFiles[`${filepath}`] = {
            code: fileCollectionData[filepath]['content']
        }
    )
    return organizedFiles
}

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

export function PagesToFileCollection(pages: Page[]) {
    const initialFileCollection: FileCollection = {}
    switch (pages[0].pageContent.framework) {
        case Framework.VanillaProject:
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
                          
                        axe.run().then((results) =>
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
