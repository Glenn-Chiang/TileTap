import { GameRecord } from "../types";

export function ScoreCard({ gameRecord }: { gameRecord: GameRecord}) {
  const { date, gridSize, timeLimit, score } = gameRecord;

  return (
    <div className="bg-white rounded flex flex-col">
      <span>{`${gridSize} x ${gridSize}`}</span>
      <span>{`${timeLimit}s`}</span>
      <span>{date.toLocaleDateString()}</span>
      <span>{score}</span>
    </div>
  );
}
