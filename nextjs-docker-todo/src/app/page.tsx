import { prisma } from "@/lib/db";

const tags = ["Tag", "but", "not", "implementd"];

export default async function Home() {
  const blogs = await prisma.blog.findMany({});

  return (
    <main className="flex-1 flex flex-col p-4 bg-neutral-950">
      <header className="text-center">
        <h1 className="text-2xl">All Blogs</h1>
      </header>

      <div className="mt-6 px-32 card">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className={`flex flex-col gap-2
            px-4 py-2 rounded
            border border-neutral-500 hover:border-neutral-200
            text-neutral-300 hover:text-neutral-100
            duration-100`}
          >
            <p className="text-2xl">{blog.title}</p>
            <hr />
            <p className="text-xl">{blog.content}</p>
            {/* TODO: pretty ugly ... */}
            <p className="flex gap-2">
              {tags.map((tag) => (
                <span
                  className={`px-1 border rounded
                  border-green-600 bg-green-600 text-black`}
                >
                  {tag}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
