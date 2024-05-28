import { GridPosition, useGrid, useGridDispatch } from "../state/GridProvider";

export function Grid() {
  const grid = useGrid();
  if (!grid) return <></>;

  return (
    <ul className="flex flex-col gap-1 w-3/4 md:w-1/2 lg:w-1/3">
      {grid.map((values, index) => <Row values={values} index={index}/>)}
    </ul>
  )
}

function Row({ values, index: rowIndex }: { values: boolean[], index: number }) {
  return (
    <ul className="flex flex-1 gap-1">
      {values.map((value, colIndex) => <Tile active={value} position={{row: rowIndex, col: colIndex}}/>)}
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

  const gridDispatch = useGridDispatch();

  const handleClick = () => {
    if (!gridDispatch) return;

    if (active) {
      // If user clicks on active tile, deactivate it
      gridDispatch({ type: "deactivate_tile", position: { row: position.row, col: position.col } })
    } else {
      // If user clicks on inactive tile
    }
  }

  return (
    <div onClick={handleClick} className={`flex flex-1 aspect-square rounded ${active ? activeColor : inactiveColor}`}></div>
  )
}