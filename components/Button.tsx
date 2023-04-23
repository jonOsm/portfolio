import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface ButtonProps {
  icon?: IconDefinition
  link?: string
  disabled?: boolean
  text: string
}
export default function Button({
  icon,
  text,
  link,
  disabled = false,
}: ButtonProps) {
  disabled = typeof link === "undefined"
  const colorClasses = disabled
    ? "bg-gray-300 text-gray-500 pointer-events-none "
    : "text-white rounded-md bg-secondary hover:bg-cyan-500"
  return (
    <a
      className={`flex items-center justify-center w-full gap-3 p-1 text-sm ${colorClasses}`}
      href={link}
      target="_blank"
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      <span className="">{text}</span>
    </a>
  )
}
