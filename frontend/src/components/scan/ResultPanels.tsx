/**
 * @fileoverview Passes and Violations parts of Accessibility Panel
 * @author Stephanie Olaiya
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */

import { AccViolation } from "@/src/interfaces/scanInterfaces"
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
    //handle violation method
    function handleViolationSelect(violation: AccViolation, index: number, active: boolean) {
        setActiveSelections((oldSelections) => {
            if (active) {
                return [...oldSelections, index];
            } else {
                return oldSelections.filter(i => i !== index);
            }
        });

        //get target and html tag
        const target = violation.nodes[0]?.target?.[0] || '';
        const html = violation.nodes[0]?.html || '';

        //post message to iframe
        const previewFrame = document.querySelector('.sp-preview-iframe') as HTMLIFrameElement;
        const frameWindow = previewFrame?.contentWindow;
        if (frameWindow) {
            frameWindow.postMessage({
                type: 'highlightViolation',
                selector: target,
                html: html,
                active: active
            }, '*');
        }
    }

    const violationDivs = resultsToDisplay.map((result, i) => {
        return (
            <div className="flex flex-row w-full bg-[#282828] rounded-lg" key={i}>
                <div className="flex items-center p-2">
                    <button className={`hover:bg-gray-600 
                            active:bg-gray-700 focus:outline-none 
                               focus:ring focus:ring-gray-300 rounded
                               `}
                        onClick={() => {
                            const isCurrentlySelected = activeSelections.includes(i);
                            handleViolationSelect(result, i, !isCurrentlySelected);
                        }}>
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
