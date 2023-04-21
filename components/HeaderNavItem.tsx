interface HeaderNavItemProps {
  label: string,
  href: string,
  activeUrls?: string[]
}

import Link from "next/link";
import { useRouter } from "next/router";
export default function HeaderNavItem({ label, href, activeUrls }: HeaderNavItemProps) {

  const activeRoute = useRouter().pathname
  const active = !activeUrls ? activeRoute === href : activeUrls.indexOf(activeRoute) > -1
  return (
    <li className="flex-1">
      <Link href={href}>
        <div className="relative block p-2 sm:p-4">
          {active &&
            <span

              className="absolute inset-x-0 w-full h-px bg-orange-600 -bottom-px"
            ></span>
          }

          <div className="flex items-center justify-center gap-4">

            <span className="text-xs font-medium text-gray-300"> {label} </span>
          </div>
        </div>
      </Link>
    </li>
  );
}