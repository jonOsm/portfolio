interface CardProps {
  name: string
  description: string
  tags: Array<string>
}

export default function Card({ name, description, tags }: CardProps) {
  const tagClassMap = {
    typescript: "text-blue-600 dark:bg-blue-600 dark:text-blue-100",
  }

  return (
    <article className="w-1/3 rounded-xl bg-gradient-to-tr from-orange-300 via-slate-600 to-cyan-300 p-0.5 shadow-xl transition hover:shadow-sm dark:shadow-gray-700/25">
      <div className="rounded-[10px] h-full bg-white p-4 !pt-20 dark:bg-gray-900 sm:p-6">
        <a href="#">
          <h3 className="mt-0.5 text-lg font-medium text-gray-900 dark:text-white">
            {" "}
            {name}
          </h3>
        </a>
        <p>{description}</p>

        <div className="flex flex-wrap gap-1 mt-4">
          {tags.map((t: string) => {
            return (
              <span
                key={t}
                className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100"
              >
                {t}
              </span>
            )
          })}

          <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100">
            JavaScript
          </span>
        </div>
      </div>
    </article>
  )
}
