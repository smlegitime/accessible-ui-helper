import { useEffect, useMemo, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';

interface FilterModalProps {
  applyFilters: (filters: string[]) => void;
}

// Pre-select recommended filters
export function FilterModal({ applyFilters }: FilterModalProps) {
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
    console.log(selectedFilters);
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
          className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
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

            {/* WCAG2.1AA Tag */}
            <div className='flex items-center bg-[#3b3b3b] p-4 space-x-4 border border-[#4a4a4a] rounded-md w-[310px]'>
              <input
                type='checkbox'
                id='wcag21aa'
                checked={selectedFilters.includes('wcag21aa')}
                onChange={() => handleCheckboxChange('wcag21aa')}
                className='peer w-5 h-5 rounded-md border-2 border-gray-300 bg-gray-800 checked:bg-primary-100 focus:ring-2 focus:ring-primary-100'
              />
              <div className='flex flex-col'>
                <h3 className='text-white text-left font-bold'>WCAG 2.1 AA</h3>
                <div className='my-1'>
                  <span className='bg-primary-100 text-black px-2 py-1 rounded-full text-xs'>
                    Accessibility Standard
                  </span>
                </div>
                <span className='bg-green-500 text-black px-2 py-1 rounded-full text-xs mt-2'>
                  Recommended
                </span>
                <a href='#' target='_blank' rel='noopener noreferrer'>
                  <h5 className='text-[#88AFEF] underline'>Learn more</h5>
                </a>
              </div>
            </div>

            {/* WCAG2AA Tag */}
            <div className='flex items-center bg-[#3b3b3b] p-4 space-x-4 border border-[#4a4a4a] rounded-md w-[310px]'>
              <input
                type='checkbox'
                id='wcag2aa'
                checked={selectedFilters.includes('wcag2aa')}
                onChange={() => handleCheckboxChange('wcag2aa')}
                className='peer w-5 h-5 rounded-md border-2 border-gray-300 bg-gray-800 checked:bg-primary-100 focus:ring-2 focus:ring-primary-100'
              />
              <div className='flex flex-col'>
                <h3 className='text-white text-left font-bold'>WCAG 2 AA</h3>
                <div className='my-1'>
                  <span className='bg-primary-100 text-black px-2 py-1 rounded-full text-xs'>
                    Accessibility Standard
                  </span>
                </div>
                <span className='bg-yellow-500 text-black px-2 py-1 rounded-full text-xs mt-2'>
                  Recommended
                </span>
                <a href='#' target='_blank' rel='noopener noreferrer'>
                  <h5 className='text-[#88AFEF] underline'>Learn more</h5>
                </a>
              </div>
            </div>

            {/* Best Practices Tag */}
            <div className='flex items-center bg-[#3b3b3b] p-4 space-x-4 border border-[#4a4a4a] rounded-md w-[310px]'>
              <input
                type='checkbox'
                id='best-practice'
                checked={selectedFilters.includes('best-practice')}
                onChange={() => handleCheckboxChange('best-practice')}
                className='peer w-5 h-5 rounded-md border-2 border-gray-300 bg-gray-800 checked:bg-primary-100 focus:ring-2 focus:ring-primary-100'
              />
              <div className='flex flex-col'>
                <h3 className='text-white text-left font-bold'>
                  Best Practices
                </h3>
                <div className='my-1'>
                  <span className='bg-primary-100 text-black px-2 py-1 rounded-full text-xs'>
                    Accessibility Standard
                  </span>
                </div>
                <span className='bg-yellow-500 text-black px-2 py-1 rounded-full text-xs mt-2 inline-block'>
                  Recommended
                </span>
                <a href='#' target='_blank' rel='noopener noreferrer'>
                  <h5 className='text-[#88AFEF] underline'>Learn more</h5>
                </a>
              </div>
            </div>
          </div>

          {/* Other Filters Section */}
          <div className='flex flex-wrap space-x-6 mb-6'>
            <h2 className='w-full text-white font-semibold text-[#FD9090] mb-4'>
              Other Filters
            </h2>

            {/* Experimental Tag */}
            <div className='flex items-center bg-[#3b3b3b] p-4 space-x-4 border border-[#4a4a4a] rounded-md'>
              <input
                type='checkbox'
                id='experimental'
                checked={selectedFilters.includes('experimental')}
                onChange={() => handleCheckboxChange('experimental')}
                className='peer w-5 h-5 rounded-md border-2 border-gray-300 bg-gray-800 checked:bg-primary-100 focus:ring-2 focus:ring-primary-100'
              />
              <div className='flex flex-col'>
                <h3 className='text-white text-left font-bold'>Experimental</h3>
                <div className='my-1'>
                  <span className='bg-primary-100 text-black px-2 py-1 rounded-full text-xs'>
                    Accessibility Standard
                  </span>
                </div>
                <span className='bg-green-500 text-black px-2 py-1 rounded-full text-xs mt-2'>
                  Recommended
                </span>
                <a href='#' target='_blank' rel='noopener noreferrer'>
                  <h5 className='text-[#88AFEF] underline'>Learn more</h5>
                </a>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
