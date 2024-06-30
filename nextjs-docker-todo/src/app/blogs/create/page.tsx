"use client";

import { createPost } from "@/actions/actions";
import { FieldValues, useForm } from "react-hook-form";

export default function PostCreatePage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    createPost(formData);
  };

  return (
    <main className="flex-1 flex p-4 bg-neutral-950">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 w-[600px] mx-auto text-xl"
      >
        <input
          {...register("title")}
          type="text"
          placeholder="Title"
          className={`p-2 bg-neutral-900 rounded`}
        />
        <textarea
          {...register("content")}
          id="content"
          placeholder="Content"
          className={`h-full p-2 bg-neutral-900 rounded`}
        />
        <div>
          <button
            type="submit"
            className={`border px-2 rounded
            text-black
            bg-green-900 border-green-900
            hover:bg-green-500 duration-100`}
          >
            Create
          </button>
        </div>
      </form>
    </main>
  );
}
