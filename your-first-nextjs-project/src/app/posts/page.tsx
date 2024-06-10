import Link from "next/link";

type Post = {
  id: number;
  title: string;
};

export default async function page() {
  const resp = await fetch("https://dummyjson.com/posts?limit=10");
  const data: { posts: Post[] } = await resp.json();

  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All Posts</h1>

      <ul>
        <li>
          {data.posts.map((post) => (
            <li key={post.id} className="mb-3">
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </li>
      </ul>
    </main>
  );
}
