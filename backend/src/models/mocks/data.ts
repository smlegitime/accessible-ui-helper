export const inputData = {
  fileCollection: {
    '/index.html': {
      "type": "html",
      "content": "<!DOCTYPE html>\n  <html>\n    <head>\n      <title>Home Page Updated</title>\n      <link rel=\"stylesheet\" href=\"style.css\">\n    </head>\n    <body>\n      <h1>Home Page Updated</h1>\n      <button id=\"btn\">Click Me</button>\n      <a href=\"about.html\">Go to About</a>\n      <script src=\"node_modules/axe-core/axe.min.js\"></script>\n      <script src=\"script.js\"></script>\n      <script src=\"axe-script.js\"></script>\n    </body>\n  </html>",
      'violationInfo': [
        {
          'target': ['h1'],
          'targetCode': {
            'startIndex': 1,
            'endIndex': 4,
            'content': '<h1>Home Page Updated</h1>'
          },
          'message': 'Some page content is not contained by landmarks'
        }
      ]
    },
    '/about.html': {
      "type": "html",
      "content": "<!DOCTYPE html>\n  <html>\n    <head>\n      <title>About Us</title>\n      <link rel=\"stylesheet\" href=\"about-style.css\">\n    </head>\n    <body>\n      <h1>CHANGED</h1>\n      <p>This is the about page.</p>\n      <a href=\"index.html\">Go to Home</a>\n      <script src=\"node_modules/axe-core/axe.min.js\"></script>\n      <script src=\"about-script.js\"></script>\n      <script src=\"axe-script.js\"></script>\n    </body>\n  </html>",
      'violationInfo': [
        {
          'target': ['a'],
          'targetCode': {
            'startIndex': 1,
            'endIndex': 4,
            'content': '<a href=\"about.html\">Go to About</a>'
          },
          'message': 'Some page content is not contained by landmarks'
        }
      ]
    }
  }
}

const output = {
  "generatedFilesInfo": {
    "originalData": {
      "/index.html": {
        "type": "html",
        "content": "<!DOCTYPE html>\n  <html>\n    <head>\n      <title>Home Page Updated</title>\n      <link rel=\"stylesheet\" href=\"style.css\">\n    </head>\n    <body>\n      <h1>Home Page Updated</h1>\n      <button id=\"btn\">Click Me</button>\n      <a href=\"about.html\">Go to About</a>\n      <script src=\"node_modules/axe-core/axe.min.js\"></script>\n      <script src=\"script.js\"></script>\n      <script src=\"axe-script.js\"></script>\n    </body>\n  </html>"
      },
      "/style.css": {
        "type": "css",
        "content": "body { \n    font-family: Arial; \n  } \n  img { \n    width: 100px; \n  }"
      },
      "/script.js": {
        "type": "js",
        "content": "document.getElementById('btn').addEventListener('click', function() {\n    alert('Updated Button Clicked!');\n  });"
      },
      "/about.html": {
        "type": "html",
        "content": "<!DOCTYPE html>\n  <html>\n    <head>\n      <title>About Us</title>\n      <link rel=\"stylesheet\" href=\"about-style.css\">\n    </head>\n    <body>\n      <h1>CHANGED</h1>\n      <p>This is the about page.</p>\n      <a href=\"index.html\">Go to Home</a>\n      <script src=\"node_modules/axe-core/axe.min.js\"></script>\n      <script src=\"about-script.js\"></script>\n      <script src=\"axe-script.js\"></script>\n    </body>\n  </html>"
      },
      "/about-style.css": {
        "type": "css",
        "content": "h1 { \n    color: yellow; \n  }"
      },
      "/about-script.js": {
        "type": "js",
        "content": "console.log('About page loaded lglg');"
      },
      "/axe-script.js": {
        "type": "js",
        "content": "\n      console.log(1);\n    import axe from 'axe-core';\n      \n    axe.run().then((results) =>\n      window.parent.postMessage({ type: 'axeResults', results }, '*')\n      );\n    "
      },
      "/package.json": {
        "type": "json",
        "content": "{\n    \"name\": \"html-css-js\",\n    \"version\": \"1.0.0\",\n    \"description\": \"\",\n    \"main\": \"index.html\",\n    \"scripts\": {\n      \"start\": \"parcel index.html --open\",\n      \"build\": \"parcel build index.html\"\n    },\n    \"dependencies\": {\"axe-core\": \"^4.10.1\"},\n    \"devDependencies\": {\n      \"@babel/core\": \"7.2.0\",\n      \"parcel-bundler\": \"^1.6.1\",\n      \"axe-core\": \"^4.10.1\"\n  \n    },\n    \"keywords\": []\n  }"
      },
      "/about_img.jpg": {
        "type": "img",
        "content": ""
      }
    },
    "generatedCode": {
        "/index.html": {
          "type": "html",
          "content": "<!DOCTYPE html>\n  <html>\n    <head>\n      <title>Home Page Updated Generated</title>\n      <link rel=\"stylesheet\" href=\"about-style.css\">\n    </head>\n    <body>\n      <h1>CHANGED</h1>\n      <p>This is the about page.</p>\n      <a href=\"index.html\">Go to Home</a>\n      <script src=\"node_modules/axe-core/axe.min.js\"></script>\n      <script src=\"script.js\"></script>\n      <script src=\"axe-script.js\"></script>\n    </body>\n  </html>",
          "updatedCodeBlocks": [
            {
              // 'startIndex': 1,
              // 'endIndex': 4,
              'codeSnippet': "<title>Home Page Updated Generated</title>"
            }
          ]
        },
        "/about.html": {
          "type": "html",
          "content": "<!DOCTYPE html>\n  <html>\n    <head>\n      <title>About Page Updated Generated</title>\n      <link rel=\"stylesheet\" href=\"about-style.css\">\n    </head>\n    <body>\n      <h1>CHANGED</h1>\n      <p>This is the about page.</p>\n      <a href=\"index.html\">Go to Home</a>\n      <script src=\"node_modules/axe-core/axe.min.js\"></script>\n      <script src=\"script.js\"></script>\n      <script src=\"axe-script.js\"></script>\n    </body>\n  </html>",
          "updatedCodeBlocks": [
            {
              // 'startIndex': 1,
              // 'endIndex': 4,
              'codeSnippet': "<title>About Page Updated Generated</title>"
            }
          ]
        },
      }
  }
}