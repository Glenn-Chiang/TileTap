import {
  faChessBoard,
  faChevronLeft,
  faChevronRight,
  faClock,
  faSortAmountDesc,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Dropdown } from "../../../components/Dropdown";
import { displayGridSize, displayTimeLimit } from "../../../utils/textDisplay";
import { gridSizes, timeLimits } from "../../Game/game_logic/constants";
import { useGameRecords } from "../api";
import { ScoreCard } from "./ScoreCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ScoresPage() {
  const [gridSize, setGridSize] = useState(gridSizes[0]);
  const [timeLimit, setTimeLimit] = useState(timeLimits[0]);
  
  const sortOptions = ["date", "score"];
  const [sortOrder, setSortOrder] = useState("score");

  const limit = 5
  const [startIndex, setStartIndex] = useState(0)

  // Game records with the current selected settings across all pages
  const records = useGameRecords(gridSize, timeLimit, sortOrder)

  const nextPage = () => {
    if (!records) return;
    if (startIndex + limit >= records.length) {
      return
    }
    setStartIndex(prev => prev + limit)
  }
  const prevPage = () => {
    setStartIndex(prev => prev > 0 ? prev - limit : 0)
  }
  console.log(startIndex)
  // Game records with the current selected settings on the current displayed page
  const displayedRecords = useGameRecords(gridSize, timeLimit, sortOrder, limit, startIndex);

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
      <div className="flex justify-between">
        <button onClick={prevPage} className="bg-sky-500 text-white flex justify-center items-center aspect-square w-10 rounded">
          <FontAwesomeIcon icon={faChevronLeft}/>
        </button>
        <button onClick={nextPage} className="bg-sky-500 text-white flex justify-center items-center aspect-square w-10 rounded">
          <FontAwesomeIcon icon={faChevronRight}/>
        </button>
      </div>
      <ul className="flex flex-col gap-4 ">
        {displayedRecords && displayedRecords.length > 0 ? (
          displayedRecords.map((record) => (
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
