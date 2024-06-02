import Dexie, { EntityTable } from "dexie";

export interface GameData {
  gridSize: number;
  timeLimit: number;
  score: number;
}

export interface GameRecord extends GameData {
  id: number;
  date: Date;
}

export const db = new Dexie("GameRecords") as Dexie & {
  gameRecords: EntityTable<GameRecord, "id">; // Use id as primary key
};

db.version(1).stores({
  gameRecords: "++id, date, gridSize, timeLimit, score",
});
