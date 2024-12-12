// /**
//  * @fileoverview Export button test file
//  * @author Brandon Woodard
//  * @copyright 2024 Accessible UI Helper. All rights reserved.
//  */

// import { render, screen, fireEvent } from '@testing-library/react';
// import { ExportButton } from './ExportButton';
// import jsPDF from 'jspdf';
// import JSZip from 'jszip';
// import { normalizeContent } from './DiffHighlightEditor';

import { render, screen } from '@testing-library/react';
import { Scan } from '../pages/Scan/index'; 
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Home } from '../pages/Home';


test('navigates home page on scan because pages is empty', () => {
    const HomePage =  <Home />
    const ScanPage = <Scan />
  
    const App = () => {return (
      <div className="App">
      <MemoryRouter>
        <Routes>
          <Route path="/" element={HomePage} />
          <Route path="/scan" element={ScanPage} />
        </Routes>
        </MemoryRouter>
      </div>)}
  
    render(
        <App />
    );
    expect(screen.getByText("Scan, review, and implement code fixes to improve your website’s accessibility to reach a wider audience")).toBeInTheDocument();
  });


// jest.mock('jspdf');
// jest.mock('jszip');
// jest.mock('./DiffHighlightEditor', () => ({
//     normalizeContent: jest.fn((content) => content), // Mock normalizeContent to return the same content
// }));

// describe('ExportButton Component', () => {
//     const mockSetGeneratedPageFixes = jest.fn();
//     const mockScanResults = {
//         violations: [
//             {
//                 description: 'Image without alt attribute',
//                 nodes: [
//                     { target: ['<img>'], html: '<img src="example.jpg">' },
//                 ],
//             },
//         ],
//         passes: [
//             { description: 'Button has accessible label' },
//         ],
//     };
//     const mockCodeFiles = {
//         'index.html': { content: '<img src="example.jpg">' },
//         'app.js': { content: 'console.log("test");' },
//     };

//     beforeEach(() => {
//         jest.clearAllMocks();
//     });

//     it('renders the DONE button', () => {
//         render(
//             <ExportButton
//                 setGeneratedPageFixes={mockSetGeneratedPageFixes}
//                 scanResults={mockScanResults}
//                 codeFiles={mockCodeFiles}
//             />
//         );

//         const button = screen.getByText(/done/i);
//         expect(button).toBeInTheDocument();
//     });

//     it('calls setGeneratedPageFixes and generates a PDF and ZIP on button click', async () => {
//         const mockPdfOutput = jest.fn();
//         jsPDF.mockImplementation(() => ({
//             text: jest.fn(),
//             setTextColor: jest.fn(),
//             setFontSize: jest.fn(),
//             rect: jest.fn(),
//             setFillColor: jest.fn(),
//             addPage: jest.fn(),
//             output: mockPdfOutput.mockReturnValue('mock-pdf-blob'),
//             internal: { pageSize: { getWidth: () => 210, getHeight: () => 297 } },
//         }));

//         const mockGenerateAsync = jest.fn().mockResolvedValue(new Blob());
//         JSZip.mockImplementation(() => ({
//             file: jest.fn(),
//             generateAsync: mockGenerateAsync,
//         }));

//         render(
//             <ExportButton
//                 setGeneratedPageFixes={mockSetGeneratedPageFixes}
//                 scanResults={mockScanResults}
//                 codeFiles={mockCodeFiles}
//             />
//         );

//         const button = screen.getByText(/done/i);
//         fireEvent.click(button);

//         expect(mockSetGeneratedPageFixes).toHaveBeenCalledWith(mockCodeFiles);

//         // Ensure jsPDF methods are called correctly
//         expect(jsPDF).toHaveBeenCalledTimes(1);
//         expect(mockPdfOutput).toHaveBeenCalledTimes(1);

//         // Ensure JSZip methods are called correctly
//         expect(JSZip).toHaveBeenCalledTimes(1);
//         expect(mockGenerateAsync).toHaveBeenCalledTimes(1);
//     });

//     it('correctly extracts violating lines', () => {
//         const { getViolatingLines } = require('./ExportButton');
//         const violatingLines = getViolatingLines(
//             '<img>',
//             '<img src="example.jpg">',
//             mockCodeFiles
//         );

//         expect(violatingLines).toContain('File: index.html (Line 1): <img src="example.jpg">');
//     });
// });
