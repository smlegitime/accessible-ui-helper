// Interfaces to define the structure of file data, violations, scanned results, and generated fixes
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

export interface ScannedResult {
  readonly pageId: string;
  scannedResult: {
    codeBlock: string;
    violation: AccViolation;
  };
}

export interface GeneratedFixPage {
  pageId: string;
  fixResults: Array<{
    scannedResult: ScannedResult;
    newCodeBlock: string;
  }>;
}
