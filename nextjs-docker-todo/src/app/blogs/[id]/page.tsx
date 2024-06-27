import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";

export default async function BlogPage({ params }: { params: { id: string } }) {
  const blog = await prisma.blog.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!blog) {
    return notFound();
  }

  return (
    <main className={`flex-1 flex flex-col`}>
      <div
        className={`flex-1 flex flex-col w-[900px] mx-auto
        bg-neutral-950`}
      >
        <header className={`flex p-2 mx-auto`}>
          <h1 className="text-3xl">{blog.title}</h1>
        </header>

        <p className={`px-20 py-4 flex-1 text-xl`}>{blog.title}</p>
      </div>
    </main>
  );
}
