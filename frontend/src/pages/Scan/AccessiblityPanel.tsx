/**
 * @fileoverview Left panel that displays accessibility passes and violations 
 * to be fixed
 * @author Stephanie Olaiya
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */
import { AccessibilityResults, FileCollection, FixedFileCollection, GeneratedFilesInfo } from "@/src/interfaces/scanInterfaces";
import { PassesPanel, ViolationsPanel } from "../../components/scan/ResultPanels";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion";
import { Button } from "../../components/ui/button";
import { useCallback, useState } from "react";
import { FaRegSmile, FaRegFrown, FaCode } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from "axios";
import { fixedFileCollectionToFileCollection } from './utils';
import { ExportButton } from './ExportButton';
import { ErrorFlag } from "./ErrorFlag";


/**
 * The accessibility panel located on the left of scan page that displays 
 *     the accessibility evaluation results
 * @param scanResults - results of accessibility evaluation
 * @param framework - project framework
 * @param viewEditor - boolean describing if editor is displayed
 * @param folderName - name of uploaded folder
 * @param codeFiles - code files in projects
 * @param accessibilityStandards - accessibility standards to evaluate 
 * @param currentScannedPage - name of the HTML page currently being scanned
 * @param setGeneratedPageFixes - setter for generated page fixes
 * @param setOriginalFiles - setter for original code files
 * @param setLoadingFix - setter for loadingFix state
 * @param setViewEditor - setter for viewing editor
 * @returns a react component with all the accessibility evaluation results
 */
export function AccessiblityPanel({
  setGeneratedPageFixes,
  setOriginalFiles,
  scanResults,
  framework,
  setViewEditor,
  viewEditor,
  folderName,
  codeFiles,
  setLoadingFix,
  accessibilityStandards,
  currentScannedPage
}: {
  setGeneratedPageFixes: React.Dispatch<React.SetStateAction<FileCollection>>,
  setOriginalFiles: React.Dispatch<React.SetStateAction<FileCollection>>,
  scanResults: AccessibilityResults,
  framework: string,
  setViewEditor: React.Dispatch<React.SetStateAction<boolean>>,
  viewEditor: boolean,
  folderName: string,
  codeFiles: FileCollection
  setLoadingFix: React.Dispatch<React.SetStateAction<boolean>>,
  accessibilityStandards: string[],
  currentScannedPage: string
}) {

  /**
   * index of violations that have been selected by user.
   */
  const [activeSelections, setActiveSelections] = useState<number[]>([]);
  /**
   * boolean state used to display error component
   */
  const [displayError, setDisplayError] = useState(false)
  /**
   * call api/fix on backend to get code with selected violations fixes.
   */
  const generateFixes = useCallback(() => {
    setLoadingFix(true)
    axios.post('http://localhost:80/api/fix', {
      "framework": framework,
      "currentScannedPage": currentScannedPage,
      "fileCollection": codeFiles,
      "violations": scanResults.violations.filter((violation, i) => activeSelections.includes(i)),
      "accessibilityStandards": accessibilityStandards
    })
      .then((response) => {
        const data = response.data as GeneratedFilesInfo;
        const generatedCodeCollection = data.generatedFilesInfo.generatedCode;
        const originalFiles = data.generatedFilesInfo.originalData;
        const newStruct: FixedFileCollection = {};
        for (const file in originalFiles) {
          if (Object.keys(generatedCodeCollection).includes(file)) {
            newStruct[file] = generatedCodeCollection[file]
          } else {
            newStruct[file] = {
              type: originalFiles[file].type,
              content: originalFiles[file].content,
              updatedCodeBlocks: []
            }
          }
        }
        setOriginalFiles(data.generatedFilesInfo.originalData);
        setGeneratedPageFixes(fixedFileCollectionToFileCollection(newStruct))
        setLoadingFix(false) // remove loading skeleton
        setActiveSelections([]) // reset active selections
      })
      .catch(error => {
        setLoadingFix(false); // remove loading skeleton
        setDisplayError(true);
        console.error(error)
      });
  }, [framework, codeFiles, scanResults, activeSelections,
    setGeneratedPageFixes, setLoadingFix, setOriginalFiles, 
    accessibilityStandards, currentScannedPage]);

  return (
    <div className="h-screen bg-black relative flex flex-col">
      <div className="flex-grow overflow-auto"> {/* Allow content to scroll */}
        <div className="flex items-start space-x-4 p-4">
          <div className="w-8 h-8 bg-primary-100 rounded-full"></div>
          <Link to={"/"}>
            <h1 className="text-white font-bold text-2xl">AccUI</h1>
          </Link>
        </div>
        <div className="flex flex-col items-start p-4">
          <h5 className="text-white text-sm font-bold">
            Uploaded Folder: {folderName}
          </h5>
          <h5 className="text-white text-xs">{framework} Website Project</h5>
        </div>
        <div className="border-b border-0 border-gray-500"></div>
        <div className="flex justify-center p-3">
          <Button className={`max-h-6 w-full text-wrap	
          ${viewEditor ? "bg-secondary-100" : " bg-primary-100"} rounded-lg 
          hover:bg-slate-400 text-black p-4 font-bold `}
            onClick={() => { setViewEditor((oldValue) => !oldValue) }}
          >
            {viewEditor ? "COLLAPSE EDITOR" : "VIEW CHANGES IN EDITOR"}
            <FaCode />
          </Button>
        </div>
        {/* Accessibility Scan results panel */}
        <h4 className="text-white text-xs font-bold p-3 ml-2">
          Accessibility Checks
        </h4>
        <div className="px-3 mr-2">
          <Accordion
            type="single"
            collapsible
            className="w-full mb-2 space-y-2"
            defaultValue="violations-block">
            <AccordionItem value="passes-block"
              className="max-h-[60%] overflow-y-auto">
              <AccordionTrigger>
                <div className="inline-flex flex justify-between flex-auto">
                  <h2 className="text-white ml-2 inline-flex items-center font-bold">
                    <FaRegSmile
                      color="#E4FD90"
                      style={{ marginRight: '8px' }} />
                    Passes
                  </h2>
                  <h3 className="text-white"> {scanResults.passes.length}</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="max-h-[50%] overflow-y-auto">
                <PassesPanel resultsToDisplay={scanResults.passes} />
              </AccordionContent>
            </AccordionItem>
            <div className="border-b border-0 border-gray-500"></div>
            <AccordionItem
              value="violations-block"
              className="max-h-[60%] overflow-y-auto">
              <AccordionTrigger>
                <div className="inline-flex flex justify-between flex-auto">
                  <h2
                    className="text-white ml-2 inline-flex items-center font-bold">
                    <FaRegFrown color="#FD9090" style={{ marginRight: '8px' }} />
                    Violations
                  </h2>
                  <h3 className="text-white "> {scanResults.violations.length}</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ViolationsPanel
                  resultsToDisplay={scanResults.violations}
                  activeSelections={activeSelections}
                  setActiveSelections={setActiveSelections} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Selected violations part */}
      <div className="sticky bottom-0 flex flex-col bg-black z-10">
        <div className="border-b border-0 border-gray-500"></div>
        {scanResults.violations.length > 0 &&
          <div className="inline-flex justify-center w-full p-3 justify-between">
            <h3 className="text-white self-center text-sm font-bold">
              {activeSelections.length} / {scanResults.violations.length} {' '}
              selected violation(s)
            </h3>
            <div className="space-x-2 space-y-1">
              <Button
                variant={'outline'}
                className={`max-h-6 min-w-30 bg-black rounded-full 
                hover:bg-slate-400 text-primary-100 p-4 font-bold 
                border-primary-100`}
                onClick={() => setActiveSelections(() =>
                  scanResults.violations.map((violation, i) => i)
                )}
              >
                SELECT ALL
              </Button>
              <Button
                disabled={activeSelections.length === 0}
                onClick={() => {
                  generateFixes();
                }}
                className={`max-h-6 min-w-20 bg-primary-100 rounded-full 
                hover:bg-slate-400 text-black p-4 font-bold`}>
                FIX
              </Button>
            </div>
          </div>}
        {displayError && <ErrorFlag setDisplayError={setDisplayError} />}
        <div className="border-b border-0 border-gray-500"></div>
        <div className="inline-flex justify-center w-full p-3 justify-between">
          <h3 className="text-white self-center text-sm font-bold">
            Ready To Export
          </h3>
          <div className="space-x-2">
            <ExportButton
              setGeneratedPageFixes={setGeneratedPageFixes}
              scanResults={scanResults}
              codeFiles={codeFiles} />
          </div>
        </div>
      </div>
    </div>
  );
}
