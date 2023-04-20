import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Card from "@/components/Card"

interface Card {
  name: string
  description: string
}

export default function Home() {
  const activeProjects: Card[] = [
    {
      name: "Pluto Pizza",
      description:
        "An ecommerce application for ordering from a fictional pizzaria.",
    },
  ]

  return (
    <>
      <Header></Header>
      <div className="flex flex-col max-w-screen-xl gap-3 px-4 pt-8 pb-3 mx-auto mb-3 sm:flex-row sm:px-6 sm:pt-12 sm:pb-9 lg:px-8">
        <h2 className="font-mono text-xl font-semibold">ACTIVE</h2>
        {activeProjects.map((c: Card) => (
          <Card key={c.name} name={c.name} description={c.description} />
        ))}
      </div>
      <Footer></Footer>
    </>
  )
}
