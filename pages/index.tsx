import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Card from "@/components/Card"
import { type CardData } from "@/interfaces"
import { activeProjects, completedProjects } from "@/data/projects"

export default function Home() {
  return (
    <>
      <Header></Header>
      <div className="flex flex-col flex-wrap max-w-screen-xl gap-8 px-4 pt-8 pb-3 mx-auto mb-3 sm:flex-row sm:px-6 sm:pt-12 sm:pb-9 lg:px-8">
        <div className="flex flex-col gap-3">
          <h2 className="font-mono text-2xl font-semibold">ACTIVE</h2>
          <div className="flex justify-between gap-3">
            {activeProjects.map((c: CardData) => (
              <Card
                key={c.name}
                name={c.name}
                description={c.description}
                tags={c.tags}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-mono text-2xl font-semibold">COMPLETE</h2>
          <div className="flex gap-3 ">
            {completedProjects.map((c: CardData) => (
              <Card
                key={c.name}
                name={c.name}
                description={c.description}
                tags={c.tags}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-mono text-2xl font-semibold">THE GRAVEYARD</h2>
          <div className="flex gap-3 ">
            {activeProjects.map((c: CardData) => (
              <Card
                key={c.name}
                name={c.name}
                description={c.description}
                tags={c.tags}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}
