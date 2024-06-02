import { SettingsMenu } from "../../Settings/components/SettingsMenu"
import { Dashboard } from "./Dashboard"
import { Grid } from "./Grid"
import { RestartButton } from "./RestartButton"

export function GamePage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <Dashboard />
        <Grid />
      </div>
      <RestartButton />
      <SettingsMenu/>
    </div>
  )
}
