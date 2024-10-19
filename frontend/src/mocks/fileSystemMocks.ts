import { FileCollection } from "../interfaces/scanInterfaces";

// Sample file system object representing static HTML, CSS, and JS files
export const fileSystemBasic: FileCollection = {
  "index.html": {
    type: "html",
    content: `<html>
        <head>
          <link rel="stylesheet" href="style.css">
        </head>
        <body>
          <h1>Home Page</h1>
          <img src="image.jpg">
          <button id="btn">Click Me</button>
          <button id="go-to-about">Go to About</button>
          <div id="count"></div>
          <a href="/about.html">Go to About</a>
          <script src="script.js"></script>
          <script src="index.js"></script>
        </body>
      </html>`,
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
        </body>
      </html>`,
  },
  "about-style.css": {
    type: "css",
    content: `h1 { color: red; }`,
  },
  "about-script.js": {
    type: "js",
    content: `console.log('About page loaded');`,
  },
  "index.js": {
    type: "js",
    content: `console.log(require('uuid'));`,
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
