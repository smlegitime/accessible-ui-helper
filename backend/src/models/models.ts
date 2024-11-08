/**
 * Description: Initial models for the backend components
 * Created: Sybille Légitime
 * Created date: Oct 10, 2024 | Updated date:
 */

// Output Type of input processor
// What happens if the project is large? Do we look for the contents of dist/
// What about inline javascript <script></script> and css <p style="color:blue;"></p>
enum FileType {
    Html = "Html",
    Css = "Css",
    Js = "Js",
    Json = "Json"
}

enum Framework {
    VanillaProject = "VanillaProject", // we will likely leverage as use case
    React = "React",
    Angular = "Angular",
    Vue = "Vue"
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
    pages: string[];
    readonly id: string;
    impact: string;
    tags: Array<string>;
    description: string;
    help: string;
    helpUrl: string;
    nodes: [{
        [key: string]: Object;
    }];
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
    files: FileCollection;
    violations: AccViolation[];
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
}

export interface ExportRequest {
    files: ExportPackage[];
    outputPath: string;
}

// Input files from the front-end
export interface FileData {
    type: string;
    content: string;
}

export interface FixedFileData {
    originalData: FileData,
    generatedData: FileData
}
  
  export interface FileCollection {
    [key: string]: FileData | FixedFileData;
}

export interface AccessibilityResults {
    passes: Array<AccViolation>;
    violations: Array<AccViolation>;
    inapplicable: Array<AccViolation>;
    incomplete: Array<AccViolation>;
  }
