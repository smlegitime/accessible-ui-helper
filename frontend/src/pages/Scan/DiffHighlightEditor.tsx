/**
 * @fileoverview Sandpack Code Editor that shows code changes
 * @author Yongcheng Shi
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */

import React, { useEffect } from 'react';
import { SandpackCodeEditor } from '@codesandbox/sandpack-react';
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

/**
 * Noramlize code content by replacing some values with string equivalents
 * @param content - content to be normalized
 * @returns normalized content 
 */
export function normalizeContent(content: string): string {
    return content
        .replace(/\s+/g, ' ') 
        .replace(/\s*;\s*/g, ';')  
        .replace(/\s*{\s*/g, '{')  
        .replace(/\s*}\s*/g, '}')  
        .replace(/\s*:\s*/g, ':') 
        .trim();  
}

/**
 * Compute the code changes line by line between two string contents
 * @param oldContent - string containing old content of code file
 * @param newContent - string containing old content of code file
 * @returns list of boolean showing which lines have been changed
 */
function computeLineDiffs(oldContent: string, newContent: string): boolean[] {
    const oldLines = oldContent.split('\n');
    const newLines = newContent.split('\n');
    const diffs: boolean[] = [];

    // Check each new line for real changes
    newLines.forEach((newLine, index) => {
        // If empty line, mark as unchanged
        if (!newLine.trim()) {
            diffs.push(false);
            return;
        }

        // Look for matching original line
        const normalizedNewLine = normalizeContent(newLine);
        const foundMatch = oldLines.some(oldLine => 
            normalizeContent(oldLine) === normalizedNewLine
        );

        // If no exact match found, mark as changed
        diffs.push(!foundMatch);
    });

    return diffs;
}

/**
 * Code Editor component with code highlight feature
 */
export function DiffHighlightEditor({
    files,
    originalFiles,
    ...props
}: DiffHighlightEditorProps) {
    useEffect(() => {
        if (!originalFiles) return;

        const addHighlights = () => {
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

            // Clear existing highlights
            codeLines.forEach(line => {
                line.classList.remove('diff-changed');
            });

            // Get current file paths
            const currentFilePaths = Object.keys(files);
            
            currentFilePaths.forEach(filepath => {
                const newContent = files[filepath].content;
                const oldContent = originalFiles[filepath]?.content || '';

                // If content is same, skip processing
                if (normalizeContent(newContent) === normalizeContent(oldContent)) {
                    return;
                }

                // Calculate differences
                const diffs = computeLineDiffs(oldContent, newContent);

                // Apply highlights
                diffs.forEach((hasChanged, index) => {
                    if (index < codeLines.length && hasChanged) {
                        const lineContent = codeLines[index].textContent?.trim();
                        if (lineContent) {
                            codeLines[index].classList.add('diff-changed');
                        }
                    }
                });
            });
        };

        // Initial highlight application
        addHighlights();

        // Watch for changes
        const observer = new MutationObserver(() => {
            setTimeout(addHighlights, 100);
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
            <SandpackCodeEditor {...props} />
    );
}