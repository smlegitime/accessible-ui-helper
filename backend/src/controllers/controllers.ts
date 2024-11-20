/**
 * @fileoverview Processes requests/passes them along to the service layer.
 * @author Sybille Légitime
 * @copyright 2024. All rights reserved.
 */

import { AxeResults } from 'axe-core';
import { InputTransformer } from '../services/inputTransformer';

import { logging } from '../lib/logging';
import { FixedPageEvaluator } from '../services/fixedPageEvaluator';
import { Request, Response } from 'express';
import { FileCollection, GeneratedFilesInfo } from '../models/models';
import { LLMManager } from '../services/llmManager';

// Logger setup
const logger = logging.getLogger('controllers');

export const handleScannedInput = async (req: Request, res: Response) => {
    try {
        const scannedInput = req.body;
        const inputAccResults: AxeResults = req.body.accessibilityResults;

        logger.info('Request successfully received.');

        const inputTransformer = new InputTransformer(scannedInput);
        const transformedInput: FileCollection = inputTransformer.transformInput();

        logger.info('Request successfully transformed.');
        logger.info('Generating fixes...');
        
        const llmManager = new LLMManager();
        const generatedFileInfo: GeneratedFilesInfo = await llmManager.getFixes(transformedInput);

        logger.info('Fixes successfully generated.');
        logger.info('Preparing generated code for evaluation...');

        for (const htmlPage in generatedFileInfo['generatedCode']) {
            generatedFileInfo['generatedCode'][htmlPage]['htmlWithInlineScripts'] = inputTransformer.addInlineScriptsToHtml(
                generatedFileInfo['originalData'],
                generatedFileInfo['generatedCode'][htmlPage]
            )
        }

        // logger.info('Performing accessibility evaluation of the generated code...');

        // const evaluator: FixedPageEvaluator = new FixedPageEvaluator(generatedFileInfo, inputAccResults);
        // const evalResult = await evaluator.evaluatePage();

        // logger.info('Generated code evaluation completed.');
        // logger.info('Returning result...');
        
        res.send(generatedFileInfo);

    } catch (error: any) {
        logger.error(error);
        res.status(500).send({error});
    }
};