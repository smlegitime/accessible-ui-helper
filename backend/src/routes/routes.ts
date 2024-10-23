/**
 * Description: Contains all routes in backend. Pass req/res to controller
 * Created: Sybille Légitime
 * Created date: Oct 18, 2024 | Updated date:
 */

import * as controllers from '../controllers/controllers';
import { Router } from 'express';

const router = Router();

// Calls the controller based on the route path
router.get('/', controllers.getAxeRules);

export default router;