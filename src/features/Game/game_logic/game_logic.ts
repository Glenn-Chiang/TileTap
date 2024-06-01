import { useAppDispatch, useAppSelector } from "../../../redux_store/store";
import { gameStateSlice } from "../reducers/gameState";
import { GridPosition, gridSlice, selectGrid } from "../reducers/grid";
import { scoreSlice, selectScore } from "../reducers/score";

export function useCheckHit() {
  const grid = useAppSelector(selectGrid).grid;
  const dispatch = useAppDispatch();
  const endGame = useEndGame();

  return (position: GridPosition) => {
    if (grid[position.row][position.col]) {
      // If user clicked on active tile,
      // Update grid
      dispatch(gridSlice.actions.onCorrectHit(position));
      // Update score, accuracy, combo etc
      dispatch(scoreSlice.actions.increment());
    } else {
      // If user clicked on inactive tile
      dispatch(gridSlice.actions.onWrongHit(position));
      endGame();
    }
  };
}

export function useStartGame() {
  const dispatch = useAppDispatch();
  return () => {
    dispatch(gameStateSlice.actions.startGame());
  };
}

export function useResetGame() {
  const dispatch = useAppDispatch();
  return () => {
    dispatch(gameStateSlice.actions.restartGame());
    dispatch(gridSlice.actions.reset());
    dispatch(scoreSlice.actions.reset());
  };
}

export function useEndGame() {
  const dispatch = useAppDispatch();
  const score = useAppSelector(selectScore).score

  return () => {
    dispatch(gameStateSlice.actions.endGame());
  };
}
