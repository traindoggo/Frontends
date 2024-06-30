"use server";

import { prisma } from "@/lib/db";
import { TBlogSchema, blogSchema } from "@/lib/types";
import { revalidatePath } from "next/cache";

export async function createPost(data: TBlogSchema) {
  const validateBlogFormData = blogSchema.safeParse(data);

  if (!validateBlogFormData.success) {
    console.error(validateBlogFormData.error);
    return;
  }

  // when data.title is empty string as "",
  // insert data.title = "empty" string :^)
  const resp = await prisma.blog.create({
    data: {
      title: validateBlogFormData.data.title || "empty",
      content: validateBlogFormData.data.content,
    },
  });

  // TODO: redirect to blog/edit page
  revalidatePath("/");
}
