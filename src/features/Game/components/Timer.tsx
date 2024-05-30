import { useEffect, useState } from "react";
import { timeLimit, useEndGame } from "../game_logic/game_logic";
import { useGameState } from "../reducers/selectors";

export function Timer() {
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const endGame = useEndGame();
  const gameState = useGameState();

  useEffect(() => {
   
    if (timeLeft <= 0) {
      endGame()
      return;
    }
    
    const timeout = setTimeout(() => {
      if (gameState.stage === "post-game") return;

      setTimeLeft(prev => prev - 1);
    }, 1000)

    return () => clearTimeout(timeout)
  }, [timeLeft])

  return (
    <>
      {timeLeft}
    </>
  )
}