import { AccessibilityResults, FileCollection } from "@/src/interfaces/scanInterfaces"
import { PassesPanel, ViolationsPanel } from "../../components/scan/ResultPanels"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion"
import { Button } from "../../components/ui/button"
import { updatedFiles } from "../../mocks/fileSystemMocks"
import { useState } from "react"
import { FaRegSmile, FaRegFrown, FaCode } from "react-icons/fa";


/**
 * The accessibility panel located on the left of scan page that displays 
 *     the accessibility evaluation results
 * @param setGeneratedPageFixes - setter for generated page fixes
 * @param scanResults -  AccessibilityResults object
 * @returns a react component with all the accessibility evaluation results
 */
export function AccessiblityPanel({
  setGeneratedPageFixes,
  scanResults,
  framework,
  setViewEditor,
  viewEditor }:
  {
    setGeneratedPageFixes: React.Dispatch<React.SetStateAction<FileCollection>>,
    scanResults: AccessibilityResults
    framework: String
    setViewEditor: React.Dispatch<React.SetStateAction<boolean>>,
    viewEditor: boolean
  }) {

  const [activeSelections, setActiveSelections] = useState<number[]>([])

  return (
    <div className="h-screen bg-black relative">
      <div className="h-full">
        {/* Top part of panel */}
        <div className="flex items-start space-x-4 p-4">
          <div className="w-8 h-8 bg-primary-100 rounded-full"></div>
          <h1 className="text-white	font-bold text-2xl">AccUI</h1>
        </div>
        <div className="flex flex-col items-start p-4">
          <h5 className="text-white text-sm font-bold"> Uploaded Folder Name</h5>
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
        {/* Accessibilty Scan results panel */}
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
        <div className="inline-flex justify-center w-full p-3 justify-between">
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

        </div>
        <div className="border-b border-0 border-gray-500"></div>
        <div className="inline-flex  justify-center w-full p-3 justify-between">
          <h3 className="text-white self-center text-sm font-bold">
            Ready To Export
          </h3>
          <div className="space-x-2">
            <Button
              variant={'outline'}
              className="max-h-6 min-w-30 bg-black rounded-full hover:bg-slate-400 text-primary-100 p-4 font-bold border-primary-100"
              onClick={() => setActiveSelections(() =>
                scanResults.violations.map((violation, i) => i)
              )}
            >
              RESCAN
            </Button>
            <Button onClick={() => {
              setGeneratedPageFixes(updatedFiles)
            }}
              className="max-h-6 min-w-20 bg-primary-100 rounded-full hover:bg-slate-400 text-black p-4 font-bold">
              DONE
            </Button>
          </div>

        </div>

      </div>
    </div>
  )
}