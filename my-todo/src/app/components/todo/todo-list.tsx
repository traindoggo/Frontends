import { doneTodo } from "@/actions/actions";
import prisma from "@/lib/db";
import Link from "next/link";

export default async function TodoList() {
  const todos = await prisma.todo.findMany();

  return (
    <main className="flex flex-col mt-10">
      <ul className="flex flex-col gap-5">
        {todos.map((todo) => {
          if (!todo.done) {
            return (
              <li
                key={todo.id}
                className={`flex gap-4 mx-4 px-2 py-1
                hover:bg-neutral-900
                  border-b border-b-neutral-500
                  hover:border-b-neutral-50
                  duration-100`}
              >
                <form action={doneTodo}>
                  {/* TODO: sophisticated code ...*/}
                  <input type="hidden" name="id" value={todo.id} />
                  <button>😎</button>
                </form>
                <Link href={`/todo/${todo.id}`}>{todo.body}</Link>
              </li>
            );
          }
        })}
      </ul>
    </main>
  );
}
