import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../../redux_store/store";

const initialState = {
  score: 0,
  multiplier: 1
}

export const scoreSlice = createSlice(
  {
    name: "score",
    initialState,
    reducers: {
      increment: (state) => {
        state.score += state.multiplier;
      },
      reset: () => initialState
    }
  }
)

export const selectScore = (state: RootState) => state.score;