import { prisma } from "@/lib/db";
import Link from "next/link";

export default async function Home() {
  const blogs = await prisma.blog.findMany({});

  return (
    <main className="flex-1 flex flex-col p-4 bg-neutral-950">
      <header className="text-center">
        <h1 className="text-2xl">The Latest Blogs</h1>
      </header>

      <div className="grid grid-cols-2 gap-6 mt-10">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/blogs/${blog.id}`}
            className={`border-2 border-neutral-500 rounded
             hover:border-neutral-200 hover:bg-neutral-900 hover:border-2
             duration-100`}
          >
            <header className={`text-2xl px-2 py-1 text-center`}>
              {blog.title}
            </header>

            <hr className={`border-neutral-500 hover:border-neutral-200`} />

            <div className="px-6">
              {/* TODO: truncate content string length */}
              <p className={`px-2 py-1 text-xl`}>{blog.content}</p>

              <footer className="px-2 py-1 text-neutral-600 text-sm mt-2">
                <p>Created : {blog.createdAt.toLocaleDateString()}</p>
                <p>Updated : {blog.updatedAt.toLocaleDateString()}</p>
              </footer>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
