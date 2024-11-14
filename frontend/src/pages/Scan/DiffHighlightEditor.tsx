import React, { useEffect } from 'react';
import { SandpackCodeEditor } from '@codesandbox/sandpack-react';
import DiffMatchPatch from 'diff-match-patch';
import { FileCollection } from '@/src/interfaces/scanInterfaces';

interface DiffHighlightEditorProps {
    files: FileCollection;
    originalFiles: FileCollection | null;
    showLineNumbers?: boolean;
    showInlineErrors?: boolean;
    style?: React.CSSProperties;
    closableTabs?: boolean;
    showTabs?: boolean;
}

export function DiffHighlightEditor({
    files,
    originalFiles,
    ...props
}: DiffHighlightEditorProps) {
    useEffect(() => {
        if (!originalFiles) return;

        const addHighlights = () => {
            // Debug log
            // console.log('Current files:', files);
            // console.log('Original files:', originalFiles);

            const editor = document.querySelector('.sp-code-editor');
            if (!editor) {
                requestAnimationFrame(addHighlights);
                return;
            }

            const codeLines = editor.querySelectorAll('.cm-line');
            if (!codeLines.length) {
                requestAnimationFrame(addHighlights);
                return;
            }

            // Clear old highlights
            codeLines.forEach(line => {
                line.classList.remove( 'diff-removed','diff-added');
            });

            const dmp = new DiffMatchPatch();

            // Get the active file
            const currentFilePaths = Object.keys(files);
            
            currentFilePaths.forEach(filepath => {
                // console.log('Processing file:', filepath);

                const newContent = files[filepath].content;
                const oldContent = originalFiles[filepath]?.content || '';

                // console.log('New content:', newContent);
                // console.log('Old content:', oldContent);

                // Perform the overall diff comparison
                const diff = dmp.diff_main(oldContent, newContent);
                dmp.diff_cleanupSemantic(diff);

                let lineNum = 0;
                let currentLine = 0;

                diff.forEach(([type, text]) => {
                    const textLines = text.split('\n');
                    
                    textLines.forEach((line, i) => {
                        // Ensure we do not exceed the available line count
                        if (currentLine < codeLines.length) {
                            if (type !== 0) { // 0 indicates no change
                                // console.log(`Highlighting line ${currentLine} as ${type === 1 ? 'added' : 'removed'}`);
                                codeLines[currentLine].classList.add(
                                    type === 1 ? 'diff-removed' : 'diff-added'  
                                );
                            }
                            currentLine++;
                        }
                    });

                    lineNum += textLines.length - 1;
                });
            });
        };

        // Initially add highlights
        addHighlights();

        // Listen for file changes
        const observer = new MutationObserver(() => {
            setTimeout(addHighlights, 100); // Add delay to ensure DOM update completion
        });

        const editor = document.querySelector('.sp-code-editor');
        if (editor) {
            observer.observe(editor, {
                childList: true,
                subtree: true,
                characterData: true,
                attributes: true
            });
        }

        return () => {
            observer.disconnect();
        };
    }, [files, originalFiles]);

    return (
        <div className="relative">
            <SandpackCodeEditor {...props} />
            <style>{`
                .cm-line.diff-removed{
                    background-color: rgba(255, 0, 0, 0.1) !important;
                    border-left: 2px solid #f44336 !important;
                }
                
                .cm-line.diff-added{
                    background-color: rgba(0, 255, 0, 0.1) !important;
                    border-left: 2px solid #4caf50 !important;
                }
            `}</style>
        </div>
    );
}
