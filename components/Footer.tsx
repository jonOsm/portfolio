import Link from "next/link";
import A from "./A";

export default function Footer() {
  return (

    <footer className="mt-10 bg-secondary">
      <p className="w-full pt-8 mx-auto text-sm text-center text-gray-400 sm:order-first sm:mt-0">
        Crafted using
        <A href="https://nextjs.org"> Next.js </A> and
        <A href="http://hyperui.dev"> Hyper UI </A>.
      </p>
      <p className="text-xs text-gray-700 opacity-30">
        {" Pineapple on pizza is an atrocity, don't @ me."}
      </p>
    </footer>
  )
}