import { StaticImageData } from "next/image"

export interface ProjectData {
  name: string
  description: string
  demoLink?: string
  githubLink?: string
  img?: StaticImageData | string
  tags: Array<string>
}
