import { createPost } from "@/actions/actions";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import React from "react";

export default async function Page() {
  return (
    <main className="text-center p-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All Posts</h1>

      <form
        action={createPost}
        className="flex flex-col max-w-[400px] mx-auto gap-2 my-10 text-neutral-900"
      >
        <input
          type="text"
          name="title"
          placeholder="Title for new post"
          className="border rounded px-2 h-10"
          required
        />

        <textarea
          name="body"
          placeholder="Body content for new post"
          className="border rounded px-2 py-2 h-full"
          rows={6}
          required
        />

        <button className="h-full bg-blue-700 px-5 rounded text-white">
          Submit
        </button>
      </form>

      <LogoutLink>Log out</LogoutLink>
    </main>
  );
}
