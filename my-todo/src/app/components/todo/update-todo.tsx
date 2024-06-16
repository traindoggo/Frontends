"use client";

import { updateTodo } from "@/actions/actions";
import { useForm } from "react-hook-form";
import { TTodoSchema } from "../../lib/types";

export default function UpdateTodo({ todo }: { todo: TTodoSchema }) {
  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TTodoSchema>({
    defaultValues: {
      id: todo.id,
      body: todo.body,
      description: todo.description,
      done: todo.done,
    },
  });

  const onSubmit = async (todo: TTodoSchema) => {
    // use server actions
    updateTodo(todo);
  };

  return (
    <main className="flex flex-col p-4 mx-5 gap-4">
      <header className="bg-neutral-800 rounded">
        <p>Created At {todo.createdAt.toString()}</p>
        <p>Updated At {todo.updatedAt.toString()}</p>
      </header>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 mt-10"
      >
        {/* TODO: how to update todo(PUT or PATCH) */}
        <input
          {...register("body")}
          type="text"
          name="body"
          className={`text-lg px-4 py-1 bg-neutral-800 rounded`}
          placeholder="input your title"
        />

        {/* TODO: how to update todo(PUT or PATCH) */}
        <textarea
          {...register("description")}
          name="description"
          id="description"
          rows={14}
          placeholder="it's description :^)"
          className={`text-lg px-4 py-1 bg-neutral-800 rounded`}
        />

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
