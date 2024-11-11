## Date: November 10th 
- Scan page updated to new UI design 
- Add export, rescan, select all buttons
- Added theming to tailwind config (colors)
- Collapsible sandbox code editor added
- TODO: Start testing components and updating docs


## Date: October 29th

- Merged Yongcheng's code with new updated to Scan page. 
  - Added fix button that updates code in view
- Accessibility evaluation done on the front end
- Made utils.ts where utils for scan page are eg FileCollection to SandPackFiles
conversion.
- Selection of violation to fix
- Updated UI to match low fidelity UI mock up 

TODO: 
- Helper that adds axe-core to user's files

NOTES: 
- Send violation to backend: filecollection, accviolation[] (rio will filter on the backend). Sending multiple violations at a time. 
- Backend recheck that pages are valid (package.json and axe.script.js are unchanged)
returned from backend: filecollection with fixed code


## Date: October 19th

- Organized interfaces and mockData in frontend
- Using CodeSandBox to render site
- Users have to also input a package.json in the root of their uploaded files 
that describes how they want their files to be rendered.
- Need to figure out how to update SandboxView with updated changes. 

## Date: October 19th
- In order to render static files on code sandbox, need the following as part of the file collection:
  ```
        "package.json": {
            type: "package.json",
            content: `
          {
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
          },
          "axe-script.js": {
            type: 'js',
            content: `
            axe.run().then((results) => {console.log(results);
            window.parent.postMessage({ type: 'axeResults', results }, '*')
            });`
        ```

- Also for each HTML file, add the following script files:
        ```
          <script src="node_modules/axe-core/axe.min.js"></script>
          <script src="axe-script.js"></script>
          ```
  
