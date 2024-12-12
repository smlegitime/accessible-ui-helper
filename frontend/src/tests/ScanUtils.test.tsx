/**
 * @fileoverview Test file for Scan utility functions
 * @author Stephanie Olaiya
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */

import { FileCollection, FileType, 
  Framework, Page } from '../interfaces/scanInterfaces';
import { fixedFileCollectionToFileCollection, 
  insertAxeScriptHTML, pagesToFileCollection } from '../pages/Scan/utils';

test('axe-script is properly embedded in html', () => {
    const mockHTML = `<!DOCTYPE html>
    <html>
      <head>
        <title>Home Page</title>
        <link rel="stylesheet" href="style.css">
      </head>
      <body>
        <h1>Home Page</h1>
        <button id="btn">Click Me</button>
        <a href="about.html">Go to About</a>
        <script src="script.js"></script>
      </body>
    </html>`
    
    const expectedMock = 
`<!DOCTYPE html>
    <html>
      <head>
        <title>Home Page</title>
        <link rel="stylesheet" href="style.css">
      </head>
      <body>
        <h1>Home Page</h1>
        <button id="btn">Click Me</button>
        <a href="about.html">Go to About</a>
        <script src="script.js"></script>
      
    <script src="node_modules/axe-core/axe.min.js"></script>
    <script src="axe-script.js"></script>
    </body>
    </html>`
expect(insertAxeScriptHTML(mockHTML)).toBe(expectedMock);
});

test("Convert FixedFileCollection to FileCollection", () => {
    const mockFixedFileCollection = {
      "/index.html": {
        type: "html",
        content: `<!DOCTYPE html>
        <html>
          <head>
            <title>Home Page</title>
            <link rel="stylesheet" href="style.css">
          </head>
          <body>
            <h1>Home Page</h1>
            <button id="btn">Click Me</button>
            <a href="about.html">Go to About</a>
            <script src="node_modules/axe-core/axe.min.js"></script>
            <script src="script.js"></script>
            <script src="axe-script.js"></script>
          </body>
        </html>`,
        updatedCodeBlocks: []
      }
    }

    const transformedFileCollection = 
    fixedFileCollectionToFileCollection(mockFixedFileCollection)

    expect(transformedFileCollection["/index.html"].content)
    .toContain("<h1>Home Page</h1>")
    expect(transformedFileCollection["/index.html"])
    .toHaveProperty('type'); 
    expect(transformedFileCollection["/index.html"])
    .toHaveProperty('content'); 
    expect(transformedFileCollection["/index.html"])
    .not.toHaveProperty('updatedCodeBlocks'); 
});

test("test pagesToFileCollection for 0 pages", () => {
  const pages : Page[]= []
  const accessibilityStandards = ["best-practices"]
  expect(pagesToFileCollection(pages, accessibilityStandards))
  .toEqual({} as FileCollection)
})

test("test pagesToFileCollection for mock pages", () => {
  const pages : Page[]= [{
      pageId: "index.html",
      isEntry: true,
      filePath: "test-folder/index.html",
      viewport: {
        width: 200,
        height: 600,
      },
      pageContent: {
        fileType: FileType.Html,
        framework: Framework.Vanilla,
        body: {
          originalVersion: "<h1>Home Page</h1>",
          transpiledVersion: " <h1>Home Page</h1>",
        }
      }
  }]
  const accessibilityStandards = ["best-practices"]
  const returnedFileCollecton = pagesToFileCollection(pages, accessibilityStandards)
  expect(returnedFileCollecton.hasOwnProperty("/axe-script.js")).toBe(true);
  expect(returnedFileCollecton.hasOwnProperty("/package.json")).toBe(true);
  expect(returnedFileCollecton["/axe-script.js"].content)
  .toContain("runOnly: ['best-practices']");
  expect(returnedFileCollecton["/index.html"].content)
  .toContain(`<script src="axe-script.js"></script>`);
  expect(returnedFileCollecton["/package.json"].content)
  .toContain(`"main": "index.html",`);
})

test("test pagesToFileCollection for mock non-html file", () => {
  const pages: Page[] = [{
    pageId: "index.html",
    isEntry: true,
    filePath: "test-folder/index.html",
    viewport: {
      width: 200,
      height: 600,
    },
    pageContent: {
      fileType: FileType.Html,
      framework: Framework.Vanilla,
      body: {
        originalVersion: "<h1>Home Page</h1>",
        transpiledVersion: " <h1>Home Page</h1>",
      }
    }
  }, {
    pageId: "style.css",
    isEntry: false,
    filePath: "test-folder/style.css",
    viewport: {
      width: 200,
      height: 600,
    },
    pageContent: {
      fileType: FileType.Css,
      framework: Framework.Vanilla,
      body: {
        originalVersion: "body { color: #000000}",
        transpiledVersion: "body { color: #000000}",
      }
    }
  }]
  const accessibilityStandards = ["best-practices"]
  const returnedFileCollecton = pagesToFileCollection(pages, accessibilityStandards)
  expect(returnedFileCollecton.hasOwnProperty("/axe-script.js")).toBe(true);
  expect(returnedFileCollecton.hasOwnProperty("/package.json")).toBe(true);
  expect(returnedFileCollecton["/axe-script.js"].content)
  .toContain("runOnly: ['best-practices']");
  expect(returnedFileCollecton["/style.css"].content)
  .not.toContain(`<script src="axe-script.js"></script>`);
  expect(returnedFileCollecton["/package.json"].content)
  .toContain(`"main": "index.html",`);
})
