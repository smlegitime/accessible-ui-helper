import { AccViolation } from "@/src/interfaces/scanInterfaces"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion"
import { Badge } from "../ui/badge"

export function PassesPanel({ resultsToDisplay }: { resultsToDisplay: AccViolation[] }) {
    return (
        <Accordion type="single" collapsible className="w-full p-2">
            {resultsToDisplay.map((result, i) => {
                return (
                    <AccordionItem key={`passes-item-${i}`} value={`item-${i}`} className="mb-1 bg-green-900 rounded">
                        <AccordionTrigger>
                            <div className="p-3 inline-flex">
                                <h3 className="text-white text-center">{result.help}</h3>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <h3 className="text-white text-center mx-1">{result.description}</h3>
                        </AccordionContent>
                    </AccordionItem>
                )
            })}
        </Accordion>

    )
}

function impactColor(impact: string | null) {
    console.log(impact)
    if (impact === 'minor') {
        return "bg-yellow-500"
    } else if (impact === 'moderate') {
        return "bg-amber-500"
    } else if (impact === 'serious') {
        return "bg-orange-500"
    } else if (impact === 'critical') {
        return "bg-red-500"
    } else {
        return "bg-slate-300"
    }
}

export function ViolationsPanel({ resultsToDisplay }: { resultsToDisplay: AccViolation[] }) {
    return (
        <Accordion type="single" collapsible className="w-full p-2">
            {resultsToDisplay.map((result, i) => {
                return (
                    <AccordionItem key={`violation-item-${i}`} value={`item-${i}`} className="mb-1 bg-red-900 rounded">
                        <AccordionTrigger>
                            <div className="w-full p-3 inline-flex justify-between">
                                <h3 className="text-white text-center">{result.help}</h3>
                                <Badge variant="default" className={`${impactColor(result.impact)}`}>
                                    {result.impact}
                                </Badge>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div>
                                <h3 className="text-white text-center mx-1">{result.description}</h3>
                                <a href={result.helpUrl} target="_blank" rel="noopener noreferrer">
                                    <h5>Learn more</h5>
                                </a>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                )
            })}
        </Accordion>

    )
}
