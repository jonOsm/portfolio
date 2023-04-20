export default function Footer() {
  return (

    <footer className="bg-secondary">
      <div className="pt-6 mt-12 border-t border-gray-100">
        <div className="text-center sm:flex sm:justify-between sm:text-left">
          {/* <p className="text-sm text-gray-500">
            <span className="block sm:inline">All rights reserved.</span>

            <a
              className="inline-block text-white underline transition hover:text-gray-200"
              href="r"
            >
              Terms & Conditions
            </a>

            <span>&middot;</span>

            <a
              className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
              href="#"
            >
              Privacy Policy
            </a>
          </p> */}

          <p className="mt-4 ml-3 text-sm text-gray-400 sm:order-first sm:mt-0">
            Crafted using Next and Hyper UI
          </p>
        </div>
      </div>
    </footer>
  )
}