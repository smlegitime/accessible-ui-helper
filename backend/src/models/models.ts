/**
 * Description: Initial models for the backend components
 * @author Sybille Légitime
 * @copyright 2024. All rights reserved.
 */

export enum FileType {
    Html = "Html",
    Css = "Css",
    Js = "Js",
    Json = "Json"
}

export enum Framework {
    VanillaProject = "VanillaProject", // we will likely leverage as use case
    React = "React",
    Angular = "Angular",
    Vue = "Vue"
}

export interface PageAsset {
    assetId: string;
    assetSize: string;
    assetEncoding?: string;
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

export interface ViolationTarget {
    target: string;
    targetCode: string;
    message: string;
}

// Input files from the front-end
export interface FileData {
    type: string;
    content: string;
    violationInfo?: ViolationTarget[]
    htmlWithInlineScripts?: string
}

export interface FixedFileData {
    type: string;
    content: string;
    // updatedCodeBlocks: string[];
    htmlWithInlineScripts?: string

}
  
  export interface FileCollection {
    [key: string]: FileData;
}

// Type outputted the generate fix outputs
export interface FixedFileCollection {
    [key: string]: FixedFileData;
}

export interface GeneratedFilesInfo {
    currentScannedPage: string;
    originalData: FileCollection;
    generatedCode: FixedFileCollection;
}

export interface AccessibilityResults {
    passes: Array<AccViolation>;
    violations: Array<AccViolation>;
    inapplicable: Array<AccViolation>;
    incomplete: Array<AccViolation>;
}
