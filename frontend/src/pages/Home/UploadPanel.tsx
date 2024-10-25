import React from 'react';
import { useState } from 'react';
import { Button } from "../../components/ui/button";
import { useNavigate } from 'react-router-dom';

// what about other types of files like png, mp4
enum FileType {
  Html = 'Html',
  Css = 'Css',
  Js = 'Js'
}
enum Framework {
  VanillaProject = 'VanillaProject', 
  React = 'React',
  Angular = 'Angular',
  Vue = 'Vue'
}

interface Page {
  readonly pageId: string;
  filePath: string; // full/file/path/file.extension
  viewport: {
    width: number,
    height: number
  };
  pageContent: {
    fileType: FileType;
    framework: string | Framework;
    body: {
      originalVersion: string; // original code
      transpiledVersion: string; // code converted into vanilla version
    }
  };
}


export function UploadPanel() {
  // Array of uploaded files
  const [files, setFiles] = useState<File[]>([]);
  const navigate = useNavigate();

  // When user upload files, add it to the files array
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    if (e.target.files) {
      // TODO: change Array.from() to push
      setFiles(Array.from(e.target.files));
    }
  };

  // When user click the enhance button
  // Convert all files into Pages
  // Send Pages to scan and navigate to it
  const handleSubmit = async (): Promise<void> => {
    const pages = await convertFilesToPages();
    //console.log(files[0].type);
    console.log(pages);
    navigate('/output', { state: { pages } });
  };

  // Convert all uploaded files into interface Pages 
  const convertFilesToPages = async (): Promise<Page[]> => {
    // Get pages from files
    const pages = await Promise.all(files.map(async (file) => {
      // TODO: add type type
      const fileContent = await file.text();
      return {
        pageId: `${file.name} ID`, //TODO: use UUID or other id generator
        filePath: "default/path/to/file.name", ////// Question: File structure, EX: style/css
        viewport: {
          width: 1920, // Example width
          height: 1080 // Example height
        },
        pageContent: {
          fileType: getFileType(file.type), 
          framework: Framework.VanillaProject, // Default to 'Vanilla'
          body: {
            originalVersion: fileContent,
            transpiledVersion: fileContent
          }
        }
      }
    }));
    return pages;
  };

  // Function to get file type from file extension
  const getFileType = (fileType: string): FileType => {
    switch (fileType) {
      case 'text/html':
        return FileType.Html;
      case 'text/css':
        return FileType.Css;
      case 'text/javascript':
        return FileType.Js;
      default:
        throw new Error('Unsupported file type');
    }
  };

  return (
    <div id='UploadPanel' className='max-w-xl min-h-96 h-[25rem] '>
      <p>Upload Your Website’s HTML, CSS and JS Files Here, Or a Zip File that Contains All the Source Code of Your Website</p>
      <div id='UploadArea' className='flex flex-col justify-between items-start bg-gray-300 h-full'>
        <div>
          <Button variant="outline"> + Choose File </Button>
          <p>or drop your files here</p>
          <input type='file' multiple className='block' onChange={handleFileChange}/>
        </div>        
        <button className='btn flex'>
            
        </button>
        <Button variant='outline' onClick={handleSubmit}>
          Enhance
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.35001 14.5C4.35001 14.2115 4.46458 13.9349 4.66853 13.731C4.87247 13.527 5.14908 13.4125 5.43751 13.4125H20.8626L14.8335 7.67046C14.7257 7.57267 14.6386 7.45425 14.5774 7.32219C14.5162 7.19014 14.4822 7.04715 14.4773 6.90169C14.4724 6.75623 14.4967 6.61127 14.5488 6.47538C14.601 6.3395 14.6798 6.21547 14.7808 6.11063C14.8818 6.00579 15.0027 5.92229 15.1365 5.86506C15.2704 5.80783 15.4143 5.77805 15.5598 5.77747C15.7054 5.7769 15.8496 5.80554 15.9838 5.86171C16.1181 5.91787 16.2397 6.00042 16.3415 6.10446L24.3165 13.717C24.4218 13.8184 24.5055 13.94 24.5627 14.0746C24.6198 14.2091 24.6493 14.3538 24.6493 14.5C24.6493 14.6461 24.6198 14.7908 24.5627 14.9254C24.5055 15.0599 24.4218 15.1815 24.3165 15.283L16.3415 22.8955C16.2397 22.9995 16.1181 23.082 15.9838 23.1382C15.8496 23.1944 15.7054 23.223 15.5598 23.2224C15.4143 23.2219 15.2704 23.1921 15.1365 23.1349C15.0027 23.0776 14.8818 22.9941 14.7808 22.8893C14.6798 22.7844 14.601 22.6604 14.5488 22.5245C14.4967 22.3886 14.4724 22.2437 14.4773 22.0982C14.4822 21.9528 14.5162 21.8098 14.5774 21.6777C14.6386 21.5457 14.7257 21.4272 14.8335 21.3295L20.8626 15.5875H5.43751C5.14908 15.5875 4.87247 15.4729 4.66853 15.2689C4.46458 15.065 4.35001 14.7884 4.35001 14.5Z" fill="black"/>
          </svg>
        </Button>
      </div>
    </div>
  );
}