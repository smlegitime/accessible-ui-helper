import React from 'react';
import { ResizablePage } from './Resizable';
import { fileSystemBasic } from '../../mocks/fileSystemMocks';
export function Scan() {
  return (
    <div>
      <h1>Scan Page</h1>
      <ResizablePage fileCollectionData={fileSystemBasic}/>
    </div>
  );
}