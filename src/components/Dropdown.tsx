import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { ChangeEvent } from "react";
import { IconLabel } from "./IconLabel";

type OptionValue = string | number;

interface DropdownProps<T extends OptionValue> {
  label: string;
  icon?: IconDefinition;
  options: T[];
  value: T;
  onChange: (value: string) => void;
  displayer?: (value: T) => string; // Function that determines how to display the value
  disabled?: boolean
}

export function Dropdown<TOptionValue extends OptionValue>({
  label,
  icon,
  value,
  options,
  onChange,
  displayer,
  disabled = false
}: DropdownProps<TOptionValue>) {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="flex w-full justify-between">
      <label>
        <IconLabel icon={icon} label={label}/>
      </label>
      <select onChange={handleChange} value={value} disabled={disabled}>
        {options.map((option) => (
          <option value={option} key={option}>
            {displayer ? displayer(option) : option}
          </option>
        ))}
      </select>
    </div>
  );
}
