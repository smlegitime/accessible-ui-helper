# `accessible-ui-helper`
Repository for the Accessible UI (AccUI) Helper Project - [CSCI2340](https://sites.google.com/brown.edu/csci2340/home) Software Engineering Course.

Our web application allows for developers to check their website's accessibility as they develop, and generates automated fixes for any accessibility violation the user wants to correct. For more information about the accessibility guidelines we follow, you can refer to the [W3C Accessibility Standards](https://www.w3.org/WAI/standards-guidelines/) page.

Official webpage (Deployed on a VM hosted by the CS department, and open until Dec 21, 2024): [https://accui.cs.brown.edu](https://accui.cs.brown.edu)

<img width="1512" alt="Screenshot 2024-12-12 at 9 03 42 AM" src="https://github.com/user-attachments/assets/70d5809b-0f39-4a58-abdd-44c86e1ff7a6" />

## 💻⚙️ Tech Stack
- Front-End: React.js
- Back-End: Express
- Language: TypeScript
- Delivery: Docker and Nginx

## ✅ Pre-requisites
- Node.js (`v16` and up)
- React.js
- OpenAI API key. Add a `.env` file to the root of `accessible-ui-helper/backend/`, and inside the file add `GPT_API_TOKEN=<yourOpenAiApiKey>`. For more info on OpenAI API keys, check the [OpenAI website](https://openai.com/index/openai-api/).
- Docker (if running via containers using `docker-compose`)

## 🗂️ Folder structure
```
.
├── .github                  # Old unused code
├── accui-test-folder        # Sample project users can use to test AccUI
├── backend                  # Contains back-end code
│   ├── ...                 
│   └── Dockerfile                                
├── frontend                 # Contains front-end code
│   ├── ...                 
│   └── Dockerfile                                  
├── nginx
│   ├── default.conf         # Nginx config
│   └── Dockerfile
├── status                   # Contains status.md files for each contributor
│   └── ...                
├── .gitignore
├── code_style.md
├── docker-compose.yml       # Configuration to build and run nginx, frontend, and backend containers   
├── package-lock.json             
├── package.json                   
├── LICENSE
├── README.md
└── ...                      # Transpiler config, homepage image
```

## 🛠️ Installation

To run this application locally, follow the installation instructions in the [frontend README](./frontend/README.md), as well as the [backend README](./backend/README.md) files.

## 💻 Usage

### Local run

If running locally, run the following commands in different terminal windows to start the front-end and back-end
```bash
npm start # front-end

npm run dev # back-end with hot reload
```
### Running with Docker
If running the application on docker, please make sure the docker daemon is running (you can check docker desktop if on a Mac or Windows PC).
Then run
```bash
docker-compose up --build
```
### Test folder
If you want to test AccUI's capabilities, we have the accui-test-folder in the root of this repo you can feel free to upload into the web app. It is a simple Vanilla HTML/CSS/JS project with an `index.html` an and `about.html` page.

## 👥 AccUI Team

Front-End
- [Marie Baker](https://github.com/mbakersf)
- [Yongcheng Shi](https://github.com/ZdioLex)
- [Stephanie Olaiya](https://github.com/stephanieolaiya)
- [Jiecheng Chen](https://github.com/JasonARong)
- [Brandon Woodard](https://github.com/BJWOODS)

Back-End
- [Sybille Légitime](https://github.com/smlegitime)
- [Rio Young](https://github.com/rio-young)
- [Ruoqian Zhang](https://github.com/ruoqianz)
- [Zheng Que](https://github.com/qz1127)

## License

[MIT License](https://choosealicense.com/licenses/mit/)
