"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createTodo(formData: FormData) {
  const body = formData.get("body") as string;

  await prisma.todo.create({
    data: {
      body: body,
    },
  });

  revalidatePath("/");
}
