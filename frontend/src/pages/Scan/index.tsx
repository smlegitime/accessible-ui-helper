import { useEffect, useState } from 'react';
import { AccessibilityResults, FileCollection, FileData, FileType, Page } from '../../interfaces/scanInterfaces';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../../components/ui/resizable"
import { View } from "./View"
import { AccessiblityPanel } from './AccessiblityPanel';
import { useLocation } from 'react-router-dom';
import { insertAxeScriptHTML } from './utils';

export function Scan() {
  // get pages from home page
  const location = useLocation();
  const { pages } = location.state as { pages: Page[] };
  
  // Convert pages: Page[] to fileCollectionData that we are taking 
  // as input to AccessibilityPanel and extract framework
  const initialFileCollection: FileCollection = {}
  pages.map((page) => {
    let pageCode = ""
    // update .html files to run axe-scripts
    if (page.pageContent.fileType === FileType.Html) {
      pageCode = insertAxeScriptHTML(page.pageContent.body.originalVersion)
    } else {
      pageCode = page.pageContent.body.originalVersion
    }
    const pageInfo: FileData = {
      type: page.pageContent.fileType,
      content: pageCode
    }
    return initialFileCollection["/" + page.filePath.substring(page.filePath.indexOf('/')+1)] = pageInfo
  });
  //Add axe-script here and file validation
  initialFileCollection["/axe-script.js"] = {
    type: FileType.Js,
    content: `
            import axe from 'axe-core';
              
            axe.run().then((results) =>
              window.parent.postMessage({ type: 'axeResults', results }, '*')
              );
          `
  }
  initialFileCollection["/package.json"] = {
  type: FileType.Json, 
  content: `{
  "name": "html-css-js",
  "version": "1.0.0",
  "description": "",
  "main": "index.html",
  "scripts": {
    "start": "parcel index.html --open",
    "build": "parcel build index.html"
  },
  "dependencies": {"axe-core": "^4.10.1"},
  "devDependencies": {
    "@babel/core": "7.2.0",
    "parcel-bundler": "^1.6.1",
    "axe-core": "^4.10.1"
  },
  "keywords": []
}`
  }



  const emptyResults = {
    passes: [],
    violations: [],
    inapplicable: [],
    incomplete: []
  }
  const [accessibilityResults, setAccessibilityResults] = useState<AccessibilityResults>(emptyResults)
  const [codeFiles, setCodeFiles] = useState<FileCollection>(initialFileCollection)
  const [generatedPageFixes, setGeneratedPageFixes] = useState<FileCollection>({})
  console.log(codeFiles)
  // TODO: Figure this out
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
    }
  })

  return (
    <div className='h-screen'>
      <div className='h-full'>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={25}>
            <AccessiblityPanel
              setGeneratedPageFixes={setGeneratedPageFixes}
              scanResults={accessibilityResults} />
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