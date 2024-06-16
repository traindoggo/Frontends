import prisma from "@/lib/db";

export default async function TodoList() {
  const todos = await prisma.todo.findMany();

  return (
    <main className="flex flex-col mt-10">
      <ul className="flex flex-col gap-4">
        {todos.map((todo) => (
          <li key={todo.id} className="border-b">
            {todo.body}
          </li>
        ))}
      </ul>
    </main>
  );
}
