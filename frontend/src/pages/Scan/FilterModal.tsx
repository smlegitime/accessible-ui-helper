import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Button } from '../../components/ui/button';
import { StandardTag } from '../../components/scan/StandardTag';

interface FilterModalProps {
  applyFilters: (filters: string[]) => void;
}

interface Tag {
  tagName: string;
  tagId: string;
  tagType: string;
}

export function FilterModal({ applyFilters }: FilterModalProps) {
  const recommendedTags: Tag[] = [
    { tagName: 'WCAG 2.1 AA', tagId: 'wcag21aa', tagType: 'Recommended' },
    { tagName: 'WCAG 2 AA', tagId: 'wcag2aa', tagType: 'Recommended' },
    { tagName: 'Best Practices', tagId: 'best-practice', tagType: 'Recommended' },
  ];

  const otherTags: Tag[] = [
    { tagName: 'Experimental', tagId: 'experimental', tagType: 'Other' },
  ];

  const [selectedFilters, setSelectedFilters] = useState<string[]>([
    'wcag21aa',
    'wcag2aa',
    'best-practice',
  ]);

  const handleCheckboxChange = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((item) => item !== filter)
        : [...prev, filter]
    );
  };

  const handleApply = () => {
    applyFilters(selectedFilters);
  };

  return (
    <Dialog.Root defaultOpen>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content
          // Correctly typed event handlers
          onInteractOutside={(event) => event.preventDefault()}
          onEscapeKeyDown={(event) => event.preventDefault()}
          className="z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     bg-[#282828] rounded-lg w-[80%] h-[80%] max-w-6xl max-h-[90%] overflow-y-auto 
                     border-2 border-[#4a4a4a] px-6 py-6"
        >
          <Dialog.Close
            asChild
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <Button
              onClick={handleApply}
              className="bg-primary-100 text-black font-bold px-4 py-2 rounded-lg hover:bg-slate-400"
            >
              Scan My Code
            </Button>
          </Dialog.Close>

          <h1 className="text-white text-2xl font-bold mb-4">
            Select Accessibility Rules
          </h1>

          <div className="flex flex-wrap space-x-6 mb-6">
            <h2 className="w-full text-white font-semibold text-[#FD9090] mb-4">
              Recommended
            </h2>
            {recommendedTags.map((tag) => (
              <StandardTag
                key={tag.tagId}
                tagName={tag.tagName}
                tagId={tag.tagId}
                tagType={tag.tagType}
                selectedFilters={selectedFilters}
                handleCheckboxChange={handleCheckboxChange}
              />
            ))}
          </div>

          <div className="flex flex-wrap space-x-6 mb-6">
            <h2 className="w-full text-white font-semibold text-[#FD9090] mb-4">
              Other Filters
            </h2>
            {otherTags.map((tag) => (
              <StandardTag
                key={tag.tagId}
                tagName={tag.tagName}
                tagId={tag.tagId}
                tagType={tag.tagType}
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
