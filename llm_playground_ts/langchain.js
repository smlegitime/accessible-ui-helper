"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const openai_1 = require("@langchain/openai");
const runnables_1 = require("@langchain/core/runnables");
const output_parsers_1 = require("@langchain/core/output_parsers");
const prompts_1 = require("@langchain/core/prompts");
const json_1 = require("langchain/document_loaders/fs/json");
const text_splitter_1 = require("langchain/text_splitter");
const openai_2 = require("@langchain/openai");
const memory_1 = require("langchain/vectorstores/memory");
const data_1 = require("./data");
async function createRagPipeline() {
    //JSON loader declaration
    const loader = new json_1.JSONLoader('./inputFileCollection.json');
    const jsonDocs = await loader.load();
    const splitter = new text_splitter_1.RecursiveCharacterTextSplitter({
        chunkSize: 512, //256
        chunkOverlap: 0,
    });
    const splitDocs = await splitter.splitDocuments(jsonDocs);
    // Vector store setup
    const embeddings = new openai_2.OpenAIEmbeddings();
    const vectorStore = new memory_1.MemoryVectorStore(embeddings);
    const _ = await vectorStore.addDocuments(splitDocs);
    const retriever = vectorStore.asRetriever();
    const retrievedCode = await retriever.invoke('<h1>Home Page Updated</h1>');
    console.log(retrievedCode);
}
async function createInferenceChain() {
    // Runnables declaration
    const model = new openai_1.ChatOpenAI({
        modelName: 'gpt-4o-mini'
    });
    const outputParser = new output_parsers_1.StringOutputParser();
    // Sample Prompt
    const TEMPLATE_STRING = `You are an experienced web developer, 
expert at refactoring {codeType} code snippets based on provided source code.
Using the provided code as context, suggest a refactor for the below code snippet
to comply with the following message {message}.
Be verbose!

<context>

{context}

</context>

Now, here is the snippet you need to refactor : 

{snippet}`;
    const codeGenerationPrompt = prompts_1.ChatPromptTemplate.fromTemplate(TEMPLATE_STRING);
    const codeGenerationChain = runnables_1.RunnableSequence.from([
        {
            codeType: input => input.codeType,
            message: input => input.message,
            context: input => input.context,
            snippet: input => input.snippet,
        },
        codeGenerationPrompt,
        model,
        outputParser
    ]);
    const indexPageViolations = data_1.inputData['/index.html']['violationInfo'];
    const indexPageData = data_1.inputData['/index.html'];
    const inputs = indexPageViolations.map(violationObj => {
        return {
            codeType: indexPageData['type'],
            message: violationObj['message'],
            context: indexPageData['content'],
            snippet: violationObj['targetCode']
        };
    });
    codeGenerationChain.batch(inputs)
        .then(generatedCode => console.log(generatedCode))
        .catch(err => console.error(err));
}
async function main() {
    const res = await createRagPipeline();
    // createInferenceChain();
}
main();
