import { FileCollection } from "@/src/interfaces/scanInterfaces";
import { SandpackProvider, SandpackPreview, SandpackLayout } from "@codesandbox/sandpack-react";
import { fileCollectionToSandPackFiles } from "./utils";
import { useMemo } from "react";


export function View({files}: { files: FileCollection}) {
  const organizedFiles = useMemo(() => fileCollectionToSandPackFiles(files), [files]);
  return (
    <SandpackProvider template="vanilla" files={organizedFiles}>
      <SandpackLayout>
        <SandpackPreview 
        style={{ height: "800px", border: "1px solid #ddd", width: "100%" }}
        />
      </SandpackLayout>
    </SandpackProvider>
  );
}

