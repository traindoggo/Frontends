import UpdateTodo from "@/app/components/todo/update-todo";
import { todoSchema } from "@/app/lib/types";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";

export default async function Todo({ params }: { params: { id: string } }) {
  const todo = await prisma.todo.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!todo) return notFound();

  const validatedTodo = todoSchema.safeParse(todo);
  if (!validatedTodo.success) {
    console.error(validatedTodo.error);
    return;
  }

  return <UpdateTodo todo={validatedTodo.data} />;
}
