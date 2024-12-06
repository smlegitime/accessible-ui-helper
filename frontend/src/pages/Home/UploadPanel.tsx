/**
 * Description: Handle User File Uploade
 * Created: Jiecheng(Jason) Chen
 * Created date: Oct 14, 2024 | Updated date: Dec 6, 2024 
 */

import React from 'react';
import { useState, useRef, DragEvent } from 'react';
import { Button } from '../../components/ui/button';
import { PopUpWindow } from './PopUpWindow';

// Enable webkitdirectory
declare module "react" {
  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    webkitdirectory?: string;
  }
}


export function UploadPanel() {
  const [files, setFiles] = useState<File[]>([]);// Array of uploaded files
  const [isDragging, setIsDragging] = useState<boolean>(false); // State for tracking if user is dragging files
  const [uploadedFolderName, setUploadedFolderName] = useState<string>('No Folder');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  // When user upload files, add it to the files array
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const folderName = files.length > 0 ? files[0].webkitRelativePath.split('/')[0] : 'No-Uploaded-Folder';
      setFiles(files);
      setUploadedFolderName(folderName);
    }
  };

  /**
   *  Drag and drop upload
   */
  const getAllFileEntries = async (entry: FileSystemEntry): Promise<File[]> => {
    const files: File[] = [];

    // If the entry is a file
    if (entry.isFile) {
      // Convert FileSystemFileEntry to File object
      const file = await new Promise<File>((resolve) => {
        // Type assertion entry into a FileSystemFileEntry
        (entry as FileSystemFileEntry).file((file) => {
          // Add the full path to the file object
          Object.defineProperty(file, 'webkitRelativePath', {
            value: entry.fullPath.substring(1) // Remove leading slash
          });
          resolve(file);
        });
      });
      files.push(file);
    }
    // If the entry is a directory
    else if (entry.isDirectory) {
      // Create a directory reader
      const dirReader = (entry as FileSystemDirectoryEntry).createReader();
      // Read all entries in the directory
      const entries = await new Promise<FileSystemEntry[]>((resolve) => {
        dirReader.readEntries((entries) => resolve(entries));
      });

      // Recursively process each entry in the directory
      for (const childEntry of entries) {
        const childFiles = await getAllFileEntries(childEntry);
        files.push(...childFiles);
      }
    }

    const folderName = files.length > 0 ? files[0].webkitRelativePath.split('/')[0] : 'No-Uploaded-Folder';
    setUploadedFolderName(folderName);
    return files;
  };

  const handleDrop = async (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    // Convert DataTransferItemList to array
    const items = Array.from(e.dataTransfer.items);
    const filePromises: Promise<File[]>[] = [];

    // Process each dropped item
    for (const item of items) {
      // Get FileSystemEntry for the item
      const entry = item.webkitGetAsEntry();
      if (entry) {
        // Process the entry and add promise to array
        filePromises.push(getAllFileEntries(entry));
      }
    }

    try {
      // Wait for all files to be processed
      const fileArrays = await Promise.all(filePromises);
      // Flatten array of arrays into single array
      const allFiles = fileArrays.flat();
      setFiles(allFiles);

    } catch (error) {
      console.error('Error processing dropped files:', error);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragEnter = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  /**
   * Browse file to upload folder
   */
  const handleBrowseUpload = (): void =>{
    if (inputRef.current){
      inputRef.current.click();
    }
  };


  const handleEnhanceBtnClick = (): void =>{
    setIsVisible(true);
  };

  return (
    <>
      <div id='UploadPanel' 
        className='flex flex-col max-w-[28rem] w-full min-h-80 h-[26rem] 
        rounded-[24px] border-[1px] border-[rgba(228,253,144,0.40)] 
        bg-[rgba(250,_250,_250,_0.01)] [box-shadow:0px_0px_25px_2px_rgba(228,_253,_144,_0.20)]
        backdrop-filter backdrop-blur-[16px]'
      >
        <p className='mx-5 my-3 text-sm'>Upload a folder that has your site’s  
          <span className='text-primary-100 font-bold'> HTML</span>, 
          <span className='text-primary-100 font-bold'> CSS</span>, and 
          <span className='text-primary-100 font-bold'> JS</span> files <br />
          We’ll scan the files and generate fixes accordingly
        </p>
        <div
          id='UploadArea'
          className={`
            flex-1 flex flex-col justify-between items-center 
            rounded-tl-none rounded-br-[24px] rounded-tr-none rounded-bl-[24px] 
            border-[6px] border-dashed border-[#EEFEB6] 
            bg-[rgba(228,_253,_144,_0.1)]
            py-6 px-4
            [transition:all_.2s_ease] 
            ${isDragging ? 'bg-[rgba(228,_253,_144,_0.38)]' : ''}
          `}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className='flex flex-col items-center mt-4'>
            {/* only work for computer browsers, not mobile browsers */}
            <input type='file' webkitdirectory='' multiple className='hidden' onChange={handleFileChange} ref={inputRef}/>
            <svg className='mb-8' xmlns="http://www.w3.org/2000/svg" width="110" height="87" viewBox="0 0 156 124" fill="none">
              <path d="M55.8477 21.517H16.773C14.7356 21.517 12.8727 20.3659 11.9617 18.5433L8.06902 10.7585L11.9617 2.97375C12.8727 1.15111 14.7353 0 16.773 0H55.848C57.8854 0 59.7483 1.15111 60.6593 2.97375L64.5517 10.7585L60.659 18.5433C59.748 20.3659 57.8854 21.517 55.8477 21.517Z" fill="#819833"/>
              <path d="M55.8477 21.517H16.773C14.7356 21.517 12.8727 20.3659 11.9617 18.5433L8.06902 10.7585L11.9617 2.97375C12.8727 1.15111 14.7353 0 16.773 0H55.848C57.8854 0 59.7483 1.15111 60.6593 2.97375L64.5517 10.7585L60.659 18.5433C59.748 20.3659 57.8854 21.517 55.8477 21.517Z" fill="#819833"/>
              <path d="M147.931 5.37927H8.06902C6.58366 5.37927 5.37923 6.5837 5.37923 8.06905V21.5173H150.621V8.06874C150.621 6.58339 149.416 5.37927 147.931 5.37927Z" fill="#EFF2FA"/>
              <path d="M150.621 16.1378H5.37923V21.517H150.621V16.1378Z" fill="#E1E6F2"/>
              <path d="M150.621 10.7585H66.2141C65.1955 10.7585 64.2641 11.3341 63.8086 12.2451L60.6593 18.5433C59.7483 20.3659 57.8851 21.517 55.848 21.517H16.773C14.7356 21.517 12.8727 20.3659 11.9617 18.5433L8.81217 12.2451C8.35666 11.3341 7.42523 10.7585 6.40666 10.7585H5.37926C2.40825 10.7585 0 13.1668 0 16.1378V118.345C0 121.316 2.40825 123.724 5.37926 123.724H150.621C153.592 123.724 156 121.316 156 118.345V16.1378C156 13.1668 153.592 10.7585 150.621 10.7585Z" fill="#B9D657"/>
              <path d="M147.931 118.345H8.06902C6.58366 118.345 5.37923 117.14 5.37923 115.655C5.37923 114.169 6.58366 112.965 8.06902 112.965H147.931C149.416 112.965 150.621 114.169 150.621 115.655C150.621 117.14 149.416 118.345 147.931 118.345Z" fill="#819833"/>
              <path d="M99.5173 51.1034H139.862C141.348 51.1034 142.552 49.899 142.552 48.4136V26.8963C142.552 25.4109 141.348 24.2065 139.862 24.2065H99.5173C98.032 24.2065 96.8275 25.4109 96.8275 26.8963V48.4136C96.8275 49.899 98.032 51.1034 99.5173 51.1034Z" fill="#EFF2FA"/>
              <path d="M134.483 34.9653H104.897C103.411 34.9653 102.207 33.7609 102.207 32.2755C102.207 30.7902 103.411 29.5858 104.897 29.5858H134.483C135.968 29.5858 137.172 30.7902 137.172 32.2755C137.172 33.7612 135.968 34.9653 134.483 34.9653Z" fill="#C7CFE2"/>
              <path d="M134.483 45.7238H104.897C103.411 45.7238 102.207 44.5194 102.207 43.0341C102.207 41.5487 103.411 40.3443 104.897 40.3443H134.483C135.968 40.3443 137.172 41.5487 137.172 43.0341C137.172 44.5197 135.968 45.7238 134.483 45.7238Z" fill="#D7DEED"/>
            </svg>
            <p className='font-bold'>Drop Your Website Folder Here</p>
            <button className='text-primary-100 underline' onClick={handleBrowseUpload} >or browse to upload</button>
          </div>

          <div className='w-full flex justify-between items-center'>
            <output className='flex gap-2 items-center'>
              {
                files.length === 0 ? 
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 26 25" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.50045 0.831787C1.56721 0.831787 0 2.399 0 4.33224V8.99951V10.1663V20.6677C0 22.601 1.56721 24.1681 3.50045 24.1681H22.1695C24.1028 24.1681 25.67 22.601 25.67 20.6677V8.99951C25.67 7.06627 24.1028 5.49906 22.1695 5.49906H14.5852H12.5792L12.0753 3.48325C11.6857 1.92497 10.2856 0.831787 8.67932 0.831787H3.50045ZM2.33364 10.1663V8.99951C2.33364 8.3551 2.85604 7.8327 3.50045 7.8327H12.5792H14.5852H22.1695C22.814 7.8327 23.3364 8.3551 23.3364 8.99951V20.6677C23.3364 21.3121 22.814 21.8345 22.1695 21.8345H3.50045C2.85604 21.8345 2.33364 21.3121 2.33364 20.6677V10.1663ZM3.50045 5.49906H10.1737L9.8113 4.04924C9.68144 3.52982 9.21474 3.16542 8.67932 3.16542H3.50045C2.85604 3.16542 2.33364 3.68783 2.33364 4.33224V5.69825C2.69859 5.56924 3.09132 5.49906 3.50045 5.49906ZM10.1596 10.5081C9.70394 10.0524 8.96515 10.0524 8.50948 10.5081C8.05381 10.9637 8.05381 11.7026 8.50948 12.1582L11.1849 14.8336L8.50948 17.509C8.05381 17.9646 8.05381 18.7035 8.50948 19.1591C8.96515 19.6148 9.70394 19.6148 10.1596 19.1591L12.835 16.4837L15.5104 19.1591C15.966 19.6148 16.7049 19.6148 17.1605 19.1591C17.6162 18.7035 17.6162 17.9646 17.1605 17.509L14.4851 14.8336L17.1605 12.1582C17.6162 11.7026 17.6162 10.9637 17.1605 10.5081C16.7049 10.0524 15.966 10.0524 15.5104 10.5081L12.835 13.1835L10.1596 10.5081Z" fill="#FAFAFA" />
                </svg> :
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 26 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.5 0C1.56701 0 0 1.56701 0 3.5V8.16667V9.33333V19.8333C0 21.7664 1.56701 23.3333 3.5 23.3333H22.1667C24.0997 23.3333 25.6667 21.7664 25.6667 19.8333V8.16667C25.6667 6.23368 24.0997 4.66667 22.1667 4.66667H14.5833H12.5776L12.0737 2.65112C11.6842 1.09304 10.2842 0 8.67819 0H3.5ZM2.33333 9.33333V8.16667C2.33333 7.52234 2.85567 7 3.5 7H12.5776H14.5833H22.1667C22.811 7 23.3333 7.52234 23.3333 8.16667V19.8333C23.3333 20.4777 22.811 21 22.1667 21H3.5C2.85567 21 2.33333 20.4777 2.33333 19.8333V9.33333ZM3.5 4.66667H10.1724L9.81002 3.21704C9.68018 2.69768 9.21354 2.33333 8.67819 2.33333H3.5C2.85567 2.33333 2.33333 2.85567 2.33333 3.5V4.86583C2.69824 4.73684 3.09092 4.66667 3.5 4.66667ZM18.3962 11.2469C18.8088 10.7519 18.7419 10.0162 18.2469 9.60377C17.7519 9.19125 17.0162 9.25813 16.6038 9.7531L11.5883 15.7717L8.99163 13.1751C8.53601 12.7195 7.79732 12.7195 7.3417 13.1751C6.8861 13.6306 6.8861 14.3694 7.3417 14.825L10.8417 18.325C11.0735 18.5568 11.392 18.6803 11.7195 18.6655C12.047 18.6506 12.3531 18.4987 12.5629 18.2469L18.3962 11.2469Z" fill="white"/>
                </svg>
              }
              {uploadedFolderName} · {files.length} files
            </output>

            <Button variant='outline' onClick={handleEnhanceBtnClick} disabled={files.length === 0}
              className='max-h-6 min-w-20 bg-primary-100 rounded-full hover:bg-slate-400 text-black p-4 font-bold'          
            >
              ENHANCE
              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M4.35001 14.5C4.35001 14.2115 4.46458 13.9349 4.66853 13.731C4.87247 13.527 5.14908 13.4125 5.43751 13.4125H20.8626L14.8335 7.67046C14.7257 7.57267 14.6386 7.45425 14.5774 7.32219C14.5162 7.19014 14.4822 7.04715 14.4773 6.90169C14.4724 6.75623 14.4967 6.61127 14.5488 6.47538C14.601 6.3395 14.6798 6.21547 14.7808 6.11063C14.8818 6.00579 15.0027 5.92229 15.1365 5.86506C15.2704 5.80783 15.4143 5.77805 15.5598 5.77747C15.7054 5.7769 15.8496 5.80554 15.9838 5.86171C16.1181 5.91787 16.2397 6.00042 16.3415 6.10446L24.3165 13.717C24.4218 13.8184 24.5055 13.94 24.5627 14.0746C24.6198 14.2091 24.6493 14.3538 24.6493 14.5C24.6493 14.6461 24.6198 14.7908 24.5627 14.9254C24.5055 15.0599 24.4218 15.1815 24.3165 15.283L16.3415 22.8955C16.2397 22.9995 16.1181 23.082 15.9838 23.1382C15.8496 23.1944 15.7054 23.223 15.5598 23.2224C15.4143 23.2219 15.2704 23.1921 15.1365 23.1349C15.0027 23.0776 14.8818 22.9941 14.7808 22.8893C14.6798 22.7844 14.601 22.6604 14.5488 22.5245C14.4967 22.3886 14.4724 22.2437 14.4773 22.0982C14.4822 21.9528 14.5162 21.8098 14.5774 21.6777C14.6386 21.5457 14.7257 21.4272 14.8335 21.3295L20.8626 15.5875H5.43751C5.14908 15.5875 4.87247 15.4729 4.66853 15.2689C4.46458 15.065 4.35001 14.7884 4.35001 14.5Z" fill="black" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
      {isVisible && <PopUpWindow files={files} setIsVisible={setIsVisible}/>}
    </>
  );
}