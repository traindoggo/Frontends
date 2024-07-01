import { z } from "zod";

/**
 * Create Blog Schema
 */
export const blogSchema = z.object({
  title: z.string(),
  content: z.string(),
});

export type TBlogSchema = z.infer<typeof blogSchema>;
