import {
  faChessBoard,
  faClock,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "../../../components/Dropdown";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { displayGridSize, displayTimeLimit } from "../../../utils/textDisplay";
import { gridSizes, timeLimits } from "../../Game/game_logic/constants";
import { gridSlice, selectGrid } from "../../Game/reducers/grid";
import { selectTimer, timerSlice } from "../../Game/reducers/timer";
import { IconLabel } from "../../../components/IconLabel";

export function SettingsMenu() {
  const dispatch = useAppDispatch();

  const gridSize = useAppSelector(selectGrid).gridSize;
  const setGridSize = (gridSize: number) => {
    dispatch(gridSlice.actions.setGridSize(gridSize));
  };

  const timeLimit = useAppSelector(selectTimer).timeLimit;
  const setTimeLimit = (timeLimit: number) => {
    dispatch(timerSlice.actions.setTimeLimit(timeLimit));
  };

  return (
    <div className="flex flex-col gap-4">
      <IconLabel icon={faGear} label="Settings" />
      <div className="bg-white rounded p-2">
        <Dropdown
          label="Grid size"
          icon={faChessBoard}
          options={gridSizes}
          value={gridSize}
          onChange={setGridSize}
          displayer={displayGridSize}
        />
      </div>
      <div className="bg-white rounded p-2">
        <Dropdown
          label="Time limit"
          icon={faClock}
          options={timeLimits}
          value={timeLimit}
          onChange={setTimeLimit}
          displayer={displayTimeLimit}
        />
      </div>
    </div>
  );
}
