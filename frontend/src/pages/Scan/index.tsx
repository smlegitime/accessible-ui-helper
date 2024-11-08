import { useEffect, useState } from 'react';
import {
  AccessibilityResults,
  FileCollection, Page
} from '../../interfaces/scanInterfaces';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../../components/ui/resizable"
import { View } from "./View"
import { AccessiblityPanel } from './AccessiblityPanel';
import { useLocation } from 'react-router-dom';
import { PagesToFileCollection } from './utils';

/**
 * Scan Page Component
 * @returns react component that contains entire scan page
 */
export function Scan() {
  // get pages from home page
  const location = useLocation();
  const { pages } = location.state as { pages: Page[] };

  // Convert pages: Page[] to fileCollection that we are taking 
  // as input to AccessibilityPanel and extract framework
  const initialFileCollection: FileCollection = PagesToFileCollection(pages)

  const emptyResults = {
    passes: [],
    violations: [],
    inapplicable: [],
    incomplete: []
  }
  /**
   * accessibility results
   */
  const [accessibilityResults, setAccessibilityResults]
    = useState<AccessibilityResults>(emptyResults)
  /**
   * generated page fixes
   */
  const [generatedPageFixes, setGeneratedPageFixes]
    = useState<FileCollection>(initialFileCollection)
  /**
   * Code files as a fileCollection object
   */
  const [codeFiles, setCodeFiles]
    = useState<FileCollection>(initialFileCollection)
  /**
   * Framework of project
   */
  const frameWork = pages[0].pageContent.framework
  // have a state that saves all the initial violations
  /**
   * state that saves all the initial violations
   */
  const [initialAccessibilityResults, setInitialAccessibilityResults]
    = useState<AccessibilityResults>(emptyResults)
  const [runInitial, setRunInitial] = useState(false)
  console.log(initialAccessibilityResults)

  useEffect(() => {
    setCodeFiles(generatedPageFixes)
  }, [generatedPageFixes])

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
      // only set if it has not been set before
      if (!runInitial) {
        setInitialAccessibilityResults(initializedResult);
        setRunInitial(true);
      }
    }
  })

  return (
    <div className='h-screen'>
      <div className='h-full'>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={25}>
            <AccessiblityPanel
              setGeneratedPageFixes={setGeneratedPageFixes}
              scanResults={accessibilityResults}
              framework={frameWork}
            />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={75}>
            <View
              files={codeFiles}
            />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}