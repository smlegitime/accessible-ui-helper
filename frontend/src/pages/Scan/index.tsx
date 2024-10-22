import { fileSystemBasic } from '../../mocks/fileSystemMocks';
import { useState } from 'react';
import { AccessibilityResults } from '@/src/interfaces/scanInterfaces';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../../components/ui/resizable"
import { View } from "./View"
import { AccessiblityPanel } from './AccessiblityPanel';
export type fixCodeType = { [key: string]: { code: string } }


export function Scan() {
  // TODO: Convert pages: Page[] to fileCollectionData that we are taking as input to AccessibilityPanel

  const emptyResults = {
    passes: [],
    violations: [],
    inapplicable: [],
    incomplete: []
  }
  const [accessibilityResults, setAccessibilityResults] = useState<AccessibilityResults>(emptyResults)
  const [generatedPageFixes, setGeneratedPageFixes] = useState<fixCodeType>({})

  window.addEventListener('message', (event) => {
    if (event.data.type === 'axeResults') {
      const returnedResults = event.data.results
      // TODO: check the type of the returned results
      // parse the results the here to AccessibilityResults object
      const initializedResult: AccessibilityResults = {
        passes: [],
        violations: [],
        inapplicable: [],
        incomplete: []
      }
      initializedResult['passes'] = returnedResults.passes
      initializedResult['violations'] = returnedResults.violations
      initializedResult['inapplicable'] = returnedResults.inapplicable
      initializedResult['incomplete'] = returnedResults.incomplete
      setAccessibilityResults(initializedResult)
    }
  })

  console.log(accessibilityResults);
  return (
    <div className='h-screen'>
      <div className='h-full'>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={25}>
            <AccessiblityPanel setGeneratedPageFixes={setGeneratedPageFixes} />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={75}>
            <View fileCollectionData={fileSystemBasic} generatedPageFixes={generatedPageFixes} />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}