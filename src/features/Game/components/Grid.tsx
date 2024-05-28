import { randomBoolean } from "../../../utils/randomUtils";

export function Grid() {
  const numRows = 4;
  const numCols = 4;
  const grid = Array.from({ length: numRows}, () => Array.from({ length: numCols}, () => randomBoolean()))
  
  return (
    <ul className="flex flex-col gap-1 w-3/4 md:w-1/2 lg:w-1/3">
      {grid.map((values) => <Row values={values}/>)}
    </ul>
  )
}

function Row({values} : {values: boolean[]}) {
  return (
    <ul className="flex flex-1 gap-1">
      {values.map(value => <Tile value={value}/>)}
    </ul>
  )
}

function Tile({value}: {value: boolean}) {
  const activeColor = "bg-sky-500"
  const inactiveColor = "bg-white"
  return (
    <div className={`flex flex-1 aspect-square rounded ${value ? activeColor : inactiveColor}`}>
      
    </div>
  )
}