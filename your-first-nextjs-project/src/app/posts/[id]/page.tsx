// still! server componets
import UpvoteButton from "@/components/upvote-btn";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default async function PostPage({ params }: { params: { id: string } }) {
  const resp = await fetch(`https://dummyjson.com/posts/${params.id}`);
  const post: Post = await resp.json();

  return (
    <main className="px-7 pt-24 text-center">
      <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
      <p className="max-w-[700px] mx-auto">{post.body}</p>

      <UpvoteButton />
    </main>
  );
}
