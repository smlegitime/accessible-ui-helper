/**
 * Initial models for the back-end components
 *
 * @author Sybille Légitime
 */

// Output Type of input processor
// What happens if the project is large? Do we look for the contents of dist/
// What about inline javascript <script></script> and css <p style="color:blue;"></p>
enum FileType {
    Html,
    Css,
    Js
}

enum Framework {
    VanillaProject, // we will likely leverage as use case
    React,
    Angular,
    Vue
}

interface Page {
    readonly pageId: string;
    filePath: string; // full/file/path/file.extension
    viewport: {
        width: number,
        height: number
    };
    pageContent: {
        fileType: FileType.Html | FileType.Css | FileType.Js;
        framework: string | Framework;
        body: {
            originalVersion: string; // original code
            transpiledVersion: string; // code converted into vanilla version
        }
    };
}

// Accessibility Violations Type
interface AccViolation {
    readonly id: string;
    impact: string;
    tags: Array<string>;
    description: string;
    help: string;
    helpUrl: string;
    nodes: Object;
}

// Type that the Generate module receives (Output of Scanner)
// Most likely a list of those types
interface ScannedResult {
    readonly pageId: string;
    scannedResult: {
        codeBlock: string;
        violation: AccViolation;
    }    
}

// Type that the LLM module manipulates
interface LlmPrompt {
    violation: AccViolation; //contains what needs to be fixed
    fileCollection: FileCollection;  //contains all files that need to be fixed
    //template: string;
    //examples: Array<string>; // stringified version of ScannedResult.scannedResult
    //pageId: string; // Reference to project pages with pageIds
}

// Type outputted the generate fix outputs
interface GeneratedFixPage {
    pageId: string;
    fixResults: [
        {
            scannedResult: ScannedResult;
            newCodeBlock: string;
        }
    ]
}

// Type that the export module manipulates
interface ExportPackage {
    isScannedReport: boolean;
    contents: string; //encoded version of what's in the file
    encoding?: string;
    outputPath: string;
}
