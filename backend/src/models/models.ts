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
interface Page {
    readonly pageId: string;
    filename: string;
    viewport: {
        width: number,
        height: number
    };
    pageContent: {
        fileType: FileType.Html | FileType.Css | FileType.Js;
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
    template: string;
    examples: Array<string>;
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
    contents: string;
    encoding: string;
    outputPath: string;
}