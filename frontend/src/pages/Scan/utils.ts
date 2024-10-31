import { FileCollection } from "@/src/interfaces/scanInterfaces"
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

export function insertAxeScriptHTML(htmlContent: string){
    const bodyEndIndex = htmlContent.indexOf("</body>")
    const newHTML = htmlContent.substring(0, bodyEndIndex) + 
    `
    <script src="node_modules/axe-core/axe.min.js"></script>
    <script src="axe-script.js"></script>
    `
     + htmlContent.substring(bodyEndIndex);
    return newHTML
}

