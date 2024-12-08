/**
 * @fileoverview Input transformer unit tests
 * @author Sybille Légitime
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */

import { InputTransformer } from "../services/inputTransformer";
import { readFile } from "../lib/utils";

describe('InputTransformer', () => {
    const inputPayload = JSON.parse(readFile('/Users/sybillelegitime/Documents/accessible-ui-helper/backend/src/models/mocks/sampleBackendInput.json'));
    const transformedInput = JSON.parse(readFile('/Users/sybillelegitime/Documents/accessible-ui-helper/backend/src/models/mocks/transformedInput.json'));

    const inputTransformer = new InputTransformer(inputPayload);

    it('should assign violations to about.html page', () => {
        const res = inputTransformer.transformInput();

        expect(res['/index.html']['violationInfo']).toEqual([]);
        expect(res['/about.html']['violationInfo']).not.toEqual([]);
        expect(res['/about.html']['violationInfo'].length).toEqual(5);
    });

    it('should return a set of organized inputs', () => {
        const result = inputTransformer.transformInput();

        expect(result).toEqual(transformedInput);
    });
});