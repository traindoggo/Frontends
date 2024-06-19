// this does NOT mean server component
// server ACTION
"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
  await prisma.post.create({
    data: {
      title: formData.get("title") as string,
      slug: (formData.get("title") as string)
        .replace(/s+/g, "-")
        .toLocaleLowerCase() as string,
      content: formData.get("content") as string,
    },
  });

  revalidatePath("/posts");
}

export async function editPost(formData: FormData, id: string) {
  await prisma.post.update({
    where: {
      id: id,
    },
    data: {
      title: formData.get("title") as string,
      slug: (formData.get("title") as string)
        .replace(/s+/g, "-")
        .toLocaleLowerCase() as string,
      content: formData.get("content") as string,
    },
  });

  revalidatePath("/posts");
}

export async function deletePost(id: string) {
  await prisma.post.delete({
    where: {
      id: id,
    },
  });
}
