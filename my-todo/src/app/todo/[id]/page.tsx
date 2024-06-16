import prisma from "@/lib/db";
import { notFound } from "next/navigation";

export default async function Todo({ params }: { params: { id: string } }) {
  const todo = await prisma.todo.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!todo) {
    return notFound();
  }

  return (
    <main className="flex flex-col w-full gap-4 p-4">
      <header>
        <p>Created At {todo.createdAt.toString()}</p>
        <p>Updated At {todo.updatedAt.toString()}</p>
      </header>

      <h1>{todo.body}</h1>
    </main>
  );
}
