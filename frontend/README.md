# `accessible-ui-helper/backend`
Folder containing the frontend code for the  - [CSCI2340](https://sites.google.com/brown.edu/csci2340/home) Software Engineering Course. The frontend is built using [ReactTS](https://react.dev/learn/typescript), and is written in [TypeScript](https://www.typescriptlang.org/).

## 🗂️ Folder structure
```
.             
├── src                     # Source files
|   ├── archive/                 # Old unused code
│   ├── components/              # Global UI components (not specific to a page)
|       ├── scan/                # General UI components used on scan page
|       ├── ui/                  # imported shadCN UI components
│   ├── interfaces/              # interfaces used on frontend
│   ├── lib/                     # Contains utilities
│   ├── mocks/                   # Mock data used in testing
│   ├── pages/                  # Components for webapp pages
|       ├── Home/               # Home page component and related subcomponents
|       ├── Scan/               # Scan page component and related subcomponents
│   ├── styles/                  # CSS style sheets
│   ├── tests/                  # Contains Jest tests
│   ├── App.tsx                  # Main component of application
│   ├── App.test.tsx              # Jest test for App component
│   ├── App.css                   # CSS style sheet for App component
│   ├── index.tsx                 # Entry point of your app
│   ├── index.css                 # CSS Style sheet for index.tsx
├── .gitignore
├── Dockerfile  
├── components.json         # Json schema for shadcn 
├── package-lock.json             
├── package.json
├── README.md
├── tailwind.config.js
├── tsconfig.json
└── ...                     # Transpiler, linter config files
```

## ✅ Pre-requisites
- Node.js (`v16` and up)

## 🛠️ Installation

Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install the `accessible-ui-helper` frontend dependencies.

```bash
cd accessible-ui-helper/frontend

npm install
```

To start the local server, or run the test suite, choose one of the following options:
```bash
npm start #(prod environment)

npm test #(run Jest test suite)
```

## 💻 Usage

The server will be running on `localhost:3000`. The main pages are / for the
homepage and /scan for the scan page.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run lint`

ESLint statically analyzes your code to quickly find issues. You can use ESLint to create a series of assertions (called lint rules) that define how your code should look or behave. ESLint also has auto-fixer suggestions to help you improve your code. Finally, you can use ESLint to load in lint rules from shared plugins.

### `npm run format`

Prettier is a well-known code formatter that supports a variety of different programming languages. You can use Prettier to set your code style so that you can avoid manually formatting your code. After installation, you can update your package.json file and run the npm run format and npm run lint commands.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
