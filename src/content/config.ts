import { z, defineCollection } from "astro:content";

const otherProjectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    thumbnail: z.string(),
    title: z.string(),
    date: z.date(),
    categories: z.array(z.string()),
  }),
});

const uxProjectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    thumbnail: z.string(),
    title: z.string(),
    date: z.date(),
    categories: z.array(z.string()),
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
  otherProjects: otherProjectsCollection,
  uxProjects: uxProjectsCollection,
  journals: journalsCollection,
};
