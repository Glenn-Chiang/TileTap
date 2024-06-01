import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { randRange } from "../../../utils/randomUtils";
import { gridSizes } from "../game_logic/constants";
import { RootState } from "../../../redux_store/store";

export interface GridPosition {
  row: number;
  col: number;
}

interface GridState {
  gridSize: number;
  numActiveTiles: number;
  grid: boolean[][];
  wrongTile: GridPosition | null;
}

const initialState: GridState = {
  gridSize: gridSizes[0],
  get numActiveTiles() {
    return this.gridSize;
  },
  grid: initializeGrid(gridSizes[0], gridSizes[0]),
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
      initializeGrid(state.gridSize, state.numActiveTiles);
    },
    setGridSize: (state, action: PayloadAction<number>) => {
      state.gridSize = action.payload;
      state.grid = initializeGrid(state.gridSize, state.numActiveTiles)
    }
  },
});

export const selectGrid = (state: RootState) => state.gridData;

export function initializeGrid(
  gridSize: number,
  numActive: number
): boolean[][] {
  const grid = Array.from({ length: gridSize }, () =>
    new Array(gridSize).fill(false)
  );
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
