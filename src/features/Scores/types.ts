export interface GameData {
  gridSize: number;
  timeLimit: number;
  score: number;
}

export interface GameRecord extends GameData {
  id: number;
  date: Date;
}

