/**
 * Description: Processes requests/passes them along to the service layer.
 * Created: Sybille Légitime
 * Created date: Oct 18, 2024 | Updated date:
 */

import axe from 'axe-core';

export const getAxeRules = (req: any, res: any): void => {
    const results = axe.getRules(['wcag2aa', 'wcag2a']);
    res.send(results);
};