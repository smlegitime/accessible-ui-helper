import { FileCollection } from "@/src/interfaces/scanInterfaces"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../../components/ui/resizable"
import { View } from "./View"
import { FixButton } from "./ScanResultsPanel"
import { useState } from "react"


export type fixCodeType = {[key: string]: {code: string}}

export function ResizablePage({ fileCollectionData}:{ fileCollectionData: FileCollection, }) {
  const [generatedPageFixes, setGeneratedPageFixes] = useState<fixCodeType>({})

  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={25}><FixButton setGeneratedPageFixes={setGeneratedPageFixes}/></ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <View fileCollectionData={fileCollectionData} generatedPageFixes={generatedPageFixes} />
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
