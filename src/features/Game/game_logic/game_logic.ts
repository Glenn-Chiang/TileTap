import { useAppDispatch, useAppSelector } from "../../../store/store";
import { addGameRecord } from "../../Scores/api";
import { gameStateSlice } from "../reducers/gameState";
import { GridPosition, gridSlice, selectGrid } from "../reducers/grid";
import { scoreSlice, selectScore } from "../reducers/score";
import { selectTimer } from "../reducers/timer";

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
  const gridSize = useAppSelector(selectGrid).gridSize
  const timeLimit = useAppSelector(selectTimer).timeLimit

  return () => {
    dispatch(gameStateSlice.actions.endGame());

    try {
      addGameRecord({score, gridSize, timeLimit})
      
    } catch (error) {
      console.log("Error saving game record:", error)
    }
  };
}
