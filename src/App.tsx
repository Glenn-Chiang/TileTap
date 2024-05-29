import { Grid } from "./features/Game/components/Grid"

function App() {
  return (
    <main className="w-full flex flex-col items-center gap-4">
      <h1 className="text-4xl p-4">
        TileTap
      </h1>
      <Grid />
    </main>
  )
}

export default App
