import { ResizablePage } from './Resizable';
import { fileSystemBasic } from '../../mocks/fileSystemMocks';



export function Scan() {
  return (
    <div className='h-screen'>
      <h1>Scan Page</h1>
      <div className='h-full'>
      <ResizablePage fileCollectionData={fileSystemBasic} />
        </div>
    </div>
  );
}