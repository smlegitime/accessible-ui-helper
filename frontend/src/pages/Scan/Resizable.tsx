import { FileCollection } from "@/src/interfaces/scanInterfaces"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../../components/ui/resizable"
import { OrganizedFile } from "@/src/interfaces/codeSandBoxInterfaces"
import { CodeSandBox } from "./CodeSandBox"
import { useEffect, useRef } from "react"


export function ResizablePage({ fileCollectionData }: { fileCollectionData: FileCollection }) {
  // organize file templates
  const organizedFiles: OrganizedFile | null = {}
  Object.keys(fileCollectionData).map((filepath) => 
    organizedFiles[`/${filepath}`] = { code: fileCollectionData[filepath]['content'] }
  )
  organizedFiles["/package.json"] = {
    code: JSON.stringify({
      main: "/index.js",
      dependencies: { uuid: "latest" },
    })
  }
  // if (!organizedFiles.hasOwnProperty("index.js")) {
  //   organizedFiles["/index.js"] = { code: `console.log(require('uuid'))` }
  // }
  const parsedCSBTemplate = {
    files: organizedFiles,
  }

  const iframeRef = useRef(null);
  const codeSandBoxView = new CodeSandBox(parsedCSBTemplate);

  useEffect(() => {
    if (iframeRef.current) {
      codeSandBoxView.createCodeSandboxIframe(iframeRef.current);
      console.log('loaded')
    }
  })

  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel>One</ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
        <iframe
          ref={iframeRef}
          style={{ width: '100%', height: '500px', border: '0' }}
          title="CodeSandbox"
        />
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
