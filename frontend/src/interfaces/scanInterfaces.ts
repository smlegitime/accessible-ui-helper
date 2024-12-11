/**
 * @fileoverview Interfaces to define the structure of file data, violations, 
 * scanned results, and generated fixes
 * @author YongCheng Shi, Jiecheng(Jason) Chen, Stephanie Olaiya, Marie Baker, Brandon Woodard
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */

export enum FileType {
  Html = "Html",
  Css = "Css",
  Js = "Js",
  Json = "Json",
  Other = "Other",
}
export enum Framework {
  Vanilla = "Vanilla",
  React = "React",
  Angular = "Angular",
  Vue = "Vue",
}

export interface Page {
  readonly pageId: string;
  isEntry: boolean;
  filePath: string;
  viewport: {
    width: number;
    height: number;
  };
  pageContent: {
    fileType: FileType;
    framework: string | Framework;
    body: {
      originalVersion: string;
      transpiledVersion: string;
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

interface ViolationCheck {
  id: string;
  data: any;
  relatedNodes: Array<{
    html: string;
    target: string[];
  }>;
  impact: string;
  message: string;
}

export interface ViolationNode {
  any: ViolationCheck[];
  all: ViolationCheck[];
  none: ViolationCheck[];
  impact: string | null;
  html: string;
  target: string[];
  failureSummary?: string;
}

export interface AccViolation {
  readonly id: string;
  impact: string;
  tags: Array<string>;
  description: string;
  help: string;
  helpUrl: string;
  nodes: ViolationNode[];
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

export interface FixedFileData {
  type: string;
  content: string;
  updatedCodeBlocks: string[];
}

// Response JSON from backend
export interface FixedFileCollection {
  [key: string]: FixedFileData;
}

export interface GeneratedFilesInfo {
  generatedFilesInfo:{
    originalData: FileCollection;
    generatedCode: FixedFileCollection;
  }
}
