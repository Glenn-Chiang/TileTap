import { useAppDispatch, useAppSelector } from "../../../redux_store/store";
import { GridPosition, gridSlice } from "../reducers/grid";
import { scoreSlice } from "../reducers/score";

export const numRows = 4;
export const numCols = 4;
// Number of tiles that are active at any time
export const numActiveTiles = 4;

export function useCheckHit() {
  const grid = useAppSelector(state => state.grid)
  const dispatch = useAppDispatch();

  return (position: GridPosition) => {
    if (grid[position.row][position.col]) {
      // If user clicked on active tile,
      // Update grid
      dispatch(gridSlice.actions.onCorrectHit(position))
      // Update score, accuracy, combo etc
      dispatch(scoreSlice.actions.increment())
    } else {
      // If user clicked on inactive tile
    }
  }
}

export function useResetGame() {
  const dispatch = useAppDispatch();
  return () => {
    dispatch(gridSlice.actions.reset());
    dispatch(scoreSlice.actions.reset());
  }
}