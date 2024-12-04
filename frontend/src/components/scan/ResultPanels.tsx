/**
 * @fileoverview Passes and Violations parts of Accessibility Panel
 * @author Stephanie Olaiya
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */

import { AccViolation } from "@/src/interfaces/scanInterfaces"
import { Badge } from "../ui/badge"
import { ImCheckmark } from "react-icons/im";

/**
 * Passes part of accessibility panel on scan page
 * @param resultsToDisplay - an array of AccViolation (passes)
 * @returns a react component with stylized rendered list of passes
 */
export function PassesPanel({ resultsToDisplay }: { resultsToDisplay: AccViolation[] }) {
    const passesDivs = resultsToDisplay.map((result, i) => {
        return (
            <div className="flex flex-row w-full bg-[#282828] rounded-lg" key={i}>
                <div className="flex items-center p-2">
                    <ImCheckmark color="#E4FD90" />
                </div>
                <div className="flex flex-col p-3 justify-start ">
                    <h3 className="text-white text-left font-bold">{result.help}</h3>
                    <div className="my-1 space-x-1 space-y-1">
                        {result.tags.map((tag) => 
                        <Badge key={tag} variant="default" className={`bg-primary-300 max-w-30 h-6`}>
                            {tag}
                        </Badge>)}
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
            {passesDivs}
        </div>
    )
}

/**
 * Maps a given impact to its badge color
 * @param impact - the impact of a given violation
 * @returns - color of badge
 */
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

/**
 * Violations part of accessibility panel on scan page
 * @param resultsToDisplay - an array of AccViolation (violations)
 * @param activeSelections - an array of numbers describing user selected violations
 * @param setActiveSelections - setter for selected violations
 * @returns a react component with stylized selecteable rendered list of violations
 */
export function ViolationsPanel({ resultsToDisplay,
    activeSelections,
    setActiveSelections }:
    {
        resultsToDisplay: AccViolation[],
        activeSelections: number[],
        setActiveSelections: React.Dispatch<React.SetStateAction<number[]>>
    }) {
    
    /**
     * Function that adds updates activeSelections when violation is clicked in panel
     * @param violation - selected violation
     * @param index - index of selected violation
     * @param active - boolean describing if violation is already selected
     */
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
                        <Badge variant="default" className={`${impactColor(result.impact)} max-w-30 h-6`}>
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
