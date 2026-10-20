import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // shorter name for the home slider, if the title is long
      short: z.string().optional(),
      order: z.number(),
      tier: z.enum(['headliner', 'feature', 'archive']),
      // project color takes over the page; archive projects stay ink
      color: z.string().default('#0b0b0c'),
      colorInk: z.string().default('#fbfaf6'),
      year: z.string(),
      role: z.string(),
      tagline: z.string(),
      tags: z.array(z.string()).default([]),
      scrawl: z.string().optional(),
      // per-project display face (see src/data/fonts.ts)
      font: z.enum(['echo', 'sl', 'hole66', 'robot', 'us', 'arnold']).optional(),
      handTitle: z.string().optional(),
      fan: z.object({
        a: image().optional(),
        b: image().optional(),
        c: image(),
      }),
      heroVideo: z.string().optional(),
      heroVideoVertical: z.boolean().default(false),
      heroHasSound: z.boolean().default(false),
      spec: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
      credits: z.string().optional(),
      links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    }),
});

export const collections = { projects };
