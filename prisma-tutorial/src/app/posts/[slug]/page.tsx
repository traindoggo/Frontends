import { prisma } from "@/lib/prisma";
import { unstable_cache as cache } from "next/cache";

const getCachedPost = cache((slug) => {
  return prisma.post.findUnique({
    where: {
      slug,
    },
  });
});

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getCachedPost(params.slug);

  return (
    <main className="flex flex-col items-center pt-20 gap-y-10">
      <h1 className="text-3xl">{post?.title}</h1>

      <p className="text-xl">{post?.content}</p>
    </main>
  );
}
