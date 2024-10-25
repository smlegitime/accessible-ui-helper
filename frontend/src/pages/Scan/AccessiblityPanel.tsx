import { AccessibilityResults } from "@/src/interfaces/scanInterfaces"
import { fixCodeType } from "./index"
import { PassesPanel, ViolationsPanel } from "../../components/scan/ResultPanels"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion"

export function AccessiblityPanel({ setGeneratedPageFixes, scanResults }: { setGeneratedPageFixes: React.Dispatch<React.SetStateAction<fixCodeType>>, scanResults: AccessibilityResults }) {
  return (
    <div className="h-full bg-black overflow-scroll">
      {/* Top part of panel */}
      <div className="flex items-start space-x-4 p-4">
        <div className="w-8 h-8 bg-gray-200 rounded-full	"></div>
        <h1 className="text-white	font-bold text-2xl">AccUI</h1>
      </div>
      {/* Accessibilty Scan results panel */}
      <div className="p-3">
        <Accordion type="single" collapsible className="w-full mb-2 space-y-2" defaultValue="violations-block">
          <AccordionItem value="passes-block">
            <AccordionTrigger className="border-solid border-2 border-white rounded bg-slate-800">
              <h2 className="text-white ml-2"> Passes </h2>
            </AccordionTrigger>
            <AccordionContent>
              <PassesPanel resultsToDisplay={scanResults.passes} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="violations-block">
            <AccordionTrigger className="border-solid border-2 border-white rounded bg-slate-800">
              <h2 className="text-white ml-2"> Violations </h2></AccordionTrigger>
            <AccordionContent>
              <ViolationsPanel resultsToDisplay={scanResults.violations} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}