/**
 * Description: Handle User File Uploade
 * Created: Jiecheng(Jason) Chen
 * Created date: Oct 14, 2024 | Updated date: Oct 26, 2024 
 */

import React from 'react';
import { useState, DragEvent } from 'react';
import { Button } from '../../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { FileType, Framework, Page } from '../../interfaces/scanInterfaces';

// Enable webkitdirectory
declare module "react" {
  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    webkitdirectory?: string;
  }
}


export function UploadPanel() {
  // Array of uploaded files
  const [files, setFiles] = useState<File[]>([]);
  // State for tracking if user is dragging files
  const [isDragging, setIsDragging] = useState(false);
  const navigate = useNavigate();

  // When user upload files, add it to the files array
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
      console.log(files);
    }
  };

  // When user click the enhance button
  // Convert all files into Pages
  // Send Pages to scan and navigate to it
  const handleSubmit = async (): Promise<void> => {
    const pages: Page[] = await convertFilesToPages();
    navigate('/scan', { state: { pages } });
  };

  // Helper function to convert all uploaded files into Page objects
  const convertFilesToPages = async (): Promise<Page[]> => {
    // Get pages from files
    const pages = await Promise.all(files.map(async (file) => {
      const fileType: FileType = getFileType(file.type);
      let fileContent: string = '';
      try {
        if (fileType === FileType.Other) {
          fileContent = await toBase64(file);
        } else {
          fileContent = await file.text();
        }
      } catch (error) {
        console.error('Error getting file content:', error);
      }

      return {
        pageId: `${file.name} ID`, //TODO: use UUID or other id generator
        filePath: file.webkitRelativePath,
        viewport: {
          width: 1920,
          height: 1080
        },
        pageContent: {
          fileType: fileType,
          framework: Framework.Vanilla, // Default to 'Vanilla'
          body: {
            originalVersion: fileContent,
            transpiledVersion: fileContent
          }
        }
      }
    }));

    return pages;
  };

  // Helper function to get file type from file extension
  const getFileType = (fileType: string): FileType => {
    switch (fileType) {
      case 'text/html':
        return FileType.Html;
      case 'text/css':
        return FileType.Css;
      case 'text/javascript':
        return FileType.Js;
      case 'application/json':
        return FileType.Json;
      default:
        return FileType.Other;
    }
  };

  // Helper function to convert files into Base64 string
  const toBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  }




  /**
   *  Drag and drop upload
   */
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

      // Example of accessing paths
      allFiles.forEach(file => {
        console.log('File path:', file.webkitRelativePath);
      });
    } catch (error) {
      console.error('Error processing dropped files:', error);
    }
  };


  return (
    <div id='UploadPanel' className='flex flex-col max-w-md min-h-60 h-[23rem] bg-gray-400'>
      <p className='mx-5 my-3 text-sm'>Upload a folder with your site’s HTML, CSS, and JS files <br />
        We’ll scan the files and generate fixes accordingly</p>
      <div
        id='UploadArea'
        className={
          `flex-1 flex flex-col justify-between items-start bg-gray-300 p-3 h-[calc(100% - 1.5rem)] 
          ${isDragging ? 'bg-blue-50' : ''}
        `}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div>
          <p>Drop Your Website Folder Here</p>
          {/* only work for computer browsers, not mobile browsers */}
          <input type='file' webkitdirectory="" multiple className='block' onChange={handleFileChange} />
        </div>

        <div className='w-full flex justify-between items-center'>
          <output className='flex gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 26 25" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M3.50045 0.831787C1.56721 0.831787 0 2.399 0 4.33224V8.99951V10.1663V20.6677C0 22.601 1.56721 24.1681 3.50045 24.1681H22.1695C24.1028 24.1681 25.67 22.601 25.67 20.6677V8.99951C25.67 7.06627 24.1028 5.49906 22.1695 5.49906H14.5852H12.5792L12.0753 3.48325C11.6857 1.92497 10.2856 0.831787 8.67932 0.831787H3.50045ZM2.33364 10.1663V8.99951C2.33364 8.3551 2.85604 7.8327 3.50045 7.8327H12.5792H14.5852H22.1695C22.814 7.8327 23.3364 8.3551 23.3364 8.99951V20.6677C23.3364 21.3121 22.814 21.8345 22.1695 21.8345H3.50045C2.85604 21.8345 2.33364 21.3121 2.33364 20.6677V10.1663ZM3.50045 5.49906H10.1737L9.8113 4.04924C9.68144 3.52982 9.21474 3.16542 8.67932 3.16542H3.50045C2.85604 3.16542 2.33364 3.68783 2.33364 4.33224V5.69825C2.69859 5.56924 3.09132 5.49906 3.50045 5.49906ZM10.1596 10.5081C9.70394 10.0524 8.96515 10.0524 8.50948 10.5081C8.05381 10.9637 8.05381 11.7026 8.50948 12.1582L11.1849 14.8336L8.50948 17.509C8.05381 17.9646 8.05381 18.7035 8.50948 19.1591C8.96515 19.6148 9.70394 19.6148 10.1596 19.1591L12.835 16.4837L15.5104 19.1591C15.966 19.6148 16.7049 19.6148 17.1605 19.1591C17.6162 18.7035 17.6162 17.9646 17.1605 17.509L14.4851 14.8336L17.1605 12.1582C17.6162 11.7026 17.6162 10.9637 17.1605 10.5081C16.7049 10.0524 15.966 10.0524 15.5104 10.5081L12.835 13.1835L10.1596 10.5081Z" fill="#FAFAFA" />
            </svg>
            No-Uploaded-Folder
          </output>

          <Button variant='outline' onClick={handleSubmit} disabled={files.length === 0}>
            Enhance
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M4.35001 14.5C4.35001 14.2115 4.46458 13.9349 4.66853 13.731C4.87247 13.527 5.14908 13.4125 5.43751 13.4125H20.8626L14.8335 7.67046C14.7257 7.57267 14.6386 7.45425 14.5774 7.32219C14.5162 7.19014 14.4822 7.04715 14.4773 6.90169C14.4724 6.75623 14.4967 6.61127 14.5488 6.47538C14.601 6.3395 14.6798 6.21547 14.7808 6.11063C14.8818 6.00579 15.0027 5.92229 15.1365 5.86506C15.2704 5.80783 15.4143 5.77805 15.5598 5.77747C15.7054 5.7769 15.8496 5.80554 15.9838 5.86171C16.1181 5.91787 16.2397 6.00042 16.3415 6.10446L24.3165 13.717C24.4218 13.8184 24.5055 13.94 24.5627 14.0746C24.6198 14.2091 24.6493 14.3538 24.6493 14.5C24.6493 14.6461 24.6198 14.7908 24.5627 14.9254C24.5055 15.0599 24.4218 15.1815 24.3165 15.283L16.3415 22.8955C16.2397 22.9995 16.1181 23.082 15.9838 23.1382C15.8496 23.1944 15.7054 23.223 15.5598 23.2224C15.4143 23.2219 15.2704 23.1921 15.1365 23.1349C15.0027 23.0776 14.8818 22.9941 14.7808 22.8893C14.6798 22.7844 14.601 22.6604 14.5488 22.5245C14.4967 22.3886 14.4724 22.2437 14.4773 22.0982C14.4822 21.9528 14.5162 21.8098 14.5774 21.6777C14.6386 21.5457 14.7257 21.4272 14.8335 21.3295L20.8626 15.5875H5.43751C5.14908 15.5875 4.87247 15.4729 4.66853 15.2689C4.46458 15.065 4.35001 14.7884 4.35001 14.5Z" fill="black" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}