"use client";

import { createPost } from "@/actions/actions";
import { TBlogSchema, blogSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function PostCreatePage() {
  const { register, handleSubmit } = useForm<TBlogSchema>({
    resolver: zodResolver(blogSchema),
    // defaultValues: {},
  });

  const onSubmit = async (data: TBlogSchema) => {
    createPost(data);
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
          placeholder="input..."
          className={`p-2 bg-neutral-900 rounded outline-none
            focus:bg-neutral-800`}
        />
        <textarea
          {...register("content")}
          placeholder="input..."
          className={`h-full p-2 bg-neutral-900 rounded outline-none
            focus:bg-neutral-800`}
        />
        <div>
          <button
            type="submit"
            className={`border px-2 rounded
            text-black outline-none
            bg-green-900 border-green-900
            hover:bg-green-500 focus:bg-green-500 duration-100`}
          >
            Create
          </button>
        </div>
      </form>
    </main>
  );
}
