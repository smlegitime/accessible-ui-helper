import {
  FileCollection,
  FileData,
  FileType,
  FixedFileCollection,
  Framework,
  Page,
} from "../../interfaces/scanInterfaces";
import { SandpackFiles } from "@codesandbox/sandpack-react/types";

/**
 * Converts fileCollectionData to SandpackFiles to be used an input in View
 *     component
 * @param fileCollectionData
 * @returns SandpackFiles object containing user code files
 */
export function fileCollectionToSandPackFiles(
  fileCollectionData: FileCollection,
): SandpackFiles {
  const organizedFiles: SandpackFiles = {};
  Object.keys(fileCollectionData).map(
    (filepath) =>
      (organizedFiles[`${filepath}`] = {
        code: fileCollectionData[filepath]["content"],
        readOnly: filepath === "/axe-script.js" ? true : false,
      }),
  );
  return organizedFiles;
}

/**
 * Convert a FixedFileCollection object to a FileCollection object
 * @param fixedFileCollection - a FixedFileCollection object returned from fix call
 * @returns a FileCollection object
 */
export function fixedFileCollectionToFileCollection(
  fixedFileCollection: FixedFileCollection,
): FileCollection {
  const parsedFileCollection: FileCollection = {};
  Object.keys(fixedFileCollection).map(
    (filepath) =>
      (parsedFileCollection[`${filepath}`] = {
        type: fixedFileCollection[filepath].type,
        content: fixedFileCollection[filepath].content,
      }),
  );
  return parsedFileCollection;
}

/**
 * Insert axe-score script into user's HTML.
 * @param htmlContent - html to insert axe-core script into
 * @returns html code with axe-core inserted.
 */
export function insertAxeScriptHTML(htmlContent: string) {
  const bodyEndIndex = htmlContent.indexOf("</body>");
  const newHTML =
    htmlContent.substring(0, bodyEndIndex) +
    `
    <script src="node_modules/axe-core/axe.min.js"></script>
    <script src="axe-script.js"></script>
    ` +
    htmlContent.substring(bodyEndIndex);
  return newHTML;
}

/**
 * Converts pages to FileCollection
 * @param pages - Array of Pages[] that contain users code files
 * @returns FileCollection object that contains pages info
 */
export function pagesToFileCollection(
  pages: Page[],
  accessibilityStandards: string[],
) {
  const initialFileCollection: FileCollection = {};
  if (pages.length === 0) {
    return initialFileCollection;
  }
  switch (pages[0].pageContent.framework) {
    case Framework.Vanilla:
      const entryFile = "index.html";
      pages.map((page) => {
        let pageCode = "";
        // update .html files to run axe-scripts
        if (page.pageContent.fileType === FileType.Html) {
          pageCode = insertAxeScriptHTML(page.pageContent.body.originalVersion);
        } else {
          pageCode = page.pageContent.body.originalVersion;
        }
        const pageInfo: FileData = {
          type: page.pageContent.fileType,
          content: pageCode,
        };
        return (initialFileCollection[
          "/" + page.filePath.substring(page.filePath.indexOf("/") + 1)
        ] = pageInfo);
      });
      //Add axe-script here and file validation
      initialFileCollection["/axe-script.js"] = {
        type: FileType.Js,
        content: `
                import axe from 'axe-core';
                
                // Add highlight function
                function highlightElement(selector, html, active) {
                    console.log('Highlighting element:', { selector, html, active });
                    try {
                        let elements = [];
                        
                        // 1. Try direct selector
                        elements = Array.from(document.querySelectorAll(selector));
                        
                        // 2. If not found and we have html, try to find by content
                        if (elements.length === 0 && html) {
                            const cleanHtml = html.replace(/['"]/g, '');
                            document.querySelectorAll(selector.split('>')[0]).forEach(el => {
                                if (el.outerHTML.replace(/['"]/g, '') === cleanHtml) {
                                    elements.push(el);
                                }
                            });
                        }
                        
                        // 3. If still not found, try basic tag
                        if (elements.length === 0) {
                            elements = Array.from(document.getElementsByTagName(selector));
                        }

                        console.log('Found elements to highlight:', elements);
                        
                        // Add styles if not already present
                        if (!document.getElementById('highlight-styles')) {
                            const style = document.createElement('style');
                            style.id = 'highlight-styles';
                            style.textContent = \`
                                @keyframes pulseOutline {
                                    0% { outline-color: rgba(253, 144, 144, 0.8); }
                                    50% { outline-color: rgba(253, 144, 144, 0.4); }
                                    100% { outline-color: rgba(253, 144, 144, 0.8); }
                                }
                                
                                @keyframes pulseBackground {
                                    0% { background-color: rgba(253, 144, 144, 0.1); }
                                    50% { background-color: rgba(253, 144, 144, 0.05); }
                                    100% { background-color: rgba(253, 144, 144, 0.1); }
                                }
                            \`;
                            document.head.appendChild(style);
                        }
                        
                        elements.forEach(el => {
                            if (active) {
                                // Add smooth transition
                                el.style.transition = 'all 0.3s ease-in-out';
                                
                                // Main highlight effect
                                el.style.outline = '2px solid rgba(253, 144, 144, 0.8)';
                                el.style.outlineOffset = '4px';
                                el.style.boxShadow = '0 0 0 4px rgba(253, 144, 144, 0.2)';
                                
                                // Background effect
                                el.style.backgroundColor = 'rgba(253, 144, 144, 0.1)';
                                
                                // Add animations
                                el.style.animation = 'pulseOutline 2s infinite, pulseBackground 2s infinite';
                                
                                // Scroll into view
                                el.scrollIntoView({ 
                                    behavior: 'smooth', 
                                    block: 'center',
                                    inline: 'center'
                                });
                            } else {
                                // Clear all effects
                                el.style.transition = '';
                                el.style.outline = '';
                                 el.style.outlineOffset = '';
                                el.style.boxShadow = '';
                                el.style.backgroundColor = '';
                                el.style.animation = '';
                            }
                        });
                    } catch (error) {
                        console.error('Error highlighting element:', error);
                    }
                }

                // Message handler
                function handleMessage(event) {
                    console.log('Received message in iframe:', event.data);
                    if (event.data.type === 'highlightViolation') {
                        const { selector, html, active } = event.data;
                        highlightElement(selector, html, active);
                    } else if (event.data.type === 'clearHighlights') {
                        // Clear all highlights
                        document.querySelectorAll('*').forEach(el => {
                            el.style.transition = '';
                            el.style.outline = '';
                            el.style.outlineOffset = '';
                            el.style.boxShadow = '';
                            el.style.backgroundColor = '';
                            el.style.animation = '';
                        });
                    }
                }

                // Initialize highlight system
                function initializeHighlight() {
                    console.log('Initializing highlight system');
                    window.removeEventListener('message', handleMessage);
                    window.addEventListener('message', handleMessage);
                    console.log('Highlight system initialized');
                }

                // Run initialization
                initializeHighlight();
                
                // Run axe check
                axe.run({
                    runOnly: [${accessibilityStandards ? accessibilityStandards.map((standard) => `'${standard}'`).join(",") : "'wcag2aa','best-practice'"}]
                }).then((results) => {
                    console.log('Axe scan results:', results);
                    window.parent.postMessage({ type: 'axeResults', results }, '*')
                });
            `,
      };
      initialFileCollection["/package.json"] = {
        type: FileType.Json,
        content: `{
              "name": "html-css-js",
              "version": "1.0.0",
              "description": "",
              "main": "index.html",
              "scripts": {
                "start": "parcel index.html --open",
                "build": "parcel build index.html"
              },
              "dependencies": {"axe-core": "^4.10.1"},
              "devDependencies": {
                "@babel/core": "7.2.0",
                "parcel-bundler": "^1.6.1",
                "axe-core": "^4.10.1"
              },
              "keywords": []
            }`,
      };
      return initialFileCollection;
    case Framework.Angular:
      return {} as FileCollection;
    case Framework.React:
      return {} as FileCollection;
    case Framework.Vue:
      return {} as FileCollection;
    default:
      return {} as FileCollection;
  }
}
