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
    <main className="flex flex-col items-center p-4 gap-4">
      <header>
        <p>Created At {todo.createdAt.toString()}</p>
        <p>Updated At {todo.updatedAt.toString()}</p>
      </header>

      <form className="flex flex-col gap-4 mt-10">
        {/* TODO: how to update todo(PUT or PATCH) */}
        <input
          type="text"
          name="body"
          className={`text-lg px-4 py-1 bg-neutral-800 rounded`}
          placeholder="input your title"
          value={todo.body}
        />

        {/* TODO: how to update todo(PUT or PATCH) */}
        <textarea
          name="description"
          id="description"
          rows={14}
          placeholder="it's description :^)"
          className={`text-lg px-4 py-1 bg-neutral-800 rounded`}
        >
          {todo.description}
        </textarea>

        <footer className="flex">
          {/* TODO: add update todo */}
          <button
            className={`ml-auto border px-2 rounded
              bg-rose-800 border-rose-800 text-neutral-100`}
          >
            Update
          </button>
        </footer>
      </form>
    </main>
  );
}
