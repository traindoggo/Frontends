"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const addTodo = async (formData: FormData) => {
  "use server";
  const title = formData.get("title") as string;
  await prisma.todo.create({ data: { title: title } });
  revalidatePath("/");
};

export const deleteTodo = async (id: number) => {
  await prisma.todo.delete({
    where: { id: id },
  });
  revalidatePath("/");
};
