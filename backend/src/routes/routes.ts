/**
 * Description: Contains all routes in backend. Pass req/res to controller
 * @author Sybille Légitime
 * @copyright 2024. All rights reserved.
 */

import * as controllers from '../controllers/controllers';
import { Router } from 'express';

const router = Router();

// Calls the controller based on the route path
router.post('/fix', controllers.handleScannedInput);

export default router;