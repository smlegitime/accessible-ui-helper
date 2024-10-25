// Interfaces to define the structure of file data, violations, scanned results, and generated fixes
enum FileType {
  Html,
  Css,
  Js,
}

enum Framework {
  VanillaProject, // we will likely leverage as use case
  React,
  Angular,
  Vue,
}

interface Page {
  readonly pageId: string;
  filePath: string; // full/file/path/file.extension
  viewport: {
    width: number;
    height: number;
  };
  pageContent: {
    fileType: FileType.Html | FileType.Css | FileType.Js;
    framework: string | Framework;
    body: {
      originalVersion: string; // original code
      transpiledVersion: string; // code converted into vanilla version
    };
  };
}

export interface FileData {
  type: string;
  content: string;
}

export interface FileCollection {
  [key: string]: FileData;
}

export interface AccViolation {
  readonly id: string;
  impact: string;
  tags: Array<string>;
  description: string;
  help: string;
  helpUrl: string;
  nodes: Object;
}

export interface PageScannedResult {
  readonly pageId: string;
  scannedResult: {
    codeBlock: string;
    violation: AccViolation;
  };
}

export interface GeneratedFixPage {
  pageId: string;
  fixResults: Array<{
    scannedResult: PageScannedResult;
    newCodeBlock: string;
  }>;
}

export interface AccessibilityResults {
  passes: AccViolation[];
  violations: AccViolation[];
  inapplicable: AccViolation[];
  incomplete: AccViolation[];
}
