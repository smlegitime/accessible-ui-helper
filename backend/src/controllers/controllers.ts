/**
 * Description: Processes requests/passes them along to the service layer.
 * @author Sybille Légitime
 * @copyright 2024
 */

import { AxeResults } from 'axe-core';
import { InputTransformer } from '../services/inputTransformer';

import { logging } from '../lib/logging';
import { readFile } from '../lib/utils';
import { FixedPageEvaluator } from '../services/fixedPageEvaluator';
import { Request, Response } from 'express';

// Logger setup
const logger = logging.getLogger('controllers');

export const handleScannedInput = async (req: Request, res: Response) => {
    try {
        const scannedInput = req.body;
        const inputAccResults: AxeResults = req.body.accessibilityResults;

        logger.info('Request successfully received.');

        const inputTransformer = new InputTransformer(scannedInput);
        const transformedInput = await inputTransformer.transformInput(); // Will be fed to LLM manager

        // Simulate generated page result from LLM
        const testFilePath = '/Users/sybillelegitime/Documents/accessible-ui-helper/backend/src/models/mocks/sampleBackendOutput.json';
        const data = await readFile(testFilePath);
        const generatedPage: any = JSON.parse(data);
        const indexPageName: string = Object.keys(generatedPage)[0];
        const indexPage = generatedPage[indexPageName]; // This is the index page (Right??)

        // Evaluate generatedResult
        const evaluator: FixedPageEvaluator = new FixedPageEvaluator(indexPage, inputAccResults);
        const evalResult = await evaluator.evaluatePage();
        
        res.send(evalResult);

    } catch (error: any) {
        logger.error(error);
        res.status(500).send({error});
    }
};