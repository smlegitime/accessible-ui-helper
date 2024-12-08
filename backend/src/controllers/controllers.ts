/**
 * @fileoverview Processes requests/passes them along to the service layer.
 * @author Sybille Légitime
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */

import { Request, Response } from 'express';
import { InputTransformer } from '../services/inputTransformer';
import { logging } from '../lib/logging';
import { FixedPageEvaluator } from '../services/fixedPageEvaluator';
import { FileCollection, GeneratedFilesInfo } from '../models/models';
import { LLMManager } from '../services/llmManager';
import { OutputTransformer } from '../services/outputTransformer';

// Logger setup
const logger = logging.getLogger('controllers');

export const handleScannedInput = async (req: Request, res: Response) => {
    try {
        const scannedInput = req.body;
        logger.info('Request successfully received.');

        const inputTransformer = new InputTransformer(scannedInput);
        const transformedInput: FileCollection = inputTransformer.transformInput();

        // console.log('Transformed input:');
        // console.log(JSON.stringify(transformedInput));

        logger.info('Request successfully transformed.');
        logger.info('Generating fixes...');
        
        const llmManager = new LLMManager();
        let generatedFileInfo: GeneratedFilesInfo = await llmManager.getFixes(scannedInput['currentScannedPage'], transformedInput);

        logger.info('Fixes successfully generated.');
        logger.info('Preparing generated code for evaluation...');

        for (const htmlPage in generatedFileInfo['generatedCode']) {
            generatedFileInfo['generatedCode'][htmlPage]['htmlWithInlineScripts'] = generatedFileInfo['generatedCode'][htmlPage]['content'];
        }

        logger.info('Performing accessibility evaluation of the generated code...');

        const evaluator: FixedPageEvaluator = new FixedPageEvaluator(transformedInput, generatedFileInfo,scannedInput.accessibilityStandards);
        const result = await evaluator.evaluatePage();
                
        if(result.success == false){

            logger.info('Fixes failed to pass evaluation.');
            logger.info('Generating fixes again...');

            const newTransformedInput = result.result;
            let newGeneratedFileInfo = await llmManager.getFixes(scannedInput['currentScannedPage'], newTransformedInput);
            generatedFileInfo = newGeneratedFileInfo;
        }
               
        logger.info('Generated code evaluation completed.');
        logger.info('Transforming output ...');
        
        generatedFileInfo.originalData = { ...scannedInput.fileCollection };

        const outputTransformer  = new OutputTransformer(generatedFileInfo);
        generatedFileInfo = outputTransformer.transformOutput();
        
        logger.info('Transformer output completed.');
        logger.info('Returning result...');
      
        const output = { generatedFilesInfo: generatedFileInfo };

        res.send(output);

        logger.info('Response returned to front-end.');

    } catch (error) {
        logger.error(error as string);
        if (error instanceof Error) {
            res.status(500).json({
              message: 'Fix generation failed.',
              error: error.message,
            });
        } else {
            res.status(500).json({
                message: 'Fix generation failed.',
                error: 'An unknown error occurred.',
            });
        }
    }
};