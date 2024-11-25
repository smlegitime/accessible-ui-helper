import { useEffect, useMemo, useState } from 'react';
import {
  AccessibilityResults,
  FileCollection,
  Page,
} from '../../interfaces/scanInterfaces';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '../../components/ui/resizable';
import { View } from './View';
import { AccessiblityPanel } from './AccessiblityPanel';
import { useLocation, useNavigate } from 'react-router-dom';
import { pagesToFileCollection } from './utils';
import { FilterModal } from './FilterModal';

/**
 * Scan Page Component
 * @returns react component that contains entire scan page
 */
export function Scan() {
  // get pages from home page
  const location = useLocation();
  const navigate = useNavigate();
  const { pages }: { pages: Page[] } = location.state
    ? (location.state as { pages: Page[] })
    : { pages: [] };
  useEffect(() => {
    if (pages.length === 0) {
      navigate('/');
    }
  }, [pages]);

  /**
   *
   * @param selectedFilters
   * standards filtered in FilterModal, passed to setAccessibilityStandards
   */
  const applyFilters = (selectedFilters: string[]) => {
    setAccessibilityStandards(selectedFilters);
  };

  /**
   * Accessibility standards to check against
   */
  const [accessibilityStandards, setAccessibilityStandards] = useState<
    string[]
  >(['wcag21aa', 'wcag2aa', 'best-practice']);

  const folderName = pages.length > 0 ? pages[0].filePath.split('/')[0] : 'N/A';
  // Convert pages: Page[] to fileCollection that we are taking
  // as input to AccessibilityPanel and extract framework
  const initialFileCollection: FileCollection = useMemo(() => {
    return pagesToFileCollection(pages, accessibilityStandards);
  }, [accessibilityStandards]);

  const emptyResults = {
    passes: [],
    violations: [],
    inapplicable: [],
    incomplete: [],
  };
  /**
   * accessibility results
   */
  const [accessibilityResults, setAccessibilityResults] =
    useState<AccessibilityResults>(emptyResults);
  /**
   * generated page fixes
   */
  const [generatedPageFixes, setGeneratedPageFixes] = useState<FileCollection>(
    initialFileCollection
  );
  /**
   * Code files as a fileCollection object
   */
  const [codeFiles, setCodeFiles] = useState<FileCollection>(
    initialFileCollection
  );
  /**
   * Framework of project
   */
  const frameWork = pages.length > 0 ? pages[0].pageContent.framework : '';
  /**
   * state that saves all the initial violations
   */
  const [initialAccessibilityResults, setInitialAccessibilityResults] =
    useState<AccessibilityResults>(emptyResults);
  /**
   * state variable of if first accessibility check has been done
   */
  const [runInitial, setRunInitial] = useState(false);
  /**
   * Variable to view editor or not
   */
  const [viewEditor, setViewEditor] = useState(false);

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
          incomplete: [],
        };
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
    setCodeFiles(generatedPageFixes);
  }, [generatedPageFixes]);

  const [originalFiles, setOriginalFiles] = useState<FileCollection>(
    initialFileCollection
  );

  useEffect(() => {
    // save initial files
    if (initialFileCollection && !originalFiles) {
      setOriginalFiles(initialFileCollection);
    }
  }, [initialFileCollection]);

  return (
    <div className='h-screen'>
      <FilterModal applyFilters={applyFilters} />
      <div className='h-full'>
        <ResizablePanelGroup direction='horizontal'>
          <ResizablePanel defaultSize={25} minSize={15}>
            <AccessiblityPanel
              setGeneratedPageFixes={setGeneratedPageFixes}
              setOriginalFiles={setOriginalFiles}
              scanResults={accessibilityResults}
              framework={frameWork}
              setViewEditor={setViewEditor}
              viewEditor={viewEditor}
              codeFiles={originalFiles}
              folderName={folderName}
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
