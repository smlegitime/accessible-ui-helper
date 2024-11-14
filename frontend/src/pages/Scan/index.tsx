import { useEffect, useMemo, useState } from 'react';
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
import { useLocation, useNavigate } from 'react-router-dom';
import { pagesToFileCollection } from './utils';
import jsPDF from 'jspdf';


/**
 * Scan Page Component
 * @returns react component that contains entire scan page
 */
export function Scan() {
  // get pages from home page
  const location = useLocation();
  const { pages } = location.state as { pages: Page[] };

  /**
   * Accessibility standards to check against
   */
  const [accessibilityStandards, setAccessibilityStandards]
    = useState<string[]>(['wcag21aa', 'wcag2aa', 'best-practice'])

  // Convert pages: Page[] to fileCollection that we are taking 
  // as input to AccessibilityPanel and extract framework
  const initialFileCollection: FileCollection = useMemo(() => {
    return pagesToFileCollection(pages, accessibilityStandards)
  }, [accessibilityStandards])

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
  /**
   * state that saves all the initial violations
   */
  const [initialAccessibilityResults, setInitialAccessibilityResults]
    = useState<AccessibilityResults>(emptyResults)
  /**
   * state variable of if first accessibility check has been done
   */
  const [runInitial, setRunInitial] = useState(false)
  /**
   * Variable to view editor or not
   */
  const [viewEditor, setViewEditor] = useState(false)

  useEffect(() => {
    const messageHandler = (event: MessageEvent) => {
        console.log('Scan component received message:', event.data);
        if (event.data.type === 'axeResults') {
            const returnedResults = event.data.results;
            console.log('Processing axe results:', returnedResults);
            // TODO: check the type of the returned results
            // parse the results the here to AccessibilityResults object
            const initializedResult: AccessibilityResults = {
                passes: [],
                violations: [],
                inapplicable: [],
                incomplete: []
            }
            initializedResult['passes'] = returnedResults.passes;
            initializedResult['violations'] = returnedResults.violations;
            initializedResult['inapplicable'] = returnedResults.inapplicable;
            initializedResult['incomplete'] = returnedResults.incomplete;
            setAccessibilityResults(initializedResult);
            // only set if it has not been set before
            if (!runInitial) {
                setInitialAccessibilityResults(initializedResult);
                setRunInitial(true);
            }
        }
    };

    window.addEventListener('message', messageHandler);

    return () => {
        window.removeEventListener('message', messageHandler);
    };
  }, [runInitial]);

  // always update code files with generated page fixes
  useEffect(() => {
    setCodeFiles(generatedPageFixes)
  }, [generatedPageFixes])

  const [originalFiles, setOriginalFiles] = useState<FileCollection>(initialFileCollection);
  
  useEffect(() => {
    // save initial files
    if (initialFileCollection && !originalFiles) {
      setOriginalFiles(initialFileCollection);
    }
  }, [initialFileCollection]);

  return (
    <div className='h-screen'>
      <div className='h-full'>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={25} minSize={15}>
            <AccessiblityPanel
              setGeneratedPageFixes={setGeneratedPageFixes}
              scanResults={accessibilityResults}
              framework={frameWork}
              setViewEditor={setViewEditor}
              viewEditor={viewEditor}
              codeFiles={originalFiles}
              folderName="Your Folder Name"
            />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={75}>
            <View
              files={codeFiles}
              viewEditor={viewEditor}
              originalFiles={originalFiles}
            />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}