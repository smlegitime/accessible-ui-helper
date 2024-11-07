/**
 * Description: Processes requests/passes them along to the service layer.
 * Created: Sybille Légitime
 * Created date: Oct 18, 2024 | Updated date: Nov 6, 2024
 */

import { FileCollection, AccessibilityResults } from '../models/models';
import { InputTransformer } from '../services/inputTransformer';

import { logging } from '../lib/logging';

// Logger setup
const logger = logging.getLogger('controllers');

export const handleScannedInput = async (req: any, res: any) => {
    try {
        const inputFileCollection: FileCollection = req.body.fileCollection;
        const inputAccResults: AccessibilityResults = req.body.accessibilityResults;

        logger.info('Request successfully received.');

        const transformedResult = await InputTransformer.transformInput(
            inputFileCollection,
            inputAccResults
        );
        
        res.send(transformedResult);

    } catch (error: any) {
        logger.error(error);
        res.status(500).send({error});
    }
};