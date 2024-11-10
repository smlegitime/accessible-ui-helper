import { AccViolation } from "@/src/interfaces/scanInterfaces"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion"
import { Badge } from "../ui/badge"
import { ImCheckmark } from "react-icons/im";


export function PassesPanel({ resultsToDisplay }: { resultsToDisplay: AccViolation[] }) {
    const passesDivs = resultsToDisplay.map((result, i) => {
        return (
            <div className="flex flex-row w-full bg-[#282828] rounded-lg" key={i}>
                <div className="flex items-center p-2">
                    <ImCheckmark color="#E4FD90" />
                </div>
                <div className="flex flex-col p-3 justify-start ">
                    <h3 className="text-white text-left font-bold">{result.help}</h3>
                    <a href={result.helpUrl} target="_blank" rel="noopener noreferrer">
                        <h5 className="text-[#88AFEF] underline">Learn more</h5>
                    </a>
                </div>

            </div>
        )
    })
    return (
        <div className="space-y-1">
            {passesDivs}
        </div>
    )
}

function impactColor(impact: string | null) {
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


export function ViolationsPanel({ resultsToDisplay,
    activeSelections,
    setActiveSelections }:
    {
        resultsToDisplay: AccViolation[],
        activeSelections: number[],
        setActiveSelections: React.Dispatch<React.SetStateAction<number[]>>
    }) {
    const violationDivs = resultsToDisplay.map((result, i) => {
        return (
            <div className="flex flex-row w-full bg-[#282828] rounded-lg" key={i}>
                <div className="flex items-center p-2">
                    <button className={`hover:bg-gray-600 
                            active:bg-gray-700 focus:outline-none 
                               focus:ring focus:ring-gray-300 rounded
                               `}
                        onClick={() => setActiveSelections((oldSelections) => {
                            if (oldSelections.includes(i)) {
                                return oldSelections.filter((selection) => selection !== i)
                            } else {
                                return [...oldSelections, i]
                            }
                        })}>
                        <div className={`w-4 h-4 rounded-full ${activeSelections.includes(i) ? ' bg-primary-100' : ' bg-secondary-100'
                            }`}></div>
                    </button>
                </div>
                <div className="flex flex-col p-3 justify-start ">
                    <h3 className="text-white text-left font-bold">{result.help}</h3>
                    <div className="my-1">
                        <Badge variant="default" className={`${impactColor(result.impact)}  max-w-24 max-h-12`}>
                            {result.impact}
                        </Badge>
                    </div>
                    <a href={result.helpUrl} target="_blank" rel="noopener noreferrer">
                        <h5 className="text-[#88AFEF] underline">Learn more</h5>
                    </a>
                </div>

            </div>

        )
    })
    return (
        <div className="space-y-1">
            {violationDivs}
        </div>
    )
}
