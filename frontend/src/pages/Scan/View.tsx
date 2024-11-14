import { FileCollection } from "@/src/interfaces/scanInterfaces";
import { SandpackProvider, SandpackPreview, SandpackLayout, SandpackCodeEditor, SandpackFileExplorer } from "@codesandbox/sandpack-react";
import { fileCollectionToSandPackFiles } from "./utils";
import { useMemo } from "react";
import { DiffHighlightEditor } from "./DiffHighlightEditor";

//TODO: Make height dynamic to screen size
export function View({ 
  files, 
  viewEditor,
  originalFiles, 
}: { 
  files: FileCollection, 
  viewEditor: boolean,
  originalFiles: FileCollection | null 
}) {
  const organizedFiles = useMemo(() => fileCollectionToSandPackFiles(files), [files]);

  return (
    <div className="w-full h-full">
      <SandpackProvider 
        template="vanilla" 
        files={organizedFiles} 
        theme={"dark"}
      >
        <SandpackLayout>
          {viewEditor && (
            <>
              <SandpackFileExplorer 
                style={{ 
                  height: `${window.innerHeight}px`, 
                  border: "1px solid #ddd", 
                  width: "100%" 
                }} 
              />
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
              />
            </>
          )}
          <SandpackPreview 
            style={{ 
              height: `${window.innerHeight}px`, 
              border: "1px solid #ddd", 
              width: "100%" 
            }} 
          />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
}

