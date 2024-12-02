/**
 * @fileoverview Accessibility standard tag displayed on scan page pop-up
 * @author Marie Baker
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 * @lastupdated Dec 1, 2024
 */

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
  tagLink: string;
  tagDescription: string;
}

export function FilterModal({ applyFilters }: FilterModalProps) {
  const recommendedTags: Tag[] = [
    {
      tagName: 'WCAG 2.0 Level AA',
      tagId: 'wcag2aa',
      tagType: 'recommended',
      tagLink:
        'https://dequeuniversity.com/rules/axe/4.10/#wcag-20-level-a--aa-rules',
      tagDescription:
        'The WCAG 2.0 AA rules are accessibility guidelines designed to make web content accessible to a wider range of users, including those with disabilities.',
    },

    {
      tagName: 'WCAG 2.1 Level AA',
      tagId: 'wcag21aa',
      tagType: 'recommended',
      tagLink:
        'https://dequeuniversity.com/rules/axe/4.10/#wcag-21-level-a--aa-rules',
      tagDescription:
        'The WCAG 2.1 AA rules build on WCAG 2.0 and add additional guidelines to improve web accessibility, particularly for people with cognitive and learning disabilities, as well as users with low vision and mobile device users.',
    },

    {
      tagName: 'Best Practices',
      tagId: 'best-practice',
      tagType: 'recommended',
      tagLink:
        'https://dequeuniversity.com/rules/axe/4.10/#best-practices-rules',
      tagDescription:
        'Industry-recognized practices that improve user experience, though they may not strictly follow WCAG success criteria. Typically used in conjunction with WCAG standards to ensure the highest level of accessibility.',
    },
  ];

  const otherTags: Tag[] = [
    {
      tagName: 'WCAG 2.2 Level AA',
      tagId: 'wcag22aa',
      tagType: 'other',
      tagLink:
        'https://dequeuniversity.com/rules/axe/4.10/#wcag-22-level-a--aa-rules',
      tagDescription:
        'WCAG 2.2 AA includes additional guidelines to improve accessibility. These rules are disabled by default, until WCAG 2.2 is more widely adopted and required.',
    },
    {
      tagName: 'Experimental',
      tagId: 'experimental',
      tagType: 'other',
      tagLink: 'https://dequeuniversity.com/rules/axe/4.10/#experimental-rules',
      tagDescription:
        'Experimental rules are in development and may not be fully stable. They are disabled by default in axe-core but can be enabled for testing purposes, offering developers a chance to explore and evaluate potential future accessibility guidelines. These rules should not be used in production environments.',
    },
  ];

  // default selected filters ("recommended")
  const [selectedFilters, setSelectedFilters] = useState<string[]>([
    'wcag2aa',
    'wcag21aa',
    'best-practice',
  ]);

  const handleCheckboxChange = (filter: string) => {
    setSelectedFilters((prev) => {
      if (prev.includes(filter)) {
        // Ensure at least one filter is selected -- required by axecore
        if (prev.length === 1) {
          return prev; // Return unchanged if only one filter is selected
        }
        return prev.filter((item) => item !== filter);
      }
      return [...prev, filter];
    });
  };

  const handleApply = () => {
    applyFilters(selectedFilters);
  };

  return (
    <Dialog.Root defaultOpen>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 bg-black/50 backdrop-blur-sm' />
        <Dialog.Content
          // Correctly typed event handlers
          onInteractOutside={(event) => event.preventDefault()}
          onEscapeKeyDown={(event) => event.preventDefault()}
          className='z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                     bg-[#282828] rounded-lg w-[80%] h-[80%] max-w-6xl max-h-[90%] overflow-y-auto
                     border-2 border-[#4a4a4a] px-6 py-6'
        >
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

// import React from 'react';
// import { Badge } from '../../components/ui/badge';
// export const FilterModal = () => {
//   const recommendedTags = [
//     {
//       title: 'Best Practices',
//       type: 'strict',
//       tag: 'recommended',
//       description:
//         'Industry accepted practices that enhance usability for all users.',
//     },
//     {
//       title: 'WCAG 2.0 Level AA',
//       type: 'standard',
//       tag: 'recommended',
//       description:
//         'Builds upon WCAG 2.1 and includes additional criteria, such as Focus Appearance, Drag and Drop.',
//     },
//     {
//       title: 'WCAG 2.1 Level AA',
//       type: 'standard',
//       tag: 'recommended',
//       description:
//         'WCAG 2.1 introduced new guidelines focused on mobile accessibility, touch gestures, and cognitive accessibility.',
//     },
//   ];

//   const otherTags = [
//     {
//       title: 'section508',
//       type: 'old',
//       tag: 'description',
//       description: 'Old Section 508 rules',
//     },
//     {
//       title: 'Other rules',
//       type: 'old',
//       tag: 'description',
//       description: 'Rules descriptions, more rules descriptions.',
//     },
//   ];

//   return (
//     <div className='bg-black text-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto'>
//       {/* Header */}
//       <h1 className='text-2xl font-semibold mb-4'>
//         Select Accessibility Rules
//       </h1>

//       {/* Selected Tags */}
//       <div className='flex flex-wrap gap-2 mb-6'>
//         <Badge variant='default' className='bg-primary text-black'>
//           Best Practice
//         </Badge>
//         <Badge variant='default' className='bg-primary text-black'>
//           WCAG 2.0 Level AA
//         </Badge>
//       </div>

//       {/* Recommended Section */}
//       <h2 className='text-xl font-semibold mb-4'>Recommended</h2>
//       <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6'>
//         {recommendedTags.map((tag, index) => (
//           <div key={index} className='bg-gray-800 p-4 rounded-lg shadow-md'>
//             <div className='flex justify-between items-center mb-2'>
//               <h3 className='font-semibold text-lg'>{tag.title}</h3>
//               <div className='flex gap-2'>
//                 <Badge variant='default' className='bg-gray-600 text-white'>
//                   {tag.type}
//                 </Badge>
//                 <Badge
//                   variant='default'
//                   className={`${
//                     tag.tag === 'recommended'
//                       ? 'bg-yellow-500 text-black'
//                       : 'bg-gray-500 text-white'
//                   }`}
//                 >
//                   {tag.tag}
//                 </Badge>
//               </div>
//             </div>
//             <p className='text-sm text-gray-300'>{tag.description}</p>
//           </div>
//         ))}
//       </div>

//       {/* Others Section */}
//       <h2 className='text-xl font-semibold mb-4'>Others</h2>
//       <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
//         {otherTags.map((tag, index) => (
//           <div key={index} className='bg-gray-800 p-4 rounded-lg shadow-md'>
//             <div className='flex justify-between items-center mb-2'>
//               <h3 className='font-semibold text-lg'>{tag.title}</h3>
//               <div className='flex gap-2'>
//                 <Badge variant='default' className='bg-gray-600 text-white'>
//                   {tag.type}
//                 </Badge>
//                 <Badge
//                   variant='default'
//                   className={`${
//                     tag.tag === 'description'
//                       ? 'bg-green-500 text-black'
//                       : 'bg-gray-500 text-white'
//                   }`}
//                 >
//                   {tag.tag}
//                 </Badge>
//               </div>
//             </div>
//             <p className='text-sm text-gray-300'>{tag.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
