import { FileCollection } from "../interfaces/scanInterfaces";

// Sample file system object representing static HTML, CSS, and JS files
export const fileSystemBasic: FileCollection = {
  "index.html": {
    type: "html",
      content: `
      <!DOCTYPE html>
       <html lang="en">
       <head>
           <meta charset="UTF-8">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <link rel="stylesheet" href="styles.css">
           <title>My Sandpack App</title>
       </head>
       <body>
         <h1>Hello, Sandpack!</h1>
           <div id="app"></div>
                      <button id="btn">Click Me</button>
           <div id="count"></div>
           <a href="about.html">Go to About</a>
           <script src="node_modules/axe-core/axe.min.js"></script>
           <script src="axe-script.js"></script>
           <script src="script.js"></script>
       </body>
       </html>`
  },
  "style.css": {
    type: "css",
    content: `body { font-family: Arial; } img { width: 100px; }`,
  },
  "script.js": {
    type: "js",
    content: `document.getElementById('btn').addEventListener('click', function() {
        alert('Button clicked!');
        });`,
  },
  "about.html": {
    type: "html",
    content: `<html>
        <head><link rel="stylesheet" href="about-style.css"></head>
        <body>
          <h1>About Us</h1>
          <p>This is the about page.</p>
          <a href="index.html">Go to Home</a>
          <script src="about-script.js"></script>
          <script src="node_modules/axe-core/axe.min.js"></script>
          <script src="axe-script.js"></script>
        </body>
      </html>`,
  },
  "about-style.css": {
    type: "css",
    content: `h1 { color: yellow; }`,
  },
  "about-script.js": {
    type: "js",
    content: `console.log('About page loaded');`,
  },
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
    type: "js",
    content: 
    `
    import axe from 'axe-core';
    
    axe.run().then((results) =>
    window.parent.postMessage({ type: 'axeResults', results }, '*')
    );
`,
  },
};

export const codeSandBoxSetUpInitial = {
  files: {
    // We infer dependencies and the entry point from package.json
    "/package.json": {
      code: JSON.stringify({
        main: "index.js",
        dependencies: { uuid: "latest" },
      }),
    },

    "/index.html": {
      code: `<html>
<head><link rel="stylesheet" href="style.css"></head>
<body>
<h1>Home Page</h1>
<img src="image.jpg">
<button id="btn">Click Me</button>
<a href="about.html">Go to About</a>
<script src="script.js"></script>
</body>
</html>`,
    },
    // Main file
    "/index.js": { code: `console.log(require('uuid'));` },
  },
  // environment: "vanilla"
};


export const initialFileCollectionData : FileCollection = {
  "/index.html": {
    type: 'html',
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
    </html>`
  },
  "/style.css": {
    type: 'css',
    content: `body { 
  font-family: Arial; 
} 
img { 
  width: 100px; 
}`
  },
  "/script.js": {
    type: 'js',
    content: `document.getElementById('btn').addEventListener('click', function() {
  alert('Button clicked!');
});`
  },
  "/about.html": {
    type: 'html',
    content: `<!DOCTYPE html>
    <html>
      <head>
        <title>About Us</title>
        <link rel="stylesheet" href="about-style.css">
      </head>
      <body>
        <h1>About Us</h1>
        <p>This is the about page.</p>
        <a href="index.html">Go to Home</a>
      <script src="node_modules/axe-core/axe.min.js"></script>
      <script src="about-script.js"></script>
      <script src="axe-script.js"></script>
      </body>
    </html>`
  },
  "/about-style.css": {
    type: 'css',
    content: `h1 { 
  color: red; 
}`
  },
  "/about-script.js": {
    type: 'js',
    content: `console.log('About page loaded');`
  },
  "/axe-script.js": {
    type: 'js',
    content : `
    import axe from 'axe-core';
      
    axe.run().then((results) =>
      window.parent.postMessage({ type: 'axeResults', results }, '*')
      );
  `
  },
  "/package.json": {
    type: 'json',
    content: JSON.stringify({
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
})
  }
};



export const initialFiles = {
  "/index.html": {
    code: `<!DOCTYPE html>
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
    </html>`
  },
  "/style.css": {
    code: `body { 
  font-family: Arial; 
} 
img { 
  width: 100px; 
}`
  },
  "/script.js": {
    code: `document.getElementById('btn').addEventListener('click', function() {
  alert('Button clicked!');
});`
  },
  "/about.html": {
    code: `<!DOCTYPE html>
    <html>
      <head>
        <title>About Us</title>
        <link rel="stylesheet" href="about-style.css">
      </head>
      <body>
        <h1>About Us</h1>
        <p>This is the about page.</p>
        <a href="index.html">Go to Home</a>
      <script src="node_modules/axe-core/axe.min.js"></script>
      <script src="about-script.js"></script>
      <script src="axe-script.js"></script>
      </body>
    </html>`
  },
  "/about-style.css": {
    code: `h1 { 
  color: red; 
}`
  },
  "/about-script.js": {
    code: `console.log('About page loaded');`
  },
  "/axe-script.js": {
    code : `
    import axe from 'axe-core';
      
    axe.run().then((results) =>
      window.parent.postMessage({ type: 'axeResults', results }, '*')
      );
  `
  },
  "/package.json": {
    code: `{
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
    "parcel-bundler": "^1.6.1"
    "axe-core": "^4.10.1"
  },
  "keywords": []
}`
  }
};


export const updatedFiles = {
  "/index.html": {
    type: 'html',
    content: `<!DOCTYPE html>
<html>
  <head>
    <title>Home Page Updated</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Home Page Updated</h1>
    <button id="btn">Click Me</button>
    <a href="about.html">Go to About</a>
    <script src="node_modules/axe-core/axe.min.js"></script>
    <script src="script.js"></script>
    <script src="axe-script.js"></script>
  </body>
</html>`
  },
  "/style.css": {
    type: 'css',
    content: `body { 
  font-family: Arial; 
} 
img { 
  width: 100px; 
}`
  },
  "/script.js": {
    type: 'js', 
    content: `document.getElementById('btn').addEventListener('click', function() {
  alert('Updated Button Clicked!');
});`
  },
  "/about.html": {
    type: 'html',
    content: `<!DOCTYPE html>
<html>
  <head>
    <title>About Us</title>
    <link rel="stylesheet" href="about-style.css">
  </head>
  <body>
    <h1>CHANGED</h1>
    <p>This is the about page.</p>
    <a href="index.html">Go to Home</a>
    <script src="node_modules/axe-core/axe.min.js"></script>
    <script src="about-script.js"></script>
    <script src="axe-script.js"></script>
  </body>
</html>`
  },
  "/about-style.css": {
    type: 'css',
    content: `h1 { 
  color: yellow; 
}`
  },
  "/about-script.js": {
    type: 'js',
    content: `console.log('About page loaded lglg');`
  },
  "/axe-script.js": {
    type: 'js',
    content : `
    console.log(1);
  import axe from 'axe-core';
    
  axe.run().then((results) =>
    window.parent.postMessage({ type: 'axeResults', results }, '*')
    );
  `
  },
  "/package.json": {
    type: 'json',
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
}`
  }
};