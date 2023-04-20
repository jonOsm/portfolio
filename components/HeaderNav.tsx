export default function HeaderNav() {
  return (
    <menu >
      <ul className="flex items-end justify-start max-w-2xl font-mono border-b">
        <li className="flex-1">
          <a className="relative block p-2 sm:p-4" href="">
            <span
              className="absolute inset-x-0 w-full h-px bg-orange-600 -bottom-px"
            ></span>

            <div className="flex items-center justify-center gap-4">

              <span className="text-xs font-medium text-gray-300"> Projects </span>
            </div>
          </a>
        </li>

        <li className="flex-1">
          <a className="relative block p-2 sm:p-4" href="">
            <div className="flex items-center justify-center gap-4">

              <span className="text-xs font-medium text-gray-300"> Skills </span>
            </div>
          </a>
        </li>

        <li className="flex-1">
          <a className="relative block p-2 sm:p-4" href="">
            <div className="flex items-center justify-center gap-4">


              <span className="text-xs font-medium text-gray-300">About</span>
            </div>
          </a>
        </li>

        <li className="flex-1">
          <a className="relative block p-2 sm:p-4" href="">
            <div className="flex items-center justify-center gap-4">

              <span className="text-xs font-medium text-gray-300"> Processes </span>
            </div>
          </a>
        </li>
      </ul>
    </menu>
  )
}