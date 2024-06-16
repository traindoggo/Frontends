import { z } from "zod";

export const todoSchema = z.object({
  id: z.number(),
  body: z.string(),
  description: z.string(),
  done: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type TTodoSchema = z.infer<typeof todoSchema>;
