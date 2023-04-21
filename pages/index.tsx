import Card from "@/components/Card"
import { type ProjectData } from "@/interfaces"
import { activeProjects, completedProjects } from "@/data/projects"
import CardSection from "@/components/CardSection"

export default function Home() {
  return (
    <>
      <CardSection name="Active">{
        activeProjects.map((c: ProjectData) => (
          <Card
            key={c.name}
            img={c.img}
            name={c.name}
            description={c.description}
            tags={c.tags}
          />
        ))
      } </CardSection>
      <CardSection name="Complete">{
        completedProjects.map((c: ProjectData) => (
          <Card
            key={c.name}
            img={c.img}
            name={c.name}
            description={c.description}
            tags={c.tags}
          />
        ))
      } </CardSection>
    </>
  )
}
