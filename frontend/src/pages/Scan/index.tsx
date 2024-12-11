/**
 * @fileoverview Scan Page main component
 * @author Stephanie Olaiya
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */

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
import { LoadingSkeleton } from '../../components/scan/LoadingSkeleton';

/**
 * Scan Page Component
 * @returns react component that contains entire scan page
 */
export function Scan() {
  // get pages from home page
  const location = useLocation();
  const { pages }: { pages: Page[] } = location.state
    ? (location.state as { pages: Page[] })
    : { pages: [] };

  // go to home page if there are no uploaded pages
  const navigate = useNavigate();
  useEffect(() => {
    if (pages.length === 0) {
      navigate('/');
    }
  }, [pages, navigate]);

  /**
   * Accessibility standards to check against
   */
  const [accessibilityStandards, setAccessibilityStandards] = useState<
    string[]
  >(['wcag21aa', 'wcag2aa', 'best-practice']);

  const folderName = pages.length > 0 ? pages[0].filePath.split('/')[0] : 'N/A';

  /**
   * Initial fileCollection created from pages sent from home page
   */
  const initialFileCollection: FileCollection = useMemo(() => {
    // Convert pages: Page[] to fileCollection that we are taking
    // as input to AccessibilityPanel and extract framework
    return pagesToFileCollection(pages, accessibilityStandards);
  }, [accessibilityStandards, pages]);

  // initialize accessibility results that are populated from embedded script
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
   * Variable to view editor or not
   */
  const [viewEditor, setViewEditor] = useState(false);
  /**
   * waiting for loading result
   */
  const [loadingFix, setLoadingFix] = useState(false);
  /**
   * state holding unfixed fileCollection or previous fix iteration
   */
  const [originalFiles, setOriginalFiles] = useState<FileCollection>(
    initialFileCollection
  );

  /**
   * Always update entry files if initialFileCollection content changes, 
   * particularly accessibilityStandards (required for filterModal to work).
   */
  useEffect(() => {
    setCodeFiles(initialFileCollection)
    setOriginalFiles(initialFileCollection)
    setGeneratedPageFixes(initialFileCollection)
  }, [initialFileCollection])
  
  /**
   * displays the current page being scanned
   */
  const [currentScannedPage, setCurrentScannedPage] = useState<string>('');

  useEffect(() => {
    const messageHandler = (event: MessageEvent) => {
      console.log('Scan component received message:', event.data);
      // only listen for axeResult messages
      if (event.data.type === 'axeResults') {
        const returnedResults = event.data.results;
        console.log('Processing axe results:', returnedResults);
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
      }
      // set the value of current page being scanned
      if(event.data.type === 'state') {
        setCurrentScannedPage(event.data.state.entry);
        console.log('>> EVENT STATE ENTRY: ', event.data.state.entry)
      }
    };

    window.addEventListener('message', messageHandler);

    return () => {
      window.removeEventListener('message', messageHandler);
    };
  }, []);

  // always update code files with generated page fixes
  useEffect(() => {
    setCodeFiles(generatedPageFixes);
  }, [generatedPageFixes]);

  return (
    <div className='h-screen'>
      <FilterModal applyFilters={setAccessibilityStandards} />
      <div className='h-full'>
        <ResizablePanelGroup direction='horizontal'>
          {/* Panel showing accessibility violations */}
          <ResizablePanel defaultSize={25} minSize={15}>
            <AccessiblityPanel
              setGeneratedPageFixes={setGeneratedPageFixes}
              setOriginalFiles={setOriginalFiles}
              scanResults={accessibilityResults}
              framework={frameWork}
              setViewEditor={setViewEditor}
              viewEditor={viewEditor}
              codeFiles={codeFiles}
              folderName={folderName}
              setLoadingFix={setLoadingFix}
              accessibilityStandards={accessibilityStandards}
              currentScannedPage={currentScannedPage}
            />
          </ResizablePanel>
          <ResizableHandle withHandle />
          {/* Panel for preview and code editor */}
          <ResizablePanel defaultSize={75}>
            {loadingFix ?
              <LoadingSkeleton />
              :
              <View
                files={codeFiles}
                viewEditor={viewEditor}
                originalFiles={originalFiles}
              />}
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
