/**
 * @fileoverview Rendered Code Preview Component 
 * @author YongCheng Shi
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */
import { FileCollection } from "@/src/interfaces/scanInterfaces";
import { SandpackProvider, SandpackPreview, SandpackLayout, SandpackFileExplorer } from "@codesandbox/sandpack-react";
import { fileCollectionToSandPackFiles } from "./utils";
import { useMemo } from "react";
import { DiffHighlightEditor } from "./DiffHighlightEditor";

/**
 * View component (right hand side) of scan page
 * @param files - updated code files
 * @param viewEditor - whether the user has clicked button to view or hide editor
 * @param originalFiles - original code files
 * @returns React component
 */
export function View({
  files,
  viewEditor,
  originalFiles,
}: {
  files: FileCollection,
  viewEditor: boolean,
  originalFiles: FileCollection | null
}) {
  // convert files to SandpackFiles to be compatible with SandpackProvider
  const organizedFiles = useMemo(() => fileCollectionToSandPackFiles(files), [files]);
  return (
    <div className="w-full h-full">
      <SandpackProvider
        template="vanilla"
        files={organizedFiles}
        theme={"dark"}
      >
        <SandpackLayout>
          {viewEditor &&
            <SandpackFileExplorer
              style={{
                height: `${window.innerHeight}px`,
                border: "1px solid #ddd",
                width: "100%"
              }}
            />}
          {viewEditor &&
            <DiffHighlightEditor
              files={files}
              originalFiles={originalFiles}
              showLineNumbers={true}
              showInlineErrors={true}
              style={{
                height: `${window.innerHeight}px`,
                border: "1px solid #ddd",
                width: "100%"
              }}
              closableTabs
              showTabs
            />}
          <SandpackPreview
            style={{
              height: `${window.innerHeight}px`,
              border: "1px solid #ddd",
              width: "100%"
            }}
          />
        </SandpackLayout>
      </SandpackProvider>
      <style>
        {`
                .cm-line.diff-changed {
                    background-color: rgba(0, 255, 0, 0.1) !important;
                    border-left: 2px solid #4caf50 !important;
                }
            `}</style>
    </div>
  );
}

