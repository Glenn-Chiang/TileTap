import {
  faChessBoard,
  faClock,
  faSortAmountDesc,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Dropdown } from "../../../components/Dropdown";
import { displayGridSize, displayTimeLimit } from "../../../utils/textDisplay";
import { gridSizes, timeLimits } from "../../Game/game_logic/constants";
import { useGameRecords } from "../api";
import { ScoreCard } from "./ScoreCard";

export function ScoresPage() {
  const [gridSize, setGridSize] = useState(gridSizes[0]);
  const [timeLimit, setTimeLimit] = useState(timeLimits[0]);

  const sortOptions = ["date", "score"];
  const [sortOrder, setSortOrder] = useState("score");

  const gameRecords = useGameRecords(gridSize, timeLimit, sortOrder);

  return (
    <>
      <h1 className="text-center">Scores</h1>
      <div className="bg-white rounded p-2 flex flex-col gap-2">
        <Dropdown
          label="Grid size"
          icon={faChessBoard}
          options={gridSizes}
          value={gridSize}
          onChange={(value) => setGridSize(Number(value))}
          displayer={displayGridSize}
        />
        <Dropdown
          label="Time limit"
          icon={faClock}
          options={timeLimits}
          value={timeLimit}
          onChange={(value) => setTimeLimit(Number(value))}
          displayer={displayTimeLimit}
        />
        <Dropdown
          label="Sort by"
          icon={faSortAmountDesc}
          options={sortOptions}
          value={sortOrder}
          onChange={(value) => setSortOrder(value)}
        />
      </div>
      <ul className="flex flex-col gap-4 ">
        {gameRecords && gameRecords.length > 0 ? (
          gameRecords.map((record) => (
            <ScoreCard key={record.id} gameRecord={record} />
          ))
        ) : (
          <div className="bg-white rounded p-2 text-slate-400 text-center">
            No records
          </div>
        )}
      </ul>
    </>
  );
}
