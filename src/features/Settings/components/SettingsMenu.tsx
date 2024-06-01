import React from "react";
import { gridSizes, timeLimits } from "../../Game/game_logic/constants";
import { useAppDispatch } from "../../../redux_store/store";
import { gridSlice } from "../../Game/reducers/grid";
import { timerSlice } from "../../Game/reducers/timer";

export function SettingsMenu() {
  const dispatch = useAppDispatch();

  const setGridSize: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    dispatch(gridSlice.actions.setGridSize(Number(event.target.value)));
  };

  const setTimeLimit: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    dispatch(timerSlice.actions.setTimeLimit(Number(event.target.value)));
  };

  return (
    <>
      <h1>Settings</h1>
      <div className="bg-white rounded p-2 flex justify-between">
        Grid size
        <SettingDropdown options={gridSizes} changeHandler={setGridSize} displayer={(gridSize: number) => `${gridSize} x ${gridSize}`}/>
      </div>
      <div className="bg-white rounded p-2 flex justify-between">
        Time limit
        <SettingDropdown options={timeLimits} changeHandler={setTimeLimit} displayer={(time: number) => `${time}s`}/>
      </div>
    </>
  );
}

interface DropdownProps {
  options: number[],
  changeHandler: React.ChangeEventHandler,
  displayer?: (value: number) => string // Function that determines how to display the value
}

function SettingDropdown({
  options,
  changeHandler,
  displayer
}: DropdownProps) {
  return (
    <select onChange={changeHandler}>
      {options.map((option) => (
        <option value={option} key={option}>
          {displayer ? displayer(option) : option}
        </option>
      ))}
    </select>
  );
}
