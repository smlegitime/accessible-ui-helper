/**
 * @fileoverview Export button component and functionality
 * to be fixed
 * @author Brandon Woodard
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */
import jsPDF from 'jspdf';
import JSZip from 'jszip';
import { Button } from "../../components/ui/button";
import { AccessibilityResults, FileCollection } from '@/src/interfaces/scanInterfaces';
import { normalizeContent } from './DiffHighlightEditor'; // Reuse normalization logic

export function ExportButton({
    setGeneratedPageFixes,
    scanResults,
    codeFiles
}: {
    setGeneratedPageFixes: React.Dispatch<React.SetStateAction<FileCollection>>,
    scanResults: AccessibilityResults,
    codeFiles: FileCollection
}) {
    /**
     * Helper: Extract violating lines for a given violation.
     */
    const getViolatingLines = (target: string, html: string, files: FileCollection): string[] => {
        const lines: string[] = [];
        Object.entries(files).forEach(([filePath, fileData]) => {
            const fileContent = fileData.content;
            const fileLines = fileContent.split('\n');

            fileLines.forEach((line, index) => {
                const normalizedLine = normalizeContent(line);
                const normalizedHtml = normalizeContent(html);

                // Match the line with the target or HTML content
                if (normalizedLine.includes(target) || normalizedLine.includes(normalizedHtml)) {
                    lines.push(`File: ${filePath} (Line ${index + 1}): ${line.trim()}`);
                }
            });
        });

        return lines;
    };

    /**
     * 'done'/import button functionality for generating pdf and zip
     */
    const handleDoneClick = async () => {
        setGeneratedPageFixes(codeFiles);
    
        const pdf = new jsPDF();
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
    
        // Function to fill the background for the current page
        const fillBackground = () => {
            pdf.setFillColor(0, 0, 0); // RGB for black
            pdf.rect(0, 0, pageWidth, pageHeight, 'F'); // Fill the entire page
        };
    
        // Initial page background
        fillBackground();
    
        // Add title in white
        pdf.setTextColor(255, 255, 255); // Set text color to white for the title
        pdf.setFontSize(16);
        pdf.text("Accessibility Report", 10, 10);
    
        // Violations Section
        pdf.setTextColor(253, 144, 144); // Set color to red for violations
        pdf.setFontSize(14);
        pdf.text("Violations", 10, 20);
    
        pdf.setFontSize(12);
        let currentY = 30;
    
        scanResults.violations.forEach((violation, index) => {
            // Add new page if content overflows
            if (currentY + 20 > pageHeight) {
                pdf.addPage();
                fillBackground(); // Apply black background to the new page
                currentY = 10; // Reset Y position
            }
    
            // Set red color for each violation item
            pdf.setTextColor(253, 144, 144);
            const violationText = `${index + 1}. ${violation.description}`;
            pdf.text(violationText, 10, currentY);
            currentY += 10;
    
            // Retrieve and add violating lines
            const violatingLines = getViolatingLines(
                violation.nodes[0]?.target?.[0] || '',
                violation.nodes[0]?.html || '',
                codeFiles
            );
    
            pdf.setTextColor(200, 200, 200); // Set light gray for code lines
            violatingLines.forEach((line) => {
                if (currentY + 10 > pageHeight) {
                    pdf.addPage();
                    fillBackground(); // Apply black background to the new page
                    currentY = 10; // Reset Y position
                }
                pdf.text(`- ${line}`, 10, currentY);
                currentY += 10;
            });
        });
    
        // Passes Section
        if (currentY + 20 > pageHeight) {
            pdf.addPage();
            fillBackground(); // Apply black background to the new page
            currentY = 10; // Reset Y position
        }
    
        pdf.setTextColor(228, 253, 144); // Set color to green for passes
        pdf.setFontSize(14);
        pdf.text("Passes", 10, currentY);
        currentY += 10;
    
        pdf.setFontSize(12);
        scanResults.passes.forEach((pass, index) => {
            // Add new page if content overflows
            if (currentY + 10 > pageHeight) {
                pdf.addPage();
                fillBackground(); // Apply black background to the new page
                currentY = 10; // Reset Y position
            }
            pdf.text(`${index + 1}. ${pass.description}`, 10, currentY);
            currentY += 10;
        });
    
        // Generate the PDF Blob
        const pdfBlob = pdf.output("blob");
    
        // Create the ZIP file and add files to it
        const zip = new JSZip();
        zip.file("Accessibility_Report.pdf", pdfBlob);
    
        Object.entries(codeFiles).forEach(([fileName, fileData]) => {
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
        <Button onClick={handleDoneClick}
            className="max-h-6 min-w-20 bg-primary-100 rounded-full hover:bg-slate-400 text-black p-4 font-bold">
            DONE
        </Button>
    );
}
