import { PropsWithChildren } from "react"

//Okay, I admit it - this is lazily named
interface AProps {
  href: string
}
export default function A({ href, children }: PropsWithChildren<AProps>) {

  return <a href={href} className="inline text-blue-400 hover:text-orange-400" >{children}</a>
}