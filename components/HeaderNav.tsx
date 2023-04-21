import Link from "next/link";
import HeaderNavItem from "./HeaderNavItem";

export default function HeaderNav() {

  return (
    <menu >
      <ul className="flex items-end justify-start max-w-2xl font-mono border-b">
        <HeaderNavItem label="Projects" href="/" activeUrls={['/', '/projects']} />
        <HeaderNavItem label="Skills" href="/skills" />
        <HeaderNavItem label="About" href="/about" />
        <HeaderNavItem label="Processes" href="/processes" />
      </ul>
    </menu>
  )
}