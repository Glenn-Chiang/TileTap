import { useAppSelector } from "../../../redux_store/store";

export function useGrid() {
  return useAppSelector(state => state.gridData.grid)
}

export function useGameState() {
  return useAppSelector(state => state.gameState)
}