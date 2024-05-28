import { randomBoolean } from "../../../utils/randomUtils";

const numRows = 4;
const numCols = 4;

export function generateGrid(): boolean[][] {
  const grid = Array.from({ length: numRows}, () => Array.from({ length: numCols}, () => randomBoolean()))
  return grid
}