import { ProjectData } from "@/interfaces"
import ProjectCard from "./ProjectCard"
interface CardSectionProps {
  name: string
  projects: ProjectData[]
}
export default function CardSection({ name, projects }: CardSectionProps) {
  // tailwind classes won't load unless the full string is found in a file, so yeah:
  // sm:col-span-2 sm:col-span-1 sm:col-span-3 (just incase)

  const gridSize = 3
  const emptyCells = gridSize - (projects.length % gridSize)

  return (
    <div className="flex flex-col max-w-screen-xl gap-8 px-4 pt-8 pb-3 mx-auto mb-3 sm:px-6 sm:pt-12 sm:pb-0 lg:px-8">
      <h2 className="font-mono text-2xl font-semibold">{name}</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {projects.map((c: ProjectData) => (
          <ProjectCard key={c.name} {...c} />
        ))}
        <div
          className={`hidden sm:flex sm:col-span-${emptyCells} bg-cyan-100 rounded-xl flex justify-center items-center font-mono text-black-500 p-5`}
        >
          {"More projects to come!"}
        </div>
      </div>
    </div>
  )
}
