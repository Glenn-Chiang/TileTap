import { Dashboard } from "./features/Game/components/Dashboard"
import { Grid } from "./features/Game/components/Grid"

function App() {
  return (
    <main className="w-full flex flex-col items-center gap-4">
      <h1 className="text-4xl p-4">
        TileTap
      </h1>
      <div className="w-4/5 md:w-1/2 lg:w-1/3 flex flex-col gap-4">
        <Dashboard/>
        <Grid />
      </div>
    </main>
  )
}

export default App
