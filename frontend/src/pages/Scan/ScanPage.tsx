import React, { useState, useEffect, useRef } from 'react';
import {PageScannedResult} from '../../interfaces/scanInterfaces';
import {generatedFixPagesBasic} from '../../mocks/generatedFixPageMocks';
import {fileSystemBasic} from '../../mocks/fileSystemMocks';


// React component for the accessibility scanner interface
const Scan: React.FC = () => {
  const [currentPageId, setCurrentPageId] = useState<string>("index.html");
  const [iframeContent, setIframeContent] = useState<string | null>(null);
  const [selectedViolation, setSelectedViolation] = useState<PageScannedResult | null>(null);
  const [highlightedSelector, setHighlightedSelector] = useState<string | null>(null);
  const [leftPanelWidth, setLeftPanelWidth] = useState(33);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const dragRef = useRef<HTMLDivElement>(null);

   // Effect to load the current page content when the page ID changes
  useEffect(() => {
    loadPageContent(currentPageId);
  }, [currentPageId]);

  // Function to load HTML content from the file system and apply suggested fixes
  const loadPageContent = (pageId: string) => {


    let htmlContent = fileSystemBasic[pageId].content;
    

    // Inject script for navigation and highlighting functionality
    const script = `
      <script>
        document.body.addEventListener('click', function(e) {
          if (e.target.tagName === 'A') {
            e.preventDefault();
            window.parent.postMessage({
              type: 'navigation',
              url: e.target.getAttribute('href')
            }, '*');
          }
        });

        let highlightedElement = null;

        window.addEventListener('message', function(event) {
          if (event.data.action === 'highlight') {
            if (highlightedElement) {
              highlightedElement.style.outline = '';
              highlightedElement.style.backgroundColor = '';
            }
            const element = document.querySelector(event.data.selector);
            if (element) {
              element.style.outline = '2px solid blue';
              element.style.backgroundColor = 'rgba(0, 0, 255, 0.1)';
              highlightedElement = element;
            }
          } 
        });
      </script>
    `;

    htmlContent = htmlContent.replace('</body>', `${script}</body>`);

    setIframeContent(htmlContent);
  };

   // Handle iframe message events for navigation
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'navigation') {
        setCurrentPageId(event.data.url);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

    // Highlight selected accessibility violation in the iframe content
  const highlightViolation = (violation: PageScannedResult) => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      const selector = generateSelector(violation.scannedResult.codeBlock);
      iframeRef.current.contentWindow.postMessage(
        { action: 'highlight', selector: selector },
        '*'
      );
      setHighlightedSelector(selector);
    }
    setSelectedViolation(violation);
  };


  // Generate a CSS selector from the scanned code block for highlighting
  const generateSelector = (codeBlock: string): string => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(codeBlock, 'text/html');
    const element = doc.body.firstElementChild;

    if (element) {
      if (element.id) {
        return `#${element.id}`;
      } else if (element.className) {
        return `.${element.className.split(' ').join('.')}`;
      } else {
        return element.tagName.toLowerCase();
      }
    }
    return '';
  };

  // Handle resizing of the left panel by dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    const newWidth = (e.clientX / window.innerWidth) * 100;
    setLeftPanelWidth(Math.max(20, Math.min(80, newWidth)));
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const currentPageFixResults = generatedFixPagesBasic.find(p => p.pageId === currentPageId)?.fixResults || [];

  return (
    <div className="flex h-screen bg-gray-300 text-gray-800">
         {/* Left panel showing accessibility issues */}
      <div style={{ width: `${leftPanelWidth}%` }} className="h-full flex flex-col bg-gray-900 text-white border-r border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h1 className="text-2xl font-bold">AccUI</h1>
        </div>
        
        <div className="flex-grow overflow-y-auto p-4">
          {currentPageFixResults.map((fix, index) => (
            <div 
              key={index} 
              className={`mb-4 border rounded-md p-4 cursor-pointer hover:bg-gray-800 ${fix.scannedResult === selectedViolation ? 'bg-gray-700' : 'bg-gray-800'} relative`}
              onClick={() => highlightViolation(fix.scannedResult)}
            >
              <div className={`absolute top-2 left-2 w-3 h-3 rounded-full ${fix.scannedResult === selectedViolation ? 'bg-blue-500' : 'bg-gray-500'}`}></div>
              <div className="ml-6">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <span className="mr-2 text-yellow-500">⚠️</span>
                    <span className="font-medium">{fix.scannedResult.scannedResult.violation.description}</span>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs ${fix.scannedResult.scannedResult.violation.impact === 'high' ? 'bg-red-200 text-red-800' : fix.scannedResult.scannedResult.violation.impact === 'medium' ? 'bg-yellow-200 text-yellow-800' : 'bg-blue-200 text-blue-800'}`}>
                    {fix.scannedResult.scannedResult.violation.impact}
                  </span>
                </div>
                {fix.scannedResult === selectedViolation && (
                  <div className="mt-2 bg-gray-700 p-2 rounded">
                    <p className="mb-2">{fix.scannedResult.scannedResult.violation.help}</p>
                    <p className="font-bold">Original Code:</p>
                    <pre className="text-sm bg-gray-600 p-2 rounded"><code>{fix.scannedResult.scannedResult.codeBlock}</code></pre>
                    <p className="font-bold mt-2">Suggested Fix:</p>
                    <pre className="text-sm bg-gray-600 p-2 rounded"><code>{fix.newCodeBlock}</code></pre>
                    <a href={fix.scannedResult.scannedResult.violation.helpUrl} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline mt-2 inline-block">Learn more</a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-4 border-t border-gray-700 flex justify-between items-center">
          <span>{currentPageFixResults.length} issues</span>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">EXPORT</button>
        </div>
      </div>
      {/* Draggable divider */}
      <div
        ref={dragRef}
        className="w-1 bg-gray-700 cursor-col-resize"
        onMouseDown={handleMouseDown}
      />
        {/* Right panel with website view */}
      <div style={{ width: `${100 - leftPanelWidth}%` }} className="flex flex-col bg-gray-300">
        <div className="p-4 border-b border-gray-400 flex justify-between items-center bg-gray-200">
          <h2 className="text-2xl font-bold">Website View: {currentPageId}</h2>
        </div>
        {iframeContent && (
          <iframe
            ref={iframeRef}
            srcDoc={iframeContent}
            className="flex-grow w-full bg-white"
            title="Website Preview"
          />
        )}
      </div>
    </div>
  );
};

export default Scan;