import { prisma } from "@/lib/db";

export default async function Home() {
  const blogs = await prisma.blog.findMany({});

  return (
    <main className="flex-1 flex p-4 bg-neutral-950">
      <h1 className="text-2xl">
        <p>Blogger</p>

        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>{blog.title}</li>
          ))}
          <li></li>
        </ul>
      </h1>
    </main>
  );
}
