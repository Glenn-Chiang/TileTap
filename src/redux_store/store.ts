import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { gridSlice } from "../features/Game/reducers/grid";
import { scoreSlice } from "../features/Game/reducers/score";
import { gameStateSlice } from "../features/Game/reducers/gameState";

export const store = configureStore({
  reducer: {
    grid: gridSlice.reducer,
    score: scoreSlice.reducer,
    gameState: gameStateSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;