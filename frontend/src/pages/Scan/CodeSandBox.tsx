import { GeneratedFixPage } from "@/src/interfaces/scanInterfaces";
import { ClientOptions, loadSandpackClient, SandboxSetup, SandpackClient } from "@codesandbox/sandpack-client";
import { fixCodeType } from "./Resizable";

export class CodeSandBox {
    content: SandboxSetup
    constructor(sandboxSetup: SandboxSetup) {
        this.content = sandboxSetup;
    }

    private client : SandpackClient | null = null; 
    createCodeSandboxIframe = async (iframe: HTMLIFrameElement) => {
        // Optional options
        const options: ClientOptions = {
            showErrorScreen: true,
            showLoadingScreen: true,
        };
        // Properly load and mount the bundler                    
        const client = await loadSandpackClient(
            iframe,
            this.content,
            options
        );
        this.client = client
        return { iframe: iframe, client: client }
    }

    updateSandboxIframe = async(
        fixes: fixCodeType, 
        ) => {
        this.client?.updateSandbox({
            files: fixes, 
            entry: 'index.html'
        })
        console.log('updated')
    }
}


