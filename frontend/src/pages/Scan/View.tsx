import { FileCollection } from "@/src/interfaces/scanInterfaces";
import { SandpackProvider, SandpackPreview, SandpackLayout, SandpackCodeEditor, SandpackFileExplorer } from "@codesandbox/sandpack-react";
import { fileCollectionToSandPackFiles } from "./utils";
import { useMemo } from "react";

//TODO: Make height dynamic to screen size

export function View({ files, viewEditor }:
  { files: FileCollection, viewEditor: boolean }) {
  const organizedFiles = useMemo(() => fileCollectionToSandPackFiles(files), [files]);
  return (
    <div className="w-full h-full">
      <SandpackProvider 
      template="vanilla" 
      files={organizedFiles} 
      theme={"dark"}
      >
        <SandpackLayout>
          {viewEditor && <SandpackFileExplorer style={{ height: `${window.innerHeight}px`, border: "1px solid #ddd", width: "100%" }} />}
          {viewEditor && <SandpackCodeEditor
            closableTabs
            showTabs
            showLineNumbers={true}
            showInlineErrors={true}
            style={{ height: `${window.innerHeight}px`, border: "1px solid #ddd", width: "100%" }} />}
          <SandpackPreview style={{ height: `${window.innerHeight}px`, border: "1px solid #ddd", width: "100%" }} />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
}

