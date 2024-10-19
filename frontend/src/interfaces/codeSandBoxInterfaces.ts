export interface OrganizedFile {
  [key: string]: { code: string };
}

export interface CodeSandBoxAPIInput {
  files: Object;
  title: string;
  description: string;
}
