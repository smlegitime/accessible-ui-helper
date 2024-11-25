import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Button } from '../../components/ui/button';
import { StandardTag } from '../../components/scan/StandardTag';

interface FilterModalProps {
  applyFilters: (filters: string[]) => void;
}
interface tagObject {
  tagName: string,
  tagId: string
  tagType: string
}

// Pre-select recommended filters
export function FilterModal({ applyFilters }: FilterModalProps) {

  const recommendedTags: tagObject[] = [
    {
      tagName: 'WCAG 2.1 AA',
      tagId: 'wcag21aa',
      tagType: 'Recommended'
    },
    {
      tagName: 'WCAG 2 AA',
      tagId: 'wcag2aa',
      tagType: 'Recommended'
    },
    {
      tagName: 'Best Practices',
      tagId: 'best-practice',
      tagType: 'Recommended'
    },
  ]

  const otherTags: tagObject[] = [
    {
      tagName: 'Experimental',
      tagId: 'experimental',
      tagType: 'Recommended'
    }
  ]
  
  const [selectedFilters, setSelectedFilters] = useState<string[]>([
    'wcag21aa',
    'wcag2aa',
    'best-practice',
  ]);

  const handleCheckboxChange = (filter: string) => {
    setSelectedFilters(
      (prev) =>
        prev.includes(filter)
          ? prev.filter((item) => item !== filter) // Remove filter if already selected
          : [...prev, filter] // Add filter if not selected
    );
  };

  // passing chosen standards to index.tsx
  const handleApply = () => {
    applyFilters(selectedFilters);
  };

  return (
    <Dialog.Root defaultOpen={true}>
      <Dialog.Portal>
        {/* Overlay with black background */}
        <Dialog.Overlay className='fixed inset-0 bg-black/50 backdrop-blur-sm' />
        <Dialog.Content
          onInteractOutside={(event) => event.preventDefault()}
          onEscapeKeyDown={(event) => event.preventDefault()}
          className='z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     bg-[#282828] rounded-lg w-[80%] h-[80%] max-w-6xl max-h-[90%] overflow-y-auto 
                     border-2 border-[#4a4a4a] px-6 py-6'
        >
          {/* Close Button -- when clicked, handleAppy is called */}
          <Dialog.Close
            asChild
            className='absolute top-4 right-4 text-gray-400 hover:text-gray-600'
          >
            <Button
              onClick={handleApply}
              className='bg-primary-100 text-black font-bold px-4 py-2 rounded-lg hover:bg-slate-400'
            >
              Scan My Code
            </Button>
          </Dialog.Close>

          {/* Modal Header */}
          <h1 className='text-white text-2xl font-bold mb-4'>
            Select Accessibility Rules
          </h1>

          {/* Recommended Filters Section */}
          <div className='flex flex-wrap space-x-6 mb-6'>
            <h2 className='w-full text-white font-semibold text-[#FD9090] mb-4'>
              Recommended
            </h2>

          {recommendedTags.map((tag) => <StandardTag
                        key={tag.tagId}  
                        tagName={tag.tagName}
                        tagId={tag.tagId}
                        tagType={tag.tagType}
                        selectedFilters={selectedFilters}
                        handleCheckboxChange={handleCheckboxChange}/>)}

          </div>

          {/* Other Filters Section */}
          <div className='flex flex-wrap space-x-6 mb-6'>
            <h2 className='w-full text-white font-semibold text-[#FD9090] mb-4'>
              Other Filters
            </h2>

            {/* Other Tags */}
            {otherTags.map((tag) => <StandardTag
                        key={tag.tagId} 
                        tagName={tag.tagName}
                        tagId={tag.tagId}
                        tagType={tag.tagType}
                        selectedFilters={selectedFilters}
                        handleCheckboxChange={handleCheckboxChange}/>)}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
