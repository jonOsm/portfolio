import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
interface ButtonProps {
  icon: string,
  text: string
}
export default function Button({ icon, text }: ButtonProps) {
  const iconMap = {
    'github': faGithub
  }

  return (
    <div className="p-1 border-2 border-black rounded w-30 hover:bg-orange-500">
      <a href="#">
        <FontAwesomeIcon icon={faGithub} />
        <span className="ml-1 text-sm">{text}</span>
      </a>
    </div>
  )
}