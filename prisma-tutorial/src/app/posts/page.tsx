import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Page() {
  const posts = await prisma.post.findMany();

  return (
    <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
      <h1 className="text-2xl">All Posts</h1>

      <ul className={`border-t border-b border-neutral-700 py-4`}>
        {posts.map((post) => (
          <li key={post.id} className="flex items-center justify-between px-5">
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
