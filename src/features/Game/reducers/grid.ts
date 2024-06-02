import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { randRange } from "../../../utils/randomUtils";
import { gridSizes, numActiveTiles } from "../game_logic/constants";
import { RootState } from "../../../store/store";

export interface GridPosition {
  row: number;
  col: number;
}

interface GridState {
  gridSize: number;
  grid: boolean[][];
  wrongTile: GridPosition | null;
}

const initialState: GridState = {
  gridSize: gridSizes[0],
  grid: initializeGrid(gridSizes[0], numActiveTiles),
  wrongTile: null,
};

export const gridSlice = createSlice({
  name: "grid",
  initialState,
  reducers: {
    onCorrectHit: (state, action: PayloadAction<GridPosition>) => {
      const grid = state.grid;
      const { row, col } = action.payload;
      activateRandomPosition(grid);
      grid[row][col] = false;
    },
    onWrongHit: (state, action: PayloadAction<GridPosition>) => {
      state.wrongTile = action.payload;
    },
    reset: (state) => {
      state.grid = initializeGrid(state.gridSize, numActiveTiles);
      state.wrongTile = null;
    },
    setGridSize: (state, action: PayloadAction<number>) => {
      state.gridSize = action.payload;
      state.grid = initializeGrid(state.gridSize, numActiveTiles)
    }
  },
});

export const selectGrid = (state: RootState) => state.gridData;

export function initializeGrid(
  gridSize: number,
  numActive: number
): boolean[][] {
  const grid = Array.from({ length: gridSize }, () => Array.from({length: gridSize}, () => false))
  // Randomly set given number of tiles as active
  for (let i = 0; i < numActive; i++) {
    activateRandomPosition(grid);
  }
  return grid;
}

// Activate a random positon on the grid that is not already active
export function activateRandomPosition(grid: boolean[][]) {
  const numRows = grid.length;
  const numCols = grid[0].length;
  let row = randRange(0, numRows);
  let col = randRange(0, numCols);
  while (grid[row][col]) {
    // If tile is already active, select another tile
    row = randRange(0, numRows);
    col = randRange(0, numCols);
  }
  grid[row][col] = true;
}
