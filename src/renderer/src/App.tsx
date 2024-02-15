import { Input } from '@renderer/components/ui/input'

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <div className="text-4xl flex items-center justify-center h-screen">
        <Input
          className="w-1/2 text-sm text-stone-500
            file:mr-5 file:py-1 file:px-3 file:border-[1px]
            file:text-xs file:font-medium
            file:bg-stone-50 file:text-stone-700
            hover:file:cursor-pointer hover:file:bg-blue-50
            hover:file:text-blue-700"
          type="file"
          placeholder="Select a file"
        />
      </div>
    </>
  )
}

export default App
