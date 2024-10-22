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
  
