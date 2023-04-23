import { ProjectData } from "@/interfaces"
import mapGenAppImage from "../public/map-gen.png"
import mintHomeImage from "../public/mint-homepage.png"
import googleHomePage from "../public/google-homepage.png"
import portfolioImage from "../public/recursion-is-fun.png"
import mapGenLibImage from "../public/map-gen-cli.png"
import vesselsTitleImage from "../public/vessels_prototype_start_sceen.png"
import zenThreeImage from "../public/zen-three.png"

export const activeProjects: ProjectData[] = [
  {
    name: "Simple Blueprint Generation (Web App)",
    description: "Web Application for generation tile-based blueprints.",
    // img: "/map-gen.png",
    demoLink: "https://map-gen-app.vercel.app/",
    githubLink: "https://github.com/jonOsm/map_gen_app",
    img: mapGenAppImage,
    tags: ["typescript", "react", "next", "tailwind"],
  },
  {
    name: "Pluto Pizza",
    description:
      "An ecommerce application for ordering from a fictional pizzaria. Note: Pausing dev to rewrite in Next.",
    tags: ["typescript", "vue", "tailwind", "python", "fast-api"],
  },
  {
    name: "Blueprint Generation Library",
    img: mapGenLibImage,
    description: "Library for rendering simple tile-based blueprints.",
    githubLink: "https://github.com/jonOsm/map_gen_ts",
    tags: ["typescript"],
  },
  {
    name: "Portfolio Website",
    description: "This site. Yes I'm counting it.",
    img: portfolioImage,
    demoLink: "https://en.wikipedia.org/wiki/Recursion_(computer_science)",
    githubLink: "https://github.com/jonOsm/portfolio",
    tags: ["typescript", "next", "tailwind", "hyper ui"],
  },
]

export const completedProjects: ProjectData[] = [
  {
    name: "Vessels",
    img: vesselsTitleImage,
    demoLink: "https://jonosm.itch.io/vessels-prototype",
    githubLink: "https://github.com/jonOsm/Vessels",
    description:
      "A polished prototype exploring implementation of 3D platforming mechanics.",
    tags: ["c#", "unity", "blender"],
  },
  {
    name: "Zen Three",
    img: zenThreeImage,
    demoLink: "https://jonosm.itch.io/zen-three",
    githubLink: "https://github.com/jonOsm/zen-three",
    description:
      "An endless match-3 game designed to relax and lull players to sleep. Intended to explore Game Development in Godot.",
    tags: ["GodotScript", "Godot"],
  },
  {
    name: "Mint Sign Up Page",
    img: mintHomeImage,
    demoLink: "https://mint-signup-page-fawn.vercel.app/",
    githubLink: "https://github.com/jonOsm/mint_signup_page",
    description:
      "Recreation of the Mint Sign up page that contributed to scoring my first development position.",
    tags: ["javascript", "css", "html"],
  },
  {
    name: "Google Search Page",

    demoLink: "https://google-homepage-lake.vercel.app/",
    img: googleHomePage,
    githubLink: "https://github.com/jonOsm/google-homepage",
    description:
      "Recreation of the google search page. Also contributed to landing my frist development role.",
    tags: ["javascript", "css", "html"],
  },
]
