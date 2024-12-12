/**
 * @fileoverview Test file for FilterModal function
 * @author Marie Baker
 * @references ChatGPT for assistance with Jest Syntax
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FilterModal } from '../pages/Scan/FilterModal';

describe('FilterModal Component', () => {
  const mockApplyFilters = jest.fn();

  beforeEach(() => {
    mockApplyFilters.mockClear();
    render(<FilterModal applyFilters={mockApplyFilters} />);
  });

  it('renders the modal with default filters', () => {
    // Check for headings
    expect(
      screen.getByText('Select Accessibility Standards')
    ).toBeInTheDocument();

    expect(screen.getByText('Recommended')).toBeInTheDocument();
    expect(screen.getByText('Other Filters')).toBeInTheDocument();

    // Check default selected filters
    const wcag20Checkbox = screen.getByLabelText('WCAG 2.0 Level AA');
    expect(wcag20Checkbox).toBeChecked();

    const wcag21Checkbox = screen.getByLabelText('WCAG 2.1 Level AA');
    expect(wcag21Checkbox).toBeChecked();

    const bestPracticeCheckbox = screen.getByLabelText('Best Practices');
    expect(bestPracticeCheckbox).toBeChecked();
  });

  it('allows users to select and deselect filters', () => {
    const wcag22Checkbox = screen.getByLabelText('WCAG 2.2 Level AA');
    const experimentalCheckbox = screen.getByLabelText('Experimental');

    // Select a filter
    fireEvent.click(wcag22Checkbox);
    expect(wcag22Checkbox).toBeChecked();

    // Deselect a filter
    fireEvent.click(experimentalCheckbox);
    expect(experimentalCheckbox).toBeChecked();

    fireEvent.click(experimentalCheckbox);
    expect(experimentalCheckbox).not.toBeChecked();
  });

  it('prevents deselecting the last filter', () => {
    const wcag20Checkbox = screen.getByLabelText('WCAG 2.0 Level AA');
    const wcag21Checkbox = screen.getByLabelText('WCAG 2.1 Level AA');
    const bestPracticeCheckbox = screen.getByLabelText('Best Practices');

    // Deselect two filters
    fireEvent.click(wcag21Checkbox);
    fireEvent.click(bestPracticeCheckbox);

    // Try to deselect the last filter
    fireEvent.click(wcag20Checkbox);
    expect(wcag20Checkbox).toBeChecked();
  });

  it('calls applyFilters with the selected filters on button click', () => {
    const applyButton = screen.getByRole('button', { name: 'Scan My Code' });

    // Click the apply button
    fireEvent.click(applyButton);

    expect(mockApplyFilters).toHaveBeenCalledWith([
      'wcag2aa',
      'wcag21aa',
      'best-practice',
    ]);
  });
});
