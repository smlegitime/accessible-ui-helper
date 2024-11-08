import { AccessibilityResults, FileCollection } from "@/src/interfaces/scanInterfaces"
import { PassesPanel, ViolationsPanel } from "../../components/scan/ResultPanels"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion"
import { Button } from "../../components/ui/button"
import { updatedFiles } from "../../mocks/fileSystemMocks"
import { useState } from "react"

/**
 * The accessibility panel located on the left of scan page that displays 
 *     the accessibility evaluation results
 * @param setGeneratedPageFixes - setter for generated page fixes
 * @param scanResults -  AccessibilityResults object
 * @returns a react component with all the accessibility evaluation results
 */
export function AccessiblityPanel({ setGeneratedPageFixes,
  scanResults,
  framework }:
  {
    setGeneratedPageFixes: React.Dispatch<React.SetStateAction<FileCollection>>,
    scanResults: AccessibilityResults
    framework: String
  }) {

  const [activeSelections, setActiveSelections] = useState<number[]>([])

  return (
    <div className="h-full bg-black overflow-scroll">
      {/* Top part of panel */}
      <div className="flex items-start space-x-4 p-4">
        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
        <h1 className="text-white	font-bold text-2xl">AccUI</h1>
      </div>
      <div className="flex flex-col items-start p-4">
        <h5 className="text-white text-sm font-bold"> Uploaded Folder Name</h5>
        <h5 className="text-white text-xs">{framework} Website Project</h5>
      </div>
      <div className="border-b border-gray-300 my-2"></div>
      <div className="inline-flex space-x-2 justify-center w-full">
        <h3 className="text-white self-center text-sm">
          {activeSelections.length} selected violation(s)
        </h3>
        <Button onClick={() => {
          setGeneratedPageFixes(updatedFiles)
        }}
          className="max-h-6 min-w-20 bg-slate-50 rounded hover:bg-slate-500 text-black">
          Fix
        </Button>
      </div>
      {/* Accessibilty Scan results panel */}
      <div className="p-3">
        <Accordion type="single" collapsible className="w-full mb-2 space-y-2" defaultValue="violations-block">
          <AccordionItem value="passes-block">
            <AccordionTrigger className="border-solid border-2 border-white rounded bg-slate-800">
              <div className="inline-flex flex justify-between flex-auto">
                <h2 className="text-white ml-2"> Passes </h2>
                <h3 className="text-white "> {scanResults.passes.length}</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <PassesPanel resultsToDisplay={scanResults.passes} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="violations-block">
            <AccordionTrigger className="border-solid border-2 border-white rounded bg-slate-800">
              <div className="inline-flex flex justify-between flex-auto">
                <h2 className="text-white ml-2"> Violations </h2>
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
  )
}