import { GeneratedFixPage } from "../interfaces/scanInterfaces";

// Sample accessibility fix suggestions for different pages
// export const generatedFixPagesBasic: GeneratedFixPage[] = [
//   {
//     pageId: "index.html",
//     fixResults: [
//       {
//         scannedResult: {
//           pageId: "index.html",
//           scannedResult: {
//             codeBlock: "<img src='image.jpg'>",
//             violation: {
//               id: "v1",
//               impact: "high",
//               tags: ["images", "accessibility"],
//               description: "Image missing alt attribute",
//               help: "Ensure that every image has an alt attribute.",
//               helpUrl: "https://www.w3.org/",
//               nodes: {},
//             },
//           },
//         },
//         newCodeBlock: "<img src='image.jpg' alt='Description of the image'>",
//       },
//       {
//         scannedResult: {
//           pageId: "index.html",
//           scannedResult: {
//             codeBlock: "<button id='btn'>Click Me</button>",
//             violation: {
//               id: "v2",
//               impact: "medium",
//               tags: ["buttons", "focus"],
//               description: "Button has no focus indicator",
//               help: "Ensure that the button has a focus indicator.",
//               helpUrl: "https://www.w3.org/",
//               nodes: {},
//             },
//           },
//         },
//         newCodeBlock:
//           "<button id='btn' style='outline: 2px solid blue;'>Click Me</button>",
//       },
//     ],
//   },
//   {
//     pageId: "about.html",
//     fixResults: [
//       {
//         scannedResult: {
//           pageId: "about.html",
//           scannedResult: {
//             codeBlock: "<h1>About Us</h1>",
//             violation: {
//               id: "v3",
//               impact: "low",
//               tags: ["contrast", "headers"],
//               description: "Heading should have a better contrast",
//               help: "Ensure that headings have a higher contrast ratio.",
//               helpUrl: "https://www.w3.org/",
//               nodes: {},
//             },
//           },
//         },
//         newCodeBlock:
//           "<h1 style='color: #000000; background-color: #ffffff;'>About Us</h1>",
//       },
//     ],
//   },
// ];
