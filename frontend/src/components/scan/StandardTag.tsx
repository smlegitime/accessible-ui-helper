export function StandardTag({
    tagName, 
    tagId, 
    tagType, 
    selectedFilters, 
    handleCheckboxChange}: {
        tagName: string, 
        tagId: string, 
        tagType: string, 
        selectedFilters: string[], 
        handleCheckboxChange: (filter: string) => void
    }) {

    return (
        <div className='flex items-center bg-[#3b3b3b] p-4 space-x-4 border border-[#4a4a4a] rounded-md w-[310px]'>
        <input
          type='checkbox'
          id={tagId}
          checked={selectedFilters.includes(tagId)}
          onChange={() => handleCheckboxChange(tagId)}
          className='peer w-5 h-5 rounded-md border-2 border-gray-300 bg-gray-800 checked:bg-primary-100 focus:ring-2 focus:ring-primary-100'
        />
        <div className='flex flex-col'>
          <h3 className='text-white text-left font-bold'>{tagName}</h3>
          <div className='my-1'>
            <span className='bg-primary-100 text-black px-2 py-1 rounded-full text-xs'>
              Accessibility Standard
            </span>
          </div>
          <span className='bg-green-500 text-black px-2 py-1 rounded-full text-xs mt-2'>
            {tagType}
          </span>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <h5 className='text-[#88AFEF] underline'>Learn more</h5>
          </a>
        </div>
      </div>
    )
}