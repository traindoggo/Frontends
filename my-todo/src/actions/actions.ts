"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createTodo(formData: FormData) {
  const body = formData.get("body") as string;

  // insert into database
  await prisma.todo.create({
    data: {
      body: body,
    },
  });

  // revalidate for slapping caching
  revalidatePath("/");
}
