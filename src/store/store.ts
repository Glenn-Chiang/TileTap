import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { gridSlice } from "../features/Game/reducers/grid";
import { scoreSlice } from "../features/Game/reducers/score";
import { gameStateSlice } from "../features/Game/reducers/gameState";
import { timerSlice } from "../features/Game/reducers/timer";

export const store = configureStore({
  reducer: {
    gridData: gridSlice.reducer,
    score: scoreSlice.reducer,
    gameState: gameStateSlice.reducer,
    timer: timerSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;