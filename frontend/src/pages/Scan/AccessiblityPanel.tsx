import { fixCodeType } from "./index"


export function AccessiblityPanel({ setGeneratedPageFixes }: { setGeneratedPageFixes: React.Dispatch<React.SetStateAction<fixCodeType>> }) {
  return (
    <div className="h-full bg-black ">
      {/* Top part of panel */}
      <div className="flex items-start space-x-4 p-4">
        <div className="w-8 h-8 bg-gray-200 rounded-full	"></div>
        <h1 className="text-white	font-bold text-2xl">AccUI</h1>
      </div>
      {/* Passed results panel */}

    </div>
  )
}