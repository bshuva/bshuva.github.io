import { z, defineCollection } from "astro:content"

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    thumbnail: z.string(),
    title: z.string(),
    date: z.date(),
    categories: z.array(z.string()),
    project_bg_color: z.string(),
    project_fg_color: z.string(),
  }),
})

export const collections = {
  projects: projectsCollection,
}
