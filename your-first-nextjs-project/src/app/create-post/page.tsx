import { createPost } from "@/actions/actions";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import React from "react";

export default async function Page() {
  return (
    <main className="text-center p-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All Posts</h1>

      <form action={createPost} className="h-10 space-x-2 mt-10">
        <input
          type="text"
          name="title"
          placeholder="Title for new post"
          className="border rounded px-3 h-full text-neutral-900"
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
