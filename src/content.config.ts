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
      cover: image(),
    }),
});

const stories = defineCollection({
  // Load Markdown and MDX files in the `src/content/stories/` directory.
  // Supports flat files (post.md) and folder-based posts (folder/index.mdx) with co-located images.
  loader: glob({
    base: "./src/content/stories",
    pattern: "**/*.{md,mdx}",
    generateId: ({
      entry,
      data,
    }: {
      entry: string;
      data: Record<string, unknown>;
    }): string => {
      // Check if data.slug exists and is a string
      if (typeof data.slug === "string") {
        return data.slug;
      }

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
      slug: z.string().optional(), // Override generated id for nested folder posts
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: z.optional(image()),
    }),
});

export const collections = { stories, galleries };
