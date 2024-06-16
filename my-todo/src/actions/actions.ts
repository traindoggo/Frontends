"use server";

import { TTodoSchema } from "@/app/lib/types";
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

export async function updateTodo(todoData: TTodoSchema) {
  await prisma.todo.update({
    where: {
      id: todoData.id,
    },
    data: {
      body: todoData.body,
      description: todoData.description,
    },
  });

  revalidatePath(`/todo/${todoData.id}`);
}
