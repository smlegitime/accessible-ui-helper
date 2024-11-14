"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const llama_stack_client_1 = __importDefault(require("llama-stack-client"));
const client = new llama_stack_client_1.default({
    environment: "sandbox"
});
const user_input = "Tell me a joke";
async function main() {
    const response = await client.inference.chatCompletion({
        model: "llama3.1-70b",
        messages: [{ role: 'user', content: user_input }],
        stream: false
    });
    console.log(`Bot response: ${response}`);
}
main();
