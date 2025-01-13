import { defineCollection, z } from 'astro:content';

export const collections = {
  blog: defineCollection({
    schema: z.object({
      title: z.string(),
      date: z.string(),
      author: z.string(),
      category: z.string(),
      tags: z.array(z.string()),
      description: z.string(),
    }),
  }),
}; 