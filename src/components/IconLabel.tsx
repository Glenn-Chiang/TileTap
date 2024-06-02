import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface IconLabelProps {
  icon?: IconDefinition,
  label: string
}

export function IconLabel({icon, label}: IconLabelProps) {
  return (
    <div className="flex gap-1 items-center">
      {icon && <FontAwesomeIcon icon={icon}/>}
      {label}
    </div>
  )
}