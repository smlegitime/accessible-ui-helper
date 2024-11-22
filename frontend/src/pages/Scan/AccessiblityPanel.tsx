import jsPDF from 'jspdf';
import JSZip from 'jszip';
import { AccessibilityResults, FileCollection, GeneratedFilesInfo } from "@/src/interfaces/scanInterfaces";
import { PassesPanel, ViolationsPanel } from "../../components/scan/ResultPanels";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion";
import { Button } from "../../components/ui/button";
import { updatedFiles } from "../../mocks/fileSystemMocks";
import { useCallback, useState } from "react";
import { FaRegSmile, FaRegFrown, FaCode } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { fixedFileCollectionToFileCollection } from './utils';


/**
 * The accessibility panel located on the left of scan page that displays 
 *     the accessibility evaluation results
 * @param setGeneratedPageFixes - setter for generated page fixes
 * @param scanResults - AccessibilityResults object
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
  codeFiles
}: {
  setGeneratedPageFixes: React.Dispatch<React.SetStateAction<FileCollection>>,
  setOriginalFiles:  React.Dispatch<React.SetStateAction<FileCollection>>,
  scanResults: AccessibilityResults,
  framework: string,
  setViewEditor: React.Dispatch<React.SetStateAction<boolean>>,
  viewEditor: boolean,
  folderName: string,
  codeFiles: FileCollection
}) {

  const [activeSelections, setActiveSelections] = useState<number[]>([]);

  // Callback function to generate fixes and update generatedPageFixes
  const generateFixes = useCallback(() => {
    axios.post('http://localhost:8000/fix', {
      "framework": framework,
      "fileCollection": codeFiles,
      "violations": scanResults.violations.filter((violation, i) => activeSelections.includes(i))
    })
    // TODO: Update function to make sure that response is a valid fileCollection
    .then((response) => {
      const data = response.data as GeneratedFilesInfo
      const generatedCodeCollection = data.generatedCode
      setOriginalFiles(data.originalData)
      setGeneratedPageFixes(fixedFileCollectionToFileCollection(generatedCodeCollection))
      // setGeneratedPageFixes(updatedFiles)
    })
    .catch(error => console.error(error));
  }, [framework, codeFiles, scanResults, activeSelections]);

  /**
   * 'done'/import button functionality for generating pdf and zip
   */
  const handleDoneClick = async () => {
    setGeneratedPageFixes(codeFiles); 
  
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
  
    // Set the background to black
    pdf.setFillColor(0, 0, 0); // RGB for black
    pdf.rect(0, 0, pageWidth, pageHeight, 'F'); // Fill the rectangle to cover the page
  
    // Add title in white
    pdf.setTextColor(255, 255, 255); // Set text color to white for the title
    pdf.setFontSize(16);
    pdf.text("Accessibility Report", 10, 10);
  
    // Violations Section with Color Coding
    pdf.setTextColor(253, 144, 144); // Set color to red for violations
    pdf.setFontSize(14);
    pdf.text("Violations", 10, 20);
    
    pdf.setFontSize(12);
    scanResults.violations.forEach((violation, index) => {
      pdf.text(`${index + 1}. ${violation.description}`, 10, 30 + index * 10);
    });
  
    // Passes Section with Color Coding
    const passesStartY = 40 + scanResults.violations.length * 10;
    pdf.setTextColor(228, 253, 144); // Set color to green for passes
    pdf.setFontSize(14);
    pdf.text("Passes", 10, passesStartY);
    
    pdf.setFontSize(12);
    scanResults.passes.forEach((pass, index) => {
      pdf.text(`${index + 1}. ${pass.description}`, 10, passesStartY + 10 + index * 10);
    });
  
    // Generate the PDF Blob
    const pdfBlob = pdf.output("blob");
  
    // Create the ZIP file and add files to it
    const zip = new JSZip();
    zip.file("Accessibility_Report.pdf", pdfBlob);
  
    // Add other files (HTML, CSS, JS, etc.) from `codeFiles` to the ZIP
    Object.entries(updatedFiles).forEach(([fileName, fileData]) => {
      zip.file(fileName, fileData.content); // Assuming `fileData.content` contains the file's content as a string
    });
  
    // Generate and Download the ZIP file
    const zipBlob = await zip.generateAsync({ type: "blob" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(zipBlob);
    link.download = "Project_Files.zip";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="h-screen bg-black relative">
      <div className="h-full">
        {/* Top part of panel */}
        <div className="flex items-start space-x-4 p-4">
          <div className="w-8 h-8 bg-primary-100 rounded-full"></div>
          <Link to={"/"}><h1 className="text-white font-bold text-2xl">AccUI</h1></Link>
        </div>
        <div className="flex flex-col items-start p-4">
          <h5 className="text-white text-sm font-bold"> Uploaded Folder: {folderName} </h5>
          <h5 className="text-white text-xs">{framework} Website Project</h5>
        </div>
        <div className="border-b border-0 border-gray-500"></div>
        <div className="flex justify-center p-3">
          <Button className={`max-h-6 w-full 
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
            className="max-h-96 overflow-y-auto">
              <AccordionTrigger>
                <div className="inline-flex flex justify-between flex-auto">
                  <h2 className="text-white ml-2 inline-flex items-center font-bold"> 
                    <FaRegSmile color="#E4FD90" style={{ marginRight: '8px' }} /> Passes </h2>
                  <h3 className="text-white"> {scanResults.passes.length}</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="max-h-[50%] overflow-y-auto">
                <PassesPanel resultsToDisplay={scanResults.passes} />
              </AccordionContent>
            </AccordionItem>
            <div className="border-b border-0 border-gray-500"></div>
            <AccordionItem value="violations-block" className="max-h-96 overflow-y-auto">
              <AccordionTrigger>
                <div className="inline-flex flex justify-between flex-auto">
                  <h2 className="text-white ml-2 inline-flex items-center font-bold"> 
                    <FaRegFrown color="#FD9090" style={{ marginRight: '8px' }} /> Violations </h2>
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
              setGeneratedPageFixes(updatedFiles);
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
