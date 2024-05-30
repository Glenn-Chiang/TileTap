import { useAppSelector } from "../../../redux_store/store"

export function Dashboard() {
  const scoreState = useAppSelector(state => state.score);

  return (
    <div className="bg-white rounded p-2 text-xl flex justify-between">
      <div className="w-1/2 text-slate-400 flex flex-col items-center">
        SCORE
        <span className="text-4xl text-sky-400">{scoreState.score}</span>
      </div>
      <div className="w-1/2 text-slate-400 flex flex-col items-center">
        TIME
        <span className="text-4xl text-amber-400">0</span>
      </div>
    </div>
  )
}