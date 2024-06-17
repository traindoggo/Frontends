import { prisma } from "@/lib/prisma";

export default async function Post({ params }: { params: { id: string } }) {
  const post = await prisma.post.findUnique({
    where: {
      id: params.id,
    },
  });
  return (
    <main className="flex flex-col items-center pt-20 gap-y-10">
      <h1 className="text-3xl">{post?.title}</h1>

      <p className="text-xl">{post?.content}</p>
    </main>
  );
}
