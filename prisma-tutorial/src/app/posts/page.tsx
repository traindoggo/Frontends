import { createPost } from "@/actions/actions";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Page() {
  const user = await prisma.user.findUnique({
    where: {
      email: "john@gmail.com",
    },
    include: {
      posts: true,
    },
  });

  return (
    <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
      <h1 className="text-4xl">All Posts ({user?.posts.length})</h1>

      <ul className={`border-t border-b border-neutral-700 py-4`}>
        {user?.posts.map((post) => (
          <li key={post.id} className="flex items-center justify-between px-5">
            <Link href={`/posts/${post.slug}`} className="text-xl">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>

      <form
        action={createPost}
        className={`flex flex-col gap-y-2 w-[300px] mt-10
          text-neutral-950`}
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="px-2 py-1 rounded-sm"
        />

        <textarea
          name="content"
          rows={5}
          placeholder="Content"
          className="px-2 py-1 rounded-sm"
        />

        <button
          type="submit"
          className="bg-blue-500 py-2 text-white rounded-sm"
        >
          Create Post
        </button>
      </form>
    </main>
  );
}
