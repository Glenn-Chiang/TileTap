import { useEffect, useState } from "react";
import { useEndGame } from "../game_logic/game_logic";
import { useAppSelector } from "../../../store/store";
import { selectTimer } from "../reducers/timer";
import { selectGameState } from "../reducers/gameState";

export function Timer() {
  const timeLimit = useAppSelector(selectTimer).timeLimit;
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const endGame = useEndGame();
  const gameState = useAppSelector(selectGameState)

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