import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { randRange } from "../../../utils/randomUtils";
import { numActiveTiles, numCols, numRows } from "../game_logic/game_logic";

const initialState: boolean[][] = initializeGrid();

export const gridSlice = createSlice({
  name: "grid",
  initialState,
  reducers: {
    reset: () => initializeGrid(),
    onCorrectHit: (grid, action: PayloadAction<GridPosition>) => {
      const {row, col} = action.payload;
      activateRandomPosition(grid);
      grid[row][col] = false;
    }
  }
})

export interface GridPosition {
  row: number,
  col: number
}

export function initializeGrid(): boolean[][] {
  const grid = Array.from({ length: numRows }, () =>
    new Array(numCols).fill(false)
  );
  // Randomly set given number of tiles as active
  for (let i = 0; i < numActiveTiles; i++) {
    activateRandomPosition(grid);
  }
  return grid;
}

// Activate a random positon on the grid that is not already active
export function activateRandomPosition(grid: boolean[][]) {
  let row = randRange(0, numRows);
  let col = randRange(0, numCols);
  while (grid[row][col]) {
    // If tile is already active, select another tile
    row = randRange(0, numRows);
    col = randRange(0, numCols);
  }
  grid[row][col] = true;
}
