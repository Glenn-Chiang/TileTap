import { useAppDispatch } from "../../../redux_store/store";
import { gameStateSlice } from "../reducers/gameState";
import { GridPosition, gridSlice } from "../reducers/grid";
import { scoreSlice } from "../reducers/score";
import { useGrid } from "../reducers/selectors";

export const numRows = 4;
export const numCols = 4;
// Number of tiles that are active at any time
export const numActiveTiles = 4;
export const timeLimit = 5

export function useCheckHit() {
  const grid = useGrid();
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
      dispatch(gridSlice.actions.onWrongHit(position))
      dispatch(gameStateSlice.actions.endGame())
    }
  }
}

export function useStartGame() {
  const dispatch = useAppDispatch();
  return () => {
    dispatch(gameStateSlice.actions.startGame())
  }
}

export function useResetGame() {
  const dispatch = useAppDispatch();
  return () => {
    dispatch(gameStateSlice.actions.restartGame())
    dispatch(gridSlice.actions.reset());
    dispatch(scoreSlice.actions.reset());
  }
}

export function useEndGame() {
  const dispatch = useAppDispatch();
  return () => {
    dispatch(gameStateSlice.actions.endGame())
  }
}