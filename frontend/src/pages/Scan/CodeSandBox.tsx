import { ClientOptions, loadSandpackClient, SandboxSetup, SandpackClient } from "@codesandbox/sandpack-client";

export class CodeSandBox {
    content: SandboxSetup
    constructor(sandboxSetup: SandboxSetup) {
        this.content = sandboxSetup;
    }

    createCodeSandboxIframe = async (iframe: HTMLIFrameElement) => {
        // Optional options
        const options: ClientOptions = {};
        // Properly load and mount the bundler                    
        const client = await loadSandpackClient(
            iframe,
            this.content,
            options
        );
        return { iframe: iframe, client: client }
    }

    updateSandbox = (client: SandpackClient) => {
        client.updateSandbox({
            files: {
                "/index.js": {
                    code: `console.log('New Text!')`,
                },
            },
            entry: "/index.js",
            dependencies: {
                uuid: "latest",
            },
        });
    }
}
