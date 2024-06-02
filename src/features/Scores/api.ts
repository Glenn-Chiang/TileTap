import { useLiveQuery } from "dexie-react-hooks";
import { GameData, db } from "../../database/db";

async function addGameRecord(gameData: GameData) {
  const { gridSize, timeLimit, score } = gameData;
  await db.gameRecords.add({
    gridSize,
    timeLimit,
    score,
    date: new Date(),
  });
}

export type SortOrder = "score" | "date"

export function useGameRecords(gridSize: number, timeLimit: number, sortOrder: SortOrder) {
  return useLiveQuery(
    async () => {
      return await db.gameRecords
      .where("gridSize")
      .equals(gridSize)
      .and(gameRecord => gameRecord.timeLimit === timeLimit)
      .reverse()
      .sortBy(sortOrder)  
    },
    [gridSize, timeLimit]
  )
}