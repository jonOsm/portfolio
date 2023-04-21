import { ProjectData } from "@/interfaces"
import mapGenImage from "../public/map-gen.png"

export const activeProjects: ProjectData[] = [
  {
    name: "Simple Blueprint Generation (Web App)",
    description: "Web Application for generation tile-based blueprints.",
    // img: "/map-gen.png",
    img: mapGenImage,
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
    description: "Library for rendering simple tile-based blueprints.",
    tags: ["typescript"],
  },
]

export const completedProjects: ProjectData[] = [
  {
    name: "Vessels",
    description:
      "A polished prototype exploring implementation of 3D platforming mechanics.",
    tags: ["c#", "unity", "blender"],
  },
  {
    name: "Zen Three",
    description:
      "An endless match-3 game designed to relax and lull players to sleep. Intended to explore Game Development in Godot.",
    tags: ["GodotScript", "Godot"],
  },
  {
    name: "Mint Sign Up Page",
    description:
      "Recreation of the Mint Sign up page that contributed to scoring my first development position.",
    tags: ["javascript", "css", "html"],
  },
  {
    name: "Google Search Page",
    description:
      "Recreation of the google search page. Also contributed to landing my frist development role.",
    tags: ["javascript", "css", "html"],
  },
]
