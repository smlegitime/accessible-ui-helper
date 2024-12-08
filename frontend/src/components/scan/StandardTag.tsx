/**
 * @fileoverview Accessibility standard tag displayed on scan page pop-up
 * @author Marie Baker
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 * @lastupdated Dec 1, 2024
 */

export function StandardTag({
  tagName,
  tagId,
  tagType,
  tagLink,
  tagDescription,
  selectedFilters,
  handleCheckboxChange,
}: {
  tagName: string;
  tagId: string;
  tagType: string;
  tagLink: string;
  tagDescription: string;
  selectedFilters: string[];
  handleCheckboxChange: (filter: string) => void;
}) {
  return (
    <div className='flex bg-[#3b3b3b] p-4 border border-[#4a4a4a] rounded-md w-[310px]'>
      {/* Checkbox */}
      <input
        type='checkbox'
        id={tagId}
        checked={selectedFilters.includes(tagId)}
        onChange={() => handleCheckboxChange(tagId)}
        className='peer w-5 h-5 rounded-md border-2 border-gray-300 bg-gray-800 checked:bg-primary-100 focus:ring-2 focus:ring-primary-100 mr-4'
      />

      {/* Main Content */}
      <div className='flex flex-col'>
        {/* Tag Name */}
        <h3 className='text-white text-left font-bold'>{tagName}</h3>

        {/* Tags (Standard and TagType) */}
        <div className='flex items-center space-x-2 my-1'>
          {(tagId === 'wcag21aa' ||
            tagId === 'wcag2aa' ||
            tagId === 'wcag22aa') && (
            <span className='bg-accent-1000 text-black px-2 py-1 rounded-full text-xs'>
              standard
            </span>
          )}

          <span
            className={`inline-flex rounded-full text-xs px-2 py-1 ${
              tagType === 'recommended'
                ? 'bg-primary-100 text-black'
                : tagType === 'other'
                  ? 'bg-accent-700 text-black'
                  : 'bg-gray-500 text-white'
            }`}
          >
            {tagType}
          </span>

          {tagId === 'experimental' && (
            <span className='bg-accent-400 text-black px-2 py-1 rounded-full text-xs'>
              experimental
            </span>
          )}
        </div>

        {/* Description and Link */}
        {tagDescription && (
          <p className='text-gray-300 text-sm mt-2'>{tagDescription}</p>
        )}

        <a
          href={tagLink}
          target='_blank'
          rel='noopener noreferrer'
          className='mt-2'
        >
          <h5 className='text-[#88AFEF] underline'>Learn more</h5>
        </a>
      </div>
    </div>
  );
}
