import { useAppSelector } from "../../../redux_store/store";
import { useCheckHit } from "../game_logic/game_logic";
import { GridPosition } from "../reducers/grid";

export function Grid() {
  const grid = useAppSelector(state => state.grid);
  if (!grid) return <></>;

  return (
    <ul className="flex flex-col gap-1">
      {grid.map((values, index) => <Row values={values} index={index} key={index} />)}
    </ul>
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

  const checkHit = useCheckHit();

  const handleClick = () => {
    checkHit(position);
  }

  return (
    <button onClick={handleClick} className={`flex flex-1 aspect-square rounded ${active ? activeColor : inactiveColor}`}></button>
  )
}