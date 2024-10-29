
import React, { useState } from "react";
import { initialFiles, updatedFiles } from "./files";
import { SandpackProvider, SandpackPreview } from "@codesandbox/sandpack-react";


const SandboxViewer = () => {
  const [files, setFiles] = useState(initialFiles);

  const updateSandbox = () => {
    setFiles(updatedFiles);
  };

  return (
    <div>
      <button onClick={updateSandbox}>Update website</button>
      <SandpackProvider
        template="static" // Use the "static" template
        files={files}
        options={{
          activeFile: "/index.html",
        }}
      >
        <SandpackPreview
          style={{ height: "500px", border: "1px solid #ddd", width: "100%" }}
          showOpenInCodeSandbox={true}
          showRefreshButton={true}
        />
      </SandpackProvider>
    </div>
  );
};

export default SandboxViewer;