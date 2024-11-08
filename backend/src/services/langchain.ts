import 'dotenv/config';

import { ChatOpenAI } from '@langchain/openai';
import { RunnableSequence } from '@langchain/core/runnables';
import { StringOutputParser } from '@langchain/core/output_parsers';
import { ChatPromptTemplate } from '@langchain/core/prompts';

import { inputData } from '../models/mocks/data';

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

const indexPageViolations = inputData['fileCollection']['/index.html']['violationInfo'];
const indexPageData = inputData['fileCollection']['/index.html'];

const inputs = indexPageViolations.map(violationObj => {
    return {
        codeType: indexPageData['type'],
        message: violationObj['message'],
        context: indexPageData['content'],
        snippet: violationObj['targetCode']['content']
    }
})

codeGenerationChain.batch(inputs)
.then(generatedCode => console.log(generatedCode))
.catch(err => console.error(err));