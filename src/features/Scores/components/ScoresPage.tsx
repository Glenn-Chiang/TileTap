import { useState } from "react";
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
      <ul>
        {gameRecords?.map((record) => (
          <ScoreCard gameRecord={record} />
        ))}
      </ul>
    </>
  );
}
