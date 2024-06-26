import { useAppSelector } from "../../../store/store"
import { selectGameState } from "../reducers/gameState";
import { selectScore } from "../reducers/score";
import { selectTimer } from "../reducers/timer";
import { Timer } from "./Timer";

export function Dashboard() {
  const scoreState = useAppSelector(selectScore);
  const gameState = useAppSelector(selectGameState);
  const timeLimit = useAppSelector(selectTimer).timeLimit;

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