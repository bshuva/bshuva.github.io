import { z, defineCollection } from "astro:content";

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
});

const journalsCollection = defineCollection({
  type: "content",
  schema: z.object({
    date: z.date(),
    title: z.string(),
    author: z.string(),
    excerpt: z.string(),
  }),
});

export const collections = {
  projects: projectsCollection,
  journals: journalsCollection,
};
