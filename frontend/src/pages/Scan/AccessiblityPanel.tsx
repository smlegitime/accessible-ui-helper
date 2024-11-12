import jsPDF from 'jspdf';
import { AccessibilityResults, FileCollection } from "@/src/interfaces/scanInterfaces";
import { PassesPanel, ViolationsPanel } from "../../components/scan/ResultPanels";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion";
import { Button } from "../../components/ui/button";
import { updatedFiles } from "../../mocks/fileSystemMocks";
import { useCallback, useEffect, useState } from "react";
import { FaRegSmile, FaRegFrown, FaCode } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from "axios";


/**
 * The accessibility panel located on the left of scan page that displays 
 *     the accessibility evaluation results
 * @param setGeneratedPageFixes - setter for generated page fixes
 * @param scanResults - AccessibilityResults object
 * @returns a react component with all the accessibility evaluation results
 */
export function AccessiblityPanel({
  setGeneratedPageFixes,
  scanResults,
  framework,
  setViewEditor,
  viewEditor,
  folderName,
  codeFiles
}: {
  setGeneratedPageFixes: React.Dispatch<React.SetStateAction<FileCollection>>,
  scanResults: AccessibilityResults,
  framework: string,
  setViewEditor: React.Dispatch<React.SetStateAction<boolean>>,
  viewEditor: boolean,
  folderName: string,
  codeFiles: FileCollection
}) {

  const [activeSelections, setActiveSelections] = useState<number[]>([]);
  const [generatedPageFixes, setLocalGeneratedPageFixes] = useState<FileCollection>(codeFiles); // Local state to watch for updates
  const navigate = useNavigate();

  // Convert pages: Page[] to fileCollection that we are taking 
  // as input to AccessibilityPanel and extract framework
  const generateFixes = useCallback(() => {
    axios.post('http://localhost:8000/fix', {
      "framework": framework,
      "fileCollection": codeFiles,
      "violations": scanResults.violations.filter((violation, i) => activeSelections.includes(i))
    })
    // TODO: Update function to make sure that response is a valid fileCollection
    .then(response => setGeneratedPageFixes(response.data))
    .catch(error => console.error(error));
  }, [framework, codeFiles, scanResults, activeSelections]);

  /**
   * 'done'/import button functionality for generating pdf
   */
  /**
   * 'done'/import button functionality for generating pdf
   */
  const handleDoneClick = () => {
    // Update the fixes state
    setGeneratedPageFixes(updatedFiles); // Trigger the update for generatedPageFixes
    
    // Generate PDF after updating the fixes
    const pdf = new jsPDF();
    pdf.text("Generated Page Fixes", 10, 10);

    // Using Object.entries to iterate over the dictionary
    Object.entries(updatedFiles).forEach(([key, file], index) => {
      pdf.text(`File ${index + 1}: ${key} - ${file.type}`, 10, 20 + index * 10);
      // You can include additional details like `file.content` if needed
    });

    pdf.save("page-fixes.pdf");
  };

  // always update code files with generated page fixes
  // TODO: should I just change to always update code files.

  return (
    <div className="h-screen bg-black relative">
      <div className="h-full">
        {/* Top part of panel */}
        <div className="flex items-start space-x-4 p-4">
          <div className="w-8 h-8 bg-primary-100 rounded-full"></div>
          <h1 className="text-white font-bold text-2xl">AccUI</h1>
        </div>
        <div className="flex flex-col items-start p-4">
          <h5 className="text-white text-sm font-bold"> Uploaded Folder: {folderName} </h5>
          <h5 className="text-white text-xs">{framework} Website Project</h5>
        </div>
        <div className="border-b border-0 border-gray-500"></div>
        <div className="flex justify-center p-3">
          <Button className={`max-h-6 w-full ${viewEditor ? "bg-secondary-100" : " bg-primary-100"} rounded-lg hover:bg-slate-400 text-black p-4 font-bold `}
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
        <div className="px-3 mr-2 max-h-[60%] overflow-y-auto">
          <Accordion type="single" collapsible className="w-full mb-2 space-y-2" defaultValue="violations-block">
            <AccordionItem value="passes-block">
              <AccordionTrigger>
                <div className="inline-flex flex justify-between flex-auto">
                  <h2 className="text-white ml-2 inline-flex items-center font-bold"> <FaRegSmile color="#E4FD90" style={{ marginRight: '8px' }} /> Passes </h2>
                  <h3 className="text-white "> {scanResults.passes.length}</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <PassesPanel resultsToDisplay={scanResults.passes} />
              </AccordionContent>
            </AccordionItem>
            <div className="border-b border-0 border-gray-500"></div>
            <AccordionItem value="violations-block">
              <AccordionTrigger>
                <div className="inline-flex flex justify-between flex-auto">
                  <h2 className="text-white ml-2 inline-flex items-center font-bold"> <FaRegFrown color="#FD9090" style={{ marginRight: '8px' }} /> Violations </h2>
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
      <div className="sticky bottom-0 flex flex-col">
        <div className="border-b border-0 border-gray-500"></div>
        {scanResults.violations.length > 0 && <div className="inline-flex justify-center w-full p-3 justify-between">
          <h3 className="text-white self-center text-sm font-bold">
            {activeSelections.length} / {scanResults.violations.length} selected violation(s)
          </h3>
          <div className="space-x-2">
            <Button
              variant={'outline'}
              className="max-h-6 min-w-30 bg-black rounded-full hover:bg-slate-400 text-primary-100 p-4 font-bold border-primary-100"
              onClick={() => setActiveSelections(() =>
                scanResults.violations.map((violation, i) => i)
              )}
            >
              SELECT ALL
            </Button>
            <Button onClick={() => {
              setGeneratedPageFixes(updatedFiles)
            }}
              className="max-h-6 min-w-20 bg-primary-100 rounded-full hover:bg-slate-400 text-black p-4 font-bold">
              FIX
            </Button>
          </div>
        </div>}
        <div className="border-b border-0 border-gray-500"></div>
        <div className="inline-flex justify-center w-full p-3 justify-between">
          <h3 className="text-white self-center text-sm font-bold">
            Ready To Export
          </h3>
          <div className="space-x-2">
            <Button
              variant={'outline'}
              className="max-h-6 min-w-30 bg-black rounded-full hover:bg-slate-400 text-primary-100 p-4 font-bold border-primary-100"
              onClick={() => navigate('/')}
            >
              RESCAN
            </Button>
            <Button onClick={handleDoneClick}
              className="max-h-6 min-w-20 bg-primary-100 rounded-full hover:bg-slate-400 text-black p-4 font-bold">
              DONE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
