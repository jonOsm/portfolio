import Image, { StaticImageData } from "next/image"

interface CardProps {
  name: string
  description: string
  img?: StaticImageData | string,
  tags: Array<string>
}

export default function Card({ name, description, img, tags }: CardProps) {
  const tagClassMap = {
    default: "text-gray-600 bg-gray-100 dark:bg-gray-600 dark:text-gray-100",
    typescript: "text-blue-600 bg-blue-100 dark:bg-blue-600 dark:text-blue-100",
    javascript:
      "text-purple-600 bg-purple-100 dark:bg-purple-600 dark:text-purple-100",
    react: "text-blue-600 bg-blue-100 dark:bg-blue-600 dark:text-blue-100",
    next: "text-blue-600 bg-blue-100 dark:bg-blue-600 dark:text-blue-100",
    vue: "text-green-600 bg-green-100 dark:bg-green-600 dark:text-green-100",
    tailwind: "text-cyan-600 bg-cyan-100 dark:bg-cyan-600 dark:text-cyan-100",
    python:
      "text-yellow-600 bg-yellow-100 dark:bg-yellow-600 dark:text-yellow-100",
    "fast-api":
      "text-yellow-600 bg-yellow-100 dark:bg-yellow-600 dark:text-yellow-100",
    "c#": "text-green-600 bg-green-100 dark:bg-green-600 dark:text-green-100",
  }

  const buildTagClass = (tagName: string) => {
    let dynamicClass =
      tagClassMap[tagName as keyof typeof tagClassMap] || tagClassMap.default
    let baseClass = "whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs"
    return baseClass + " " + dynamicClass
  }

  return (
    <article className="sm:w-1/3 rounded-xl bg-gradient-to-tr from-orange-300 via-slate-600 to-cyan-300 p-0.5 shadow-xl transition hover:shadow-sm dark:shadow-gray-700/25">
      <div className="rounded-[10px] h-full bg-white p-4 dark:bg-gray-900 sm:p-6">
        {/* Fix: Passing string instead of StaticImageData will break Image*/}
        {img
          ? <Image className="object-cover mb-2 border-2 rounded h-36 sm:h-48" src={img} placeholder="blur" alt={`Image of project: ${name}`} ></Image>
          : <div className="bg-gray-300 h-34 sm:h-48"></div>
        }
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
              <span key={t} className={buildTagClass(t)}>
                {t}
              </span>
            )
          })}
        </div>
      </div>
    </article >
  )
}
