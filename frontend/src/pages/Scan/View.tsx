import { OrganizedFile } from "@/src/interfaces/codeSandBoxInterfaces"
import { CodeSandBox } from "./CodeSandBox"
import { useEffect, useRef } from "react"
import { FileCollection } from "@/src/interfaces/scanInterfaces"
import { fixCodeType } from "./index"


export function View({ fileCollectionData, generatedPageFixes }: { fileCollectionData: FileCollection, generatedPageFixes: fixCodeType }) {
  // organize file templates
  const organizedFiles: OrganizedFile | null = {}
  Object.keys(fileCollectionData).map((filepath) =>
    organizedFiles[`/${filepath}`] = {
      code: fileCollectionData[filepath]['content'], readOnly: false
    }
  )

  const parsedCSBTemplate = {
    files: organizedFiles,
  }

  const iframeRef = useRef(null);
  const codeSandBoxView = new CodeSandBox(parsedCSBTemplate);

  useEffect(() => {
    if (iframeRef.current) {
      codeSandBoxView.createCodeSandboxIframe(iframeRef.current).then((response) => {
        console.log('rendered')
      });
    }
  }, [])

  useEffect(() => {
    if (Object.keys(generatedPageFixes).length !== 0) {
      codeSandBoxView.updateSandboxIframe(generatedPageFixes)
    }
  }, [generatedPageFixes])

  return (
    <div className="h-full">
      <iframe
        ref={iframeRef}
        style={{ width: '100%', height: '100%', border: '0' }}
        title="CodeSandbox"
      />
    </div>
  );
}

