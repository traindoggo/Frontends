import { prisma } from "@/lib/db";
import Form from "./components/form";

export default async function Home() {
  const posts = await prisma.task.findMany();

  return (
    <main
      className={`flex-1 flex flex-col gap-10
      w-[500px] mx-auto bg-neutral-900 p-4 items-center`}
    >
      <h1 className="text-2xl">All Tasks</h1>

      <ul className="flex flex-col gap-4">
        {posts.map((post) => (
          <li
            key={post.id}
            className={`text-xl
            border-b-neutral-700 border-b-2 hover:border-b-neutral-300
            duration-200 hover:cursor-pointer`}
          >
            {post.title}
          </li>
        ))}
      </ul>

      <Form />
    </main>
  );
}
