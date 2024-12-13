/**
 * @fileoverview A modal component for selecting accessibility standards filters.
 * This component allows users to choose from recommended and other accessibility
 * standards, such as WCAG 2.0/2.1/2.2 and best practices, to apply to a web accessibility scan.
 * The selected filters are passed to a parent component via the `applyFilters` callback.
 * @author Marie Baker
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 * @lastupdated Dec 11, 2024
 */

import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { Button } from '../../components/ui/button';
import { StandardTag } from '../../components/scan/StandardTag';
import { logging } from '../../lib/logging';
import {
  recommendedTags,
  otherTags,
} from '../../components/scan/AccessibilityTags';

/**
 * Props for the FilterModal component.
 */
interface FilterModalProps {
  applyFilters: (filters: string[]) => void;
}

interface Tag {
  tagName: string;
  tagId: string;
  tagType: string;
  tagLink: string;
  tagDescription: string;
}

//Logger setup
const logger = logging.getLogger('');

// component to hide Dialog Title (necessary for accessibility purposes)
export default () => <VisuallyHidden.Root />;

/**
 * FilterModal component that displays accessibility options for users to choose from.
 * It allows users to select filters that set accessibility standards for scanning.
 */
export function FilterModal({ applyFilters }: FilterModalProps) {
  // default selected filters ("recommended")
  const [selectedFilters, setSelectedFilters] = useState<string[]>([
    'wcag2aa',
    'wcag21aa',
    'best-practice',
  ]);

  /**
   * Handles checkbox selection changes.
   * Ensures at least one filter remains selected.
   *
   * @param {string} filter - The filter ID to add or remove.
   */
  const handleCheckboxChange = (filter: string) => {
    setSelectedFilters((prev) => {
      if (prev.includes(filter)) {
        // Ensure at least one filter is selected -- required by axe-core
        if (prev.length === 1) {
          return prev; // Return unchanged if only one filter is selected
        }
        return prev.filter((item) => item !== filter);
      }
      return [...prev, filter];
    });
  };

  /**
   * Applies the selected filters by invoking the provided applyFilters function.
   */
  const handleApply = () => {
    logger.info('Selected standards...');
    applyFilters(selectedFilters);
  };

  return (
    <Dialog.Root defaultOpen>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 bg-black/50 backdrop-blur-sm' />
        <Dialog.Content
          aria-labelledby='filter-modal'
          aria-describedby='pop up window for selecting accessibility standards'
          onInteractOutside={(event) => event.preventDefault()}
          onEscapeKeyDown={(event) => event.preventDefault()}
          className='z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                     bg-[#282828] rounded-lg w-[80%] h-[80%] max-w-6xl max-h-[90%] overflow-y-auto
                     border-2 border-[#4a4a4a] px-6 py-6'
        >
          <Dialog.Title>
            <VisuallyHidden.Root>Filter</VisuallyHidden.Root>
          </Dialog.Title>

          <h1 className='text-white text-2xl font-bold mb-4 flex items-center justify-between'>
            Select Accessibility Standards
            <Dialog.Close
              asChild
              className='absolute top-4 right-4 text-gray-400 hover:text-gray-600'
            >
              <Button
                variant='outline'
                onClick={handleApply}
                className='max-h-6 min-w-20 bg-primary-100 rounded-full hover:bg-slate-400 text-black p-4 font-bold'
              >
                Scan My Code
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='29'
                  height='29'
                  viewBox='0 0 29 29'
                  fill='none'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M4.35001 14.5C4.35001 14.2115 4.46458 13.9349 4.66853 13.731C4.87247 13.527 5.14908 13.4125 5.43751 13.4125H20.8626L14.8335 7.67046C14.7257 7.57267 14.6386 7.45425 14.5774 7.32219C14.5162 7.19014 14.4822 7.04715 14.4773 6.90169C14.4724 6.75623 14.4967 6.61127 14.5488 6.47538C14.601 6.3395 14.6798 6.21547 14.7808 6.11063C14.8818 6.00579 15.0027 5.92229 15.1365 5.86506C15.2704 5.80783 15.4143 5.77805 15.5598 5.77747C15.7054 5.7769 15.8496 5.80554 15.9838 5.86171C16.1181 5.91787 16.2397 6.00042 16.3415 6.10446L24.3165 13.717C24.4218 13.8184 24.5055 13.94 24.5627 14.0746C24.6198 14.2091 24.6493 14.3538 24.6493 14.5C24.6493 14.6461 24.6198 14.7908 24.5627 14.9254C24.5055 15.0599 24.4218 15.1815 24.3165 15.283L16.3415 22.8955C16.2397 22.9995 16.1181 23.082 15.9838 23.1382C15.8496 23.1944 15.7054 23.223 15.5598 23.2224C15.4143 23.2219 15.2704 23.1921 15.1365 23.1349C15.0027 23.0776 14.8818 22.9941 14.7808 22.8893C14.6798 22.7844 14.601 22.6604 14.5488 22.5245C14.4967 22.3886 14.4724 22.2437 14.4773 22.0982C14.4822 21.9528 14.5162 21.8098 14.5774 21.6777C14.6386 21.5457 14.7257 21.4272 14.8335 21.3295L20.8626 15.5875H5.43751C5.14908 15.5875 4.87247 15.4729 4.66853 15.2689C4.46458 15.065 4.35001 14.7884 4.35001 14.5Z'
                    fill='black'
                  />
                </svg>
              </Button>
            </Dialog.Close>
          </h1>

          <div className='flex flex-wrap space-x-6 mb-6'>
            <h2 className='w-full text-white font-semibold text-[#FD9090] mb-4'>
              Recommended
            </h2>
            {recommendedTags.map((tag) => (
              <StandardTag
                key={tag.tagId}
                tagName={tag.tagName}
                tagId={tag.tagId}
                tagType={tag.tagType}
                tagLink={tag.tagLink}
                tagDescription={tag.tagDescription}
                selectedFilters={selectedFilters}
                handleCheckboxChange={handleCheckboxChange}
              />
            ))}
          </div>

          <div className='flex flex-wrap space-x-6 mb-6'>
            <h2 className='w-full text-white font-semibold text-[#FD9090] mb-4'>
              Other Filters
            </h2>
            {otherTags.map((tag) => (
              <StandardTag
                key={tag.tagId}
                tagName={tag.tagName}
                tagId={tag.tagId}
                tagType={tag.tagType}
                tagLink={tag.tagLink}
                tagDescription={tag.tagDescription}
                selectedFilters={selectedFilters}
                handleCheckboxChange={handleCheckboxChange}
              />
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
