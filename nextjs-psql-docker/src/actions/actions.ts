"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
  // TODO: validation
  const title = formData.get("title") as string;

  await prisma.task.create({
    data: {
      title: title,
    },
  });

  revalidatePath("/");
}
