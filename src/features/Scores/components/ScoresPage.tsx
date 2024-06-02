import {
  faChessBoard,
  faClock,
  faSortAmountDesc,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Dropdown } from "../../../components/Dropdown";
import { displayGridSize } from "../../../utils/textDisplay";
import { gridSizes, timeLimits } from "../../Game/game_logic/constants";
import { useGameRecords } from "../api";
import { SortOrder } from "../types";
import { ScoreCard } from "./ScoreCard";

export function ScoresPage() {
  const [gridSize, setGridSize] = useState(gridSizes[0]);
  const [timeLimit, setTimeLimit] = useState(timeLimits[0]);
  const [sortOrder, setSortOrder] = useState<SortOrder>("score");

  const gameRecords = useGameRecords(gridSize, timeLimit, sortOrder);

  return (
    <>
      <div className="bg-white rounded p-2 flex flex-col gap-2">
        <Dropdown
          label="Grid size"
          icon={faChessBoard}
          options={gridSizes}
          value={gridSize}
          onChange={(value) => setGridSize(value)}
          displayer={displayGridSize}
        />
        <Dropdown
          label="Time limit"
          icon={faClock}
          options={timeLimits}
          value={timeLimit}
          onChange={(value) => setTimeLimit(value)}
          displayer={displayGridSize}
        />
        <Dropdown
          label="Sort by"
          icon={faSortAmountDesc}
          options={["date", "score"]}
          value={sortOrder}
          onChange={(value) => setSortOrder(value)}
        />
      </div>
      <ul className="flex flex-col gap-4 ">
        {gameRecords?.map((record) => (
          <ScoreCard key={record.id} gameRecord={record} />
        ))}
      </ul>
    </>
  );
}
