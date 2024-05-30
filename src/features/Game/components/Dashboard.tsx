import { useAppSelector } from "../../../redux_store/store"
import { timeLimit } from "../game_logic/game_logic";
import { useGameState } from "../reducers/selectors";
import { Timer } from "./Timer";

export function Dashboard() {
  const scoreState = useAppSelector(state => state.score);
  const gameState = useGameState();

  return (
    <div className="bg-white rounded p-2 text-xl flex justify-between">
      <div className="w-1/2 text-slate-400 flex flex-col items-center">
        SCORE
        <span className="text-4xl text-sky-400">{scoreState.score}</span>
      </div>
      <div className="w-1/2 text-slate-400 flex flex-col items-center">
        TIME
        <span className="text-4xl text-amber-400">
          {gameState.stage === "pre-game"
            ? <>{timeLimit}</>
            : <Timer/>
          }
        </span>
      </div>
    </div>
  )
}