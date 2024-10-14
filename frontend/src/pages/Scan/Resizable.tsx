// import {
//     ResizableHandle,
//     ResizablePanel,
//     ResizablePanelGroup,
//   } from "/src/components/ui/resizable"

  
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "../../components/ui/resizable"

  export function ResizablePage() {
    return (
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>One</ResizablePanel> 
        <ResizableHandle withHandle />
        <ResizablePanel>Two</ResizablePanel>
      </ResizablePanelGroup>
    )
  }
  