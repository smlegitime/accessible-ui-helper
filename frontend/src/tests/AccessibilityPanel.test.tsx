/**
 * @fileoverview Test file for AccessibilityPanel Component
 * @author Stephanie Olaiya
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { AccessiblityPanel } from '../pages/Scan/AccessiblityPanel';
import { mock1, testingMock } from '../mocks/accessibilityResultMocks';
import { AccessibilityResults, AccViolation } from '../interfaces/scanInterfaces';
import { MemoryRouter } from 'react-router-dom';
import { ErrorFlag } from '../pages/Scan/ErrorFlag';
import { PassesPanel, ViolationsPanel } from '../components/scan/ResultPanels';


// Mock the API response for the POST request and other setters 
const mockScanResults = testingMock;
const mockSetGeneratedPageFixes = jest.fn();
const mockSetOriginalFiles = jest.fn();
const mockSetViewEditor = jest.fn();
const mockSetLoadingFix = jest.fn();
const mockDisplayError = jest.fn();

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

    it('fix button in panel', () => {
        setup();
        expect(screen.getByTestId("fix-button"))
        .toBeInTheDocument();
    }); 

    it('export button in panel', () => {
        setup();
        expect(screen.getByTestId("export-button"))
        .toBeInTheDocument();
    } )
});

describe('Error flag', () => {
    it('clicking on close button in flag triggers setDisplayError', async () => {
        await  render(
            <ErrorFlag setDisplayError={mockDisplayError} />
    );
        const errorMessage = await screen.findByText(/Error rendering fix.*Please try again later./);
        expect(errorMessage).toBeInTheDocument();
    })

    it ('clicking on close button triggers setDisplayError', async () => {
        const setDisplayError = jest.fn();
      
        await render(
          <ErrorFlag setDisplayError={setDisplayError} />
        );
      
        // Find the close button by its test ID
        const closeButton = screen.getByTestId('error-flag-close-button');
        expect(closeButton).toBeInTheDocument();
      
        // Simulate a click on the close button
        fireEvent.click(closeButton);
      
        // Check that setDisplayError was called with false
        expect(setDisplayError).toHaveBeenCalledWith(false);
      });
})

describe('Violations Panel', () => {

    it('renders violations panel properly', async () => {
        const setActiveSelections = jest.fn();
        render(
            <ViolationsPanel
                resultsToDisplay={mock1.violations}
                activeSelections={[1, 3]}
                setActiveSelections={setActiveSelections} />
        )
        const violationDesc = await screen.findByText(/All page content should be contained by landmarks/);
        expect(violationDesc).toBeInTheDocument();
    })

    it('clicking on violation changes active selections', async () => {
        const setActiveSelections = jest.fn();
        render(
            <ViolationsPanel
                resultsToDisplay={mock1.violations}
                activeSelections={[1, 3]}
                setActiveSelections={setActiveSelections} />
        )

        const violationButton = await screen.findByTestId("violation-click-1");
        fireEvent.click(violationButton);
        expect(setActiveSelections).toHaveBeenCalled();
    })

    it('passes in passes panel are rendered', async () => {
        render(
            <PassesPanel
                resultsToDisplay={testingMock.passes as AccViolation[]} />
        )

        const violationDesc = await screen.findByText(/Elements must meet minimum color contrast ratio thresholds/);
        expect(violationDesc).toBeInTheDocument();
    })

})


