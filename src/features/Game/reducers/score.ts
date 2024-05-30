import { createSlice } from "@reduxjs/toolkit"

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
      }
    }
  }
)