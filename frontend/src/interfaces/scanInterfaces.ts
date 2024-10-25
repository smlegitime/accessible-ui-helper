// Interfaces to define the structure of file data, violations, scanned results, and generated fixes
export enum FileType {
  Html = 'Html',
  Css = 'Css',
  Js = 'Js',
  Other = 'Other'
}
export enum Framework {
  VanillaProject = 'VanillaProject', 
  React = 'React',
  Angular = 'Angular',
  Vue = 'Vue'
}

export interface Page {
  readonly pageId: string;
  filePath: string; 
  viewport: {
    width: number,
    height: number
  };
  pageContent: {
    fileType: FileType;
    framework: string | Framework;
    body: {
      originalVersion: string; 
      transpiledVersion: string; 
    }
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
