import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { timeLimits } from "../game_logic/constants";
import { RootState } from "../../../store/store";

const initialState = {
  timeLimit: timeLimits[0],
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    setTimeLimit: (state, action: PayloadAction<number>) => {
      state.timeLimit = action.payload;
    },
  },
});

export const selectTimer = (state: RootState) => state.timer;