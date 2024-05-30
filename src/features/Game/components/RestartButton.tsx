import { useResetGame } from "../game_logic/game_logic";

export function RestartButton() {
  const resetGame = useResetGame();
  return (
    <button onClick={() => resetGame()} className="bg-sky-100 text-sky-500 p-2 rounded">
      RESTART
    </button>
  )
}