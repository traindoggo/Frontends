import prisma from "@/lib/db";
import { notFound } from "next/navigation";

// still! server componets
type Post = {
  id: number;
  title: string;
  body: string;
};

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="px-7 pt-24 text-center">
      <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
      <p className="text-xl max-w-[700px] mx-auto">{post.body}</p>
    </main>
  );
}
