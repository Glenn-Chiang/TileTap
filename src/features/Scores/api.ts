import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../database/db";
import { GameData, SortOrder } from "./types";

export async function addGameRecord(gameData: GameData) {
  const { gridSize, timeLimit, score } = gameData;
  await db.gameRecords.add({
    gridSize,
    timeLimit,
    score,
    date: new Date(),
  });
}

export function useGameRecords(
  gridSize: number,
  timeLimit: number,
  sortOrder: SortOrder
) {
  return useLiveQuery(async () => {
    return await db.gameRecords
      .where("gridSize")
      .equals(gridSize)
      .and((gameRecord) => gameRecord.timeLimit === timeLimit)
      .reverse()
      .limit(10)
      .sortBy(sortOrder);
  }, [gridSize, timeLimit]);
}
