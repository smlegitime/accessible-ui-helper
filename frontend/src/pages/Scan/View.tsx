import { FileCollection } from "@/src/interfaces/scanInterfaces";
import { SandpackProvider, SandpackPreview, SandpackLayout, SandpackCodeEditor, SandpackFileExplorer } from "@codesandbox/sandpack-react";
import { fileCollectionToSandPackFiles } from "./utils";
import { useMemo } from "react";

//TODO: Make height dynamic to screen size

export function View({files}: { files: FileCollection}) {
  const organizedFiles = useMemo(() => fileCollectionToSandPackFiles(files), [files]);
  return (
    <SandpackProvider template="vanilla" files={organizedFiles}>
    <SandpackLayout>
      <SandpackFileExplorer style={{ height: "600px", border: "1px solid #ddd", width: "100%" }}/>
      <SandpackCodeEditor 
      closableTabs 
      showTabs 
      showLineNumbers={true}
      showInlineErrors={true}
      style={{ height: "600px", border: "1px solid #ddd", width: "100%" }}/>
      <SandpackPreview style={{ height: "600px", border: "1px solid #ddd", width: "100%" }}/>
    </SandpackLayout>
  </SandpackProvider>


    // <SandpackProvider template="vanilla" files={organizedFiles}>
    //   <SandpackLayout>
    //     <SandpackPreview 
    //     style={{ height: "800px", border: "1px solid #ddd", width: "100%" }}
    //     />
    //   </SandpackLayout>
    // </SandpackProvider>
  );
}

