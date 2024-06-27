import { prisma } from "@/lib/db";
import Link from "next/link";

export default async function Home() {
  const blogs = await prisma.blog.findMany({});

  return (
    <main className="flex-1 flex flex-col p-4 bg-neutral-950">
      <header className="text-center">
        <h1 className="text-2xl">The Latest Blogs</h1>
      </header>

      <ul className="flex flex-col gap-6 w-[500px] mt-10 mx-auto">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/blogs/${blog.id}`}
            className={`border rounded
             border-neutral-500 hover:border-neutral-200`}
          >
            <header className={`text-2xl px-2 py-1 text-center`}>
              {blog.title}
            </header>

            <hr className={`border-neutral-500 hover:border-neutral-200`} />

            <p className={`px-2 py-1`}>{blog.content}</p>
          </Link>
        ))}
      </ul>
    </main>
  );
}
