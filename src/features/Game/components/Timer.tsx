import { useEffect, useState } from "react";
import { timeLimit, useEndGame } from "../game_logic/game_logic";

export function Timer() {
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const endGame = useEndGame();

  useEffect(() => {
    if (timeLeft <= 0) {
      endGame()
      return;
    }

    const timeout = setTimeout(() => {
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