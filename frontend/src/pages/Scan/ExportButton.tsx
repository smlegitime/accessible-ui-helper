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
    )
}