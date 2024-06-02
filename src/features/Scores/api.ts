import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../database/db";
import { GameData } from "./types";

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
  sortOrder: string
) {
  if (sortOrder != "score" && sortOrder != "date") {
    throw new Error("Invalid sort order")
  }
  return useLiveQuery(async () => {
    console.log(typeof gridSize);
    const records = await db.gameRecords
      .where("gridSize")
      .equals(gridSize)
      .and((gameRecord) => gameRecord.timeLimit === timeLimit)
      .reverse()
      .sortBy(sortOrder);
    return records;
  }, [gridSize, timeLimit, sortOrder])
}

