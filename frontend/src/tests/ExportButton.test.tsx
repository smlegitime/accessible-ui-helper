/**
 * @fileoverview Export button test file
 * @author Brandon Woodard
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ExportButton } from '../pages/Scan/ExportButton';
import jsPDF from 'jspdf';
import JSZip from 'jszip';
import '@testing-library/jest-dom';
import {
  AccessibilityResults,
  FileCollection,
} from '../interfaces/scanInterfaces';

jest.mock('jspdf');

describe('ExportButton', () => {
  const setGeneratedPageFixes = jest.fn();
  global.URL.createObjectURL = jest.fn();
  const mockScanResults: AccessibilityResults = {
    violations: [
      {
        id: 'violation-1',
        impact: 'high',
        tags: ['image', 'alt-attribute'],
        description: 'Image without alt attribute',
        help: 'Provide an alt attribute for images.',
        helpUrl: 'https://example.com/image-alt-help',
        nodes: [
          {
            any: [
              {
                id: 'check-1',
                data: 'any',
                relatedNodes: [],
                impact: 'high',
                message: 'Alt attribute missing',
              },
            ],
            all: [],
            none: [],
            impact: 'high',
            html: '<img src="example.jpg">',
            target: ['<img>'],
            failureSummary: 'Image tag does not have an alt attribute.',
          },
        ],
      },
    ],
    passes: [
      {
        id: 'pass-1',
        impact: 'minor',
        tags: ['accessible', 'button'],
        description: 'Button has accessible label',
        help: 'The button is accessible.',
        helpUrl: 'https://example.com/button-help',
        nodes: [],
      },
    ],
    inapplicable: [],
    incomplete: [],
  };

  const mockCodeFiles: FileCollection = {
    'index.html': {
      type: 'html',
      content: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="styles.css">
          <title>My Sandpack App</title>
        </head>
        <body>
          <h1>Hello, Sandpack!</h1>
          <div id="app"></div>
          <button id="btn">Click Me</button>
          <div id="count"></div>
          <a href="about.html">Go to About</a>
          <script src="node_modules/axe-core/axe.min.js"></script>
          <script src="axe-script.js"></script>
          <script src="script.js"></script>
        </body>
        </html>`,
    },
    'style.css': {
      type: 'css',
      content: `body { font-family: Arial; } img { width: 100px; }`,
    },
  };

  it('should render the export button', () => {
    render(
      <ExportButton
        setGeneratedPageFixes={setGeneratedPageFixes}
        scanResults={mockScanResults}
        codeFiles={mockCodeFiles}
      />
    );

    const button = screen.getByTestId('export-button');
    expect(button).toBeInTheDocument();
  });

  it('should call handleDoneClick and trigger PDF/ZIP generation on button click', async () => {
    // Create mocks for PDF generation
    const addPageMock = jest.fn();
    const textMock = jest.fn();
    const outputMock = jest.fn().mockReturnValue('fake-pdf-blob');

    // Mock jsPDF constructor and its methods
    const jsPDFMock = jest.fn().mockImplementation(() => ({
      internal: {
        pageSize: {
          getWidth: jest.fn().mockReturnValue(210),
          getHeight: jest.fn().mockReturnValue(297),
        },
      },
      setFillColor: jest.fn(),
      rect: jest.fn(),
      setTextColor: jest.fn(),
      setFontSize: jest.fn(),
      text: textMock,
      addPage: addPageMock,
      output: outputMock,
    }));

    // Cast jsPDF to jest.MockedClass and mock its implementation
    const MockedJS = jsPDF as jest.MockedClass<typeof jsPDF>;
    MockedJS.mockImplementation(jsPDFMock);

    // Mock JSZip generateAsync
    const zipGenerateMock = jest.fn().mockResolvedValue(new Blob());
    jest
      .spyOn(JSZip.prototype, 'generateAsync')
      .mockImplementation(zipGenerateMock);

    render(
      <ExportButton
        setGeneratedPageFixes={setGeneratedPageFixes}
        scanResults={mockScanResults}
        codeFiles={mockCodeFiles}
      />
    );

    // Simulate the button click
    fireEvent.click(screen.getByTestId('export-button'));

    // Wait for async code to finish
    await waitFor(() => {
      expect(setGeneratedPageFixes).toHaveBeenCalledWith(mockCodeFiles);
      expect(jsPDF).toHaveBeenCalled();
      expect(zipGenerateMock).toHaveBeenCalled();
      expect(textMock).toHaveBeenCalled();
      expect(outputMock).toHaveBeenCalled();
    });
  });
});
