"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const apiKey = 'LA-8cef0a65fa154994b08f69f22897b0c618f390884ea34aa69c1d029fa9308b4c';
const baseUrl = 'https://api.llama-api.com';
const sendMessage = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.post(`${baseUrl}/v1/chat/completions`, // Adjust the endpoint if needed
        {
            model: 'llama3.1-70b',
            messages: [
                { role: 'system', content: 'Assistant is a large language model trained by OpenAI.' },
                { role: 'user', content: 'Who were the founders of Microsoft?' }
            ]
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            }
        });
        // You can adjust this based on the actual response structure
        const content = response.data.choices[0].message.content;
        console.log('Response:', JSON.stringify(response.data, null, 2));
        console.log('Message Content:', content);
    }
    catch (error) {
        console.error('Error calling the Llama API:', error);
    }
});
// Call the function
sendMessage();
