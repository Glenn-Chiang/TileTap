import React, { Dispatch, createContext, useContext, useReducer } from "react";
import { initializeGrid } from "../game_logic/grid";
import { ReducerAction } from "../../../types/reducers";

export const GridContext = createContext<boolean[][] | null>(null);
export const GridDispatchContext = createContext<Dispatch<GridAction> | null>(null);

export function GridProvider({children}: {children: React.ReactNode}) {
const [grid, dispatch] = useReducer(gridReducer, initialGrid);

  return (
    <GridContext.Provider value={grid}>
      <GridDispatchContext.Provider value={dispatch}>
        {children}
      </GridDispatchContext.Provider>
    </GridContext.Provider>
  )
}

export function useGrid() {
  return useContext(GridContext);
}

export function useGridDispatch() {
  return useContext(GridDispatchContext);
}

export interface GridPosition {
  row: number,
  col: number
}

interface GridAction extends ReducerAction {
  type: "activate_tile" | "deactivate_tile",
  position: GridPosition
}

const initialGrid = initializeGrid();

function gridReducer(grid: boolean[][], action: GridAction): boolean[][] {
  switch (action.type) {
    case "activate_tile": {
      const newGrid = copy2DArray(grid);
      newGrid[action.position.row][action.position.col] = true;
      return newGrid;
    }
    
    case "deactivate_tile": {
      const newGrid = copy2DArray(grid);
      newGrid[action.position.row][action.position.col] = false;
      return newGrid;
    }
  }
}

function copy2DArray<T>(array: T[][]) {
  return array.map(row => [...row]);
}