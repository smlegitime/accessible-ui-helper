/**
 * @fileoverview Test file for AccessibilityPanel Component
 * @author Stephanie Olaiya
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { AccessiblityPanel } from '../pages/Scan/AccessiblityPanel';
import { testingMock } from '../mocks/accessibilityResultMocks';
import { AccessibilityResults, AccViolation } from '../interfaces/scanInterfaces';
import { MemoryRouter } from 'react-router-dom';


// Mock the API response for the POST request
const mockScanResults = testingMock;
const mockSetGeneratedPageFixes = jest.fn();
const mockSetOriginalFiles = jest.fn();
const mockSetViewEditor = jest.fn();
const mockSetLoadingFix = jest.fn();

const setup = () => {
    render(
        <MemoryRouter>
            <AccessiblityPanel
                scanResults={mockScanResults as AccessibilityResults}
                framework="Vanilla"
                viewEditor={false}
                setGeneratedPageFixes={mockSetGeneratedPageFixes}
                setOriginalFiles={mockSetOriginalFiles}
                setViewEditor={mockSetViewEditor}
                setLoadingFix={mockSetLoadingFix}
                folderName="Test Folder"
                codeFiles={{}}
                accessibilityStandards={['WCAG 2.1']} 
                currentScannedPage={''}            />
        </MemoryRouter>
    );
};

describe('AccessiblityPanel', () => {
    it('renders the component correctly', () => {
        setup();

        // Check if the title, folder name, and framework are rendered
        expect(screen.getByText('AccUI')).toBeInTheDocument();
        expect(screen.getByText('Uploaded Folder: Test Folder')).toBeInTheDocument();
        expect(screen.getByText('Vanilla Website Project')).toBeInTheDocument();

        // Check for accessibility sections (Passes and Violations)
        expect(screen.getByText('Accessibility Checks')).toBeInTheDocument();
        expect(screen.getByText('Passes')).toBeInTheDocument();
        expect(screen.getByText('Violations')).toBeInTheDocument();

        // Check the number of passes and violations displayed
        expect(screen.getByText('18')).toBeInTheDocument();
        expect(screen.getByText('1')).toBeInTheDocument();
    });

    it('handles the "View Changes in Editor" button click', () => {
        setup();

        const button = screen.getByText('VIEW CHANGES IN EDITOR');
        fireEvent.click(button);

        // After clicking, setViewEditor should be called 
        expect(mockSetViewEditor).toHaveBeenCalled();
    });
    
});

