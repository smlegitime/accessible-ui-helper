export interface OrganizedFile {
  [key: string]: { code: string; readOnly?: boolean };
}

export interface CodeSandBoxAPIInput {
  files: Object;
  title: string;
  description: string;
}
