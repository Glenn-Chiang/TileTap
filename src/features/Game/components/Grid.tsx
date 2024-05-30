import { useAppSelector } from "../../../redux_store/store";
import { useCheckHit } from "../game_logic/game_logic";
import { GridPosition } from "../reducers/grid";
import { GameOverDisplay } from "./GameOverDisplay";

export function Grid() {
  const grid = useAppSelector(state => state.grid);
  const isGameOver = useAppSelector(state => state.gameState).stage === "post-game";

  return (
    <div className="relative">
      <ul className={`flex flex-col gap-1 ${isGameOver && "opacity-50"}`}>
        {grid.map((values, index) => <Row values={values} index={index} key={index} />)}
      </ul>
      {isGameOver &&
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <GameOverDisplay />
        </div>
      }
    </div>
  )
}

function Row({ values, index: rowIndex }: { values: boolean[], index: number }) {
  return (
    <ul className="flex flex-1 gap-1">
      {values.map((value, colIndex) => <Tile active={value} position={{ row: rowIndex, col: colIndex }} key={colIndex} />)}
    </ul>
  )
}

interface TileProps {
  active: boolean,
  position: GridPosition
}

function Tile({ active, position }: TileProps) {
  const activeColor = "bg-sky-500"
  const inactiveColor = "bg-white"

  const gameState = useAppSelector(state => state.gameState);

  const checkHit = useCheckHit();
  const handleClick = () => {
    checkHit(position);
  }

  return (
    <button disabled={gameState.stage === "post-game"} onClick={handleClick} className={`flex flex-1 aspect-square rounded ${active ? activeColor : inactiveColor}`}></button>
  )
}