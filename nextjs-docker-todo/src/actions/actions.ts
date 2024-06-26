"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  const resp = await prisma.blog.create({
    data: {
      title: title,
      content: content,
    },
  });

  console.log(resp);

  revalidatePath("/");
}
