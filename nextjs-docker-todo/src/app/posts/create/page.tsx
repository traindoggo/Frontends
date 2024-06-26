import { createPost } from "@/actions/actions";

export default function PostCreatePage() {
  return (
    <main className="flex-1 flex p-4 bg-neutral-950">
      <form
        action={createPost}
        className="flex flex-col gap-6 w-[600px] mx-auto bg-green-800 text-xl"
      >
        <input
          type="text"
          name="title"
          className={`p-2 bg-neutral-900 rounded`}
        />
        <textarea
          name="content"
          id="content"
          className={`p-2 bg-neutral-900 rounded`}
        />
        <button type="submit" className="">
          Create
        </button>
      </form>
    </main>
  );
}
