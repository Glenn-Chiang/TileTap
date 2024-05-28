import { randRange } from "../../../utils/randomUtils";

const numRows = 4;
const numCols = 4;

// Number of tiles that are active at any time
const numActive = 4;

export function initializeGrid(): boolean[][] {
  const grid = Array.from({ length: numRows }, () => new Array(numCols).fill(false));

  // Randomly set given number of tiles as active
  for (let i = 0; i < numActive; i++) {
    let row = Math.floor(Math.random() * numRows);
    let col = Math.floor(Math.random() * numCols);
    while (grid[row][col]) {
      // If tile is already active, select another tile
      row = randRange(0, numRows);
      col = randRange(0, numCols);
    }
    grid[row][col] = true;
  }

  return grid;
}

