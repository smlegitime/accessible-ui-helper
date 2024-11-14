import 'dotenv/config'; // create a .env file in this folder and add OPENAI_API_KEY="your_key"

import { ChatOpenAI } from '@langchain/openai';
import { RunnableSequence } from '@langchain/core/runnables';
import { StringOutputParser } from '@langchain/core/output_parsers';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { JSONLoader } from "langchain/document_loaders/fs/json";
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { OpenAIEmbeddings } from '@langchain/openai';
import { MemoryVectorStore } from 'langchain/vectorstores/memory';

import { inputData } from './data'

async function createRagPipeline() {
    //JSON loader declaration
    const loader = new JSONLoader('./inputFileCollection.json');

    const jsonDocs = await loader.load();

    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 512, //256
        chunkOverlap: 0,
    });

    const splitDocs = await splitter.splitDocuments(jsonDocs)

    // Vector store setup
    const embeddings = new OpenAIEmbeddings();
    const vectorStore = new MemoryVectorStore(embeddings);
    const _ = await vectorStore.addDocuments(splitDocs)

    const retriever = vectorStore.asRetriever();
    const retrievedCode = await retriever.invoke('<h1>Home Page Updated</h1>');
    console.log(retrievedCode);
}

async function createInferenceChain() {
    // Runnables declaration
    const model = new ChatOpenAI({
        modelName: 'gpt-4o-mini'
    });
    const outputParser = new StringOutputParser();

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

    const codeGenerationPrompt = ChatPromptTemplate.fromTemplate(TEMPLATE_STRING);

    const codeGenerationChain = RunnableSequence.from([
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

    const indexPageViolations = inputData['/index.html']['violationInfo'];
    const indexPageData = inputData['/index.html'];

    const inputs = indexPageViolations.map(violationObj => {
        return {
            codeType: indexPageData['type'],
            message: violationObj['message'],
            context: indexPageData['content'],
            snippet: violationObj['targetCode']
        }
    })

    codeGenerationChain.batch(inputs)
        .then(generatedCode => console.log(generatedCode))
        .catch(err => console.error(err));
}

async function main() {
    const res = await createRagPipeline();
    // createInferenceChain();
}

main();