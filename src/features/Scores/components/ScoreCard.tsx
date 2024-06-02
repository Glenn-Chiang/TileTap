import { GameRecord } from "../types";
import { GridIcon, TimeIcon } from "../../../components/icons";

export function ScoreCard({ gameRecord }: { gameRecord: GameRecord }) {
  const { date, gridSize, timeLimit, score } = gameRecord;

  return (
    <div className="bg-white rounded p-2 flex ">
      <div className="flex flex-col items-center w-1/2">
        <div className="flex gap-1 items-center">
          <GridIcon />
          <span>{`${gridSize} x ${gridSize}`}</span>
        </div>
        <div className="flex gap-1 items-center">
          <TimeIcon />
          <span>{`${timeLimit}s`}</span>
        </div>
        <span>{date.toLocaleDateString()}</span>
      </div>
      <div className="w-1/2 border-l-2 flex justify-center items-center text-3xl text-sky-500">
        {score}
      </div>
    </div>
  );
}
