import prisma from "@/lib/db";
import Link from "next/link";

export default async function TodoList() {
  const todos = await prisma.todo.findMany();

  return (
    <main className="flex flex-col mt-10">
      <ul className="flex flex-col gap-4">
        {todos.map((todo) => {
          if (!todo.done) {
            return (
              <li
                key={todo.id}
                className={`flex gap-4 mx-4 px-2 py-1 border-b
                  hover:bg-neutral-800`}
              >
                {/* TODO: done todo with update TodoActions */}
                <form action="">😎</form>
                <Link href={`/todo/${todo.id}`}>{todo.body}</Link>
              </li>
            );
          }
        })}
      </ul>
    </main>
  );
}
