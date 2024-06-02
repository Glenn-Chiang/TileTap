import Dexie, { EntityTable } from "dexie";
import { GameRecord } from "../features/Scores/types";

export const db = new Dexie("GameRecords") as Dexie & {
  gameRecords: EntityTable<GameRecord, "id">; // Use id as primary key
};

db.version(1).stores({
  gameRecords: "++id, date, gridSize, timeLimit, score",
});
