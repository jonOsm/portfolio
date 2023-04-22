import HeaderNav from "./HeaderNav";
import Image from "next/image";
export default function Header() {
  return (
    <header aria-label="Page Header" className=" bg-secondary">
      <div className="max-w-screen-xl px-4 pt-8 pb-3 mx-auto sm:px-6 sm:pt-12 sm:pb-9 lg:px-8">
        <div className="sm:flex sm:items-center">
          <Image className="mx-auto mb-3 border-4 border-orange-500 rounded-full sm:mx-0 w-36 h-36" itemType="" width="200" alt="An image of Jonathan Osmond lookin' mighty dapper." height="200" src="/me_kinda_malding.jpeg"></Image>
          <div className="text-center sm:ml-8 sm:text-left">
            <h1 className="font-mono font-bold text-white sm:text-[2em]">
              Jonathan Osmond
            </h1>
            <p className="mt-1.5 text-sm font-mono text-orange-500 sm:text-[1.2em]">
              Software Developer
            </p>
          </div>
        </div>
        <div className="mt-6">
          <HeaderNav></HeaderNav>
        </div>
      </div>
    </header>
  )
}