export const inputData = {
  "/index.html": {
    "type": "html",
    "content": "<!DOCTYPE html>\n  <html>\n    <head>\n      <title>Home Page Updated</title>\n      <link rel=\"stylesheet\" href=\"style.css\">\n    </head>\n    <body>\n      <h1>Home Page Updated</h1>\n      <button id=\"btn\">Click Me</button>\n      <a href=\"about.html\">Go to About</a>\n      <script src=\"node_modules/axe-core/axe.min.js\"></script>\n      <script src=\"script.js\"></script>\n      <script src=\"axe-script.js\"></script>\n    </body>\n  </html>",
    "violationInfo": [
      {
        "target": [
          "h1"
        ],
        "targetCode": "<h1>Home Page Updated</h1>",
        "message": "Fix any of the following:\n  Some page content is not contained by landmarks"
      },
      {
        "target": [
          "a"
        ],
        "targetCode": "<a href=\"about.html\">Go to About</a>",
        "message": "Fix any of the following:\n  Some page content is not contained by landmarks"
      }
    ]
  },
  "/about.html": {
    "type": "html",
    "content": "<!DOCTYPE html>\n  <html>\n    <head>\n      <title>About Us</title>\n      <link rel=\"stylesheet\" href=\"about-style.css\">\n    </head>\n    <body>\n      <h1>CHANGED</h1>\n      <p>This is the about page.</p>\n      <a href=\"index.html\">Go to Home</a>\n      <script src=\"node_modules/axe-core/axe.min.js\"></script>\n      <script src=\"about-script.js\"></script>\n      <script src=\"axe-script.js\"></script>\n    </body>\n  </html>",
    "violationInfo": []
  }
}