import LlamaStackClient from "llama-stack-client";

const client = new LlamaStackClient({
    environment: "sandbox"
});

const user_input = "Tell me a joke";

async function main(){
    const response = await client.inference.chatCompletion({
        model: "llama3.1-70b",
        messages: [{role: 'user', content: user_input}],
        stream: false
    });

    console.log(`Bot response: ${response}`)
}

main();