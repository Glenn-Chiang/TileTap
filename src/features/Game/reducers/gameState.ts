import { createSlice } from "@reduxjs/toolkit";

type GameStage = "pre-game" | "in-game" | "post-game";

const initialState: { stage: GameStage } = {
  stage: "pre-game",
};

export const gameStateSlice = createSlice({
  name: "game_state",
  initialState,
  reducers: {
    startGame: (state) => {
      state.stage = "in-game"
    },
    endGame: (state) => {
      state.stage = "post-game"
    },
    restartGame: (state) => {
      state.stage = "pre-game"
    },
  },
});
