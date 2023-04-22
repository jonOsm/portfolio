import Card from "@/components/Card"
import { type ProjectData } from "@/interfaces"
import { activeProjects, completedProjects } from "@/data/projects"
import ProjectSection from "@/components/ProjectsSection"

export default function Home() {
  return (
    <>
      <ProjectSection name="Active" projects={activeProjects} />
      <ProjectSection name="Completed" projects={completedProjects} />
    </>
  )
}
