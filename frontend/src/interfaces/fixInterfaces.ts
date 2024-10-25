export interface updatedCode {
  files: { [key: string]: { code: string } };
  entry: string;
  dependencies: { [key: string]: string };
}
