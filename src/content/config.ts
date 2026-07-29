import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const recipes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recipes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    yield: z.string().optional(),
    ingredients: z.array(z.string()),
    directions: z.array(z.string()),
    notes: z.array(z.string()).default([]),
  }),
});

export const collections = { recipes };
