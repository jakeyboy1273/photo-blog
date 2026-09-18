import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const galleries = defineCollection({
  loader: glob({
    pattern: "**/*.{yaml,yml,json}",
    base: "./src/content/galleries",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tripDate: z.coerce.date(),
      pubDate: z.coerce.date(),
      cover: image(),
      images: z
        .array(
          z.object({
            file: image(),
            caption: z.string().optional(),
          }),
        )
        .default([]),
    }),
});

const stories = defineCollection({
  // Load Markdown and MDX files in the `src/content/stories/` directory.
  // Supports flat files (post.md) and folder-based posts (folder/index.mdx) with co-located images.
  loader: glob({
    base: "./src/content/stories",
    pattern: "**/*.{md,mdx}",
    generateId: ({ entry }: { entry: string }): string => {
      // Convert path to URL-friendly id: "story/index.mdx" -> "story"
      return entry
        .replace(/\.(md|mdx)$/, "")
        .replace(/\/index$/, "")
        .replace(/^index$/, "index");
    },
  }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tripDate: z.coerce.date(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: z.optional(image()),
      heroCaption: z.string().optional(),
    }),
});

export const collections = { stories, galleries };
