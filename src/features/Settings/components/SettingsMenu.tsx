import React from "react";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { gridSizes, timeLimits } from "../../Game/game_logic/constants";
import { gridSlice, selectGrid } from "../../Game/reducers/grid";
import { selectTimer, timerSlice } from "../../Game/reducers/timer";

export function SettingsMenu() {
  const dispatch = useAppDispatch();

  const gridSize = useAppSelector(selectGrid).gridSize;
  const setGridSize: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    dispatch(gridSlice.actions.setGridSize(Number(event.target.value)));
  };

  const timeLimit = useAppSelector(selectTimer).timeLimit;
  const setTimeLimit: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    dispatch(timerSlice.actions.setTimeLimit(Number(event.target.value)));
  };

  return (
    <>
      <div className="bg-white rounded p-2 flex justify-between">
        Grid size
        <SettingDropdown
          options={gridSizes}
          value={gridSize}
          changeHandler={setGridSize}
          displayer={(gridSize: number) => `${gridSize} x ${gridSize}`}
        />
      </div>
      <div className="bg-white rounded p-2 flex justify-between">
        Time limit
        <SettingDropdown
          options={timeLimits}
          value={timeLimit}
          changeHandler={setTimeLimit}
          displayer={(time: number) => `${time}s`}
        />
      </div>
    </>
  );
}

interface DropdownProps {
  options: number[];
  value: number;
  changeHandler: React.ChangeEventHandler;
  displayer?: (value: number) => string; // Function that determines how to display the value
}

function SettingDropdown({
  value,
  options,
  changeHandler,
  displayer,
}: DropdownProps) {
  return (
    <select onChange={changeHandler} value={value}>
      {options.map((option) => (
        <option value={option} key={option}>
          {displayer ? displayer(option) : option}
        </option>
      ))}
    </select>
  );
}
