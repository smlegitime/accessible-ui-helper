/**
 * Description: Initial models for the backend components
 * Created: Sybille Légitime
 * Created date: Oct 10, 2024 | Updated date: Oct 22, 2024
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

export interface PageContent {
    fileType: FileType.Html | FileType.Css | FileType.Js;
    framework: string | Framework;
    body: {
        originalVersion: string; // original code
        transpiledVersion: string; // code converted into vanilla version
    }
}

export interface PageAsset {
    assetId: string;
    assetSize: string;
    assetEncoding?: string;
}

export interface Page {
    readonly pageId: string;
    filePath: string; // full/file/path/file.extension
    viewport: {
        width: number,
        height: number
    };
    pageContent: PageContent;
    pageAssets: Array<PageAsset>;
}

// Accessibility Violations Type
export interface AccViolation {
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
export interface ScannedResult {
    readonly pageId: string;
    scannedResult: {
        codeBlock: string;
        violation: AccViolation;
    }    
}

// Type that the LLM module manipulates
export interface LlmPrompt {
    template: string;
    examples: Array<string>; // stringified version of ScannedResult.scannedResult
    pageId: string; // Reference to project pages with pageIds
}

// Type outputted the generate fix outputs
export interface GeneratedFixPage {
    pageId: string;
    fixResults: [
        {
            scannedResult: ScannedResult;
            newCodeBlock: string;
        }
    ]
}

// Type that the export module manipulates
export interface ExportPackage {
    isScannedReport: boolean;
    contents: string; //encoded version of what's in the file
    encoding?: string;
    outputPath: string;
}