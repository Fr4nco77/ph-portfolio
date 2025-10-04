import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(5),
      description: z.string().min(10),
      image: image(),
      featured: z.boolean().optional(),
    }),
});

// const blogCollection = defineCollection({});

export const collections = {
  projects: projectCollection,
  //   'blog': blogCollection,
};
