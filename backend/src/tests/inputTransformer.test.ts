/**
 * @fileoverview Input transformer unit tests
 * @author Sybille Légitime
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */

import { describe } from "node:test";
import { InputTransformer } from "../services/inputTransformer";
import { readFile } from "../lib/utils";

describe('InputTransformer', async () => {
    const inputPayload = await readFile('../models/mocks/sampleBackendInput.json');
    const transformedInput = await readFile('../models/mocks/transformedInput.json');

    const inputTransformer = new InputTransformer(inputPayload);

    it('should return a set of organized inputs', () => {
        const result = inputTransformer.transformInput();

        expect(result).toEqual(transformedInput);
    });
});