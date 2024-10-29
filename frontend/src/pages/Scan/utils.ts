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