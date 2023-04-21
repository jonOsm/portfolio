import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Card from "@/components/Card"
import { type ProjectData } from "@/interfaces"
import { activeProjects, completedProjects } from "@/data/projects"

export default function Home() {
  return (
    <>
      <Header></Header>
      <div className="flex flex-col flex-wrap max-w-screen-xl gap-8 px-4 pt-8 pb-3 mx-auto mb-3 sm:flex-row sm:px-6 sm:pt-12 sm:pb-0 lg:px-8">
        <h2 className="font-mono text-2xl font-semibold">ACTIVE</h2>
        <div className="flex flex-col gap-3 sm:justify-between sm:flex-row">
          {activeProjects.map((c: ProjectData) => (
            <Card
              key={c.name}
              img={c.img}
              name={c.name}
              description={c.description}
              tags={c.tags}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col flex-wrap max-w-screen-xl gap-8 px-4 pt-8 pb-3 mx-auto mb-3 sm:flex-row sm:px-6 sm:pt-12 sm:pb-9 lg:px-8">
        <h2 className="font-mono text-2xl font-semibold">Complete</h2>
        <div className="flex flex-col gap-3 sm:justify-between sm:flex-row">
          {completedProjects.map((c: ProjectData) => (
            <Card
              key={c.name}
              name={c.name}
              description={c.description}
              tags={c.tags}
            />
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}
