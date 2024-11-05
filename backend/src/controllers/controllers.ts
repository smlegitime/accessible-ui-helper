/**
 * Description: Processes requests/passes them along to the service layer.
 * Created: Sybille Légitime
 * Created date: Oct 18, 2024 | Updated date:
 */

import axios from 'axios';
import { FileCollection, AccessibilityResults } from '../models/models';
import { InputTransformer } from '../services/inputTransformer';

export const handleScannedInput = async (req: any, res: any) => {
    try {
        const inputFileCollection: FileCollection = req.body.fileCollection;
        const inputAccResults: AccessibilityResults = req.body.accessibilityResults;

        // Logging
        console.log('Request successfully received.');

        const transformedResult = await InputTransformer.transformInput(
            inputFileCollection,
            inputAccResults
        );
        
        // // console.log(transformedResult);
        // const prompt = getPrompt(transformedResult);
        // const llmResponse = await callLlm(prompt);
        // console.log(llmResponse)
        
        res.send(transformedResult);

    } catch (error) {
        console.error(error);
        res.status(500).send({error});
    }
};

// function getPrompt(inputData: any){
//     const fileCollection = inputData.fileCollection;
//     const instruction = `${fileCollection['/index.html']['pageViolations']['failureSummary']}`
//     const examples = `${fileCollection['/index.html']['originalData']['content']}`
//     const prompt = `You are a helpful assistant. Your task is to produce code given a specific message. The context is the following code ${examples}.
//     Produce an h1 html element for the following: ${instruction}`

    

//     return prompt;
// }

// async function callLlm(prompt: string) {
//     const baseUrl = "http://llmserver.cs.brown.edu:37090"

//     const headers = { 
//         "Content-Type": "application/json",
//         "accept": "text/event-stream"
//     }  

//     const url = `${baseUrl}/generate`
//     const data = { "prompt": prompt }

//     const llmResponse = await axios.post(url, data, {headers});

//     return llmResponse;

// }