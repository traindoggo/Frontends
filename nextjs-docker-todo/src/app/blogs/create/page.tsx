import { createPost } from "@/actions/actions";

export default function PostCreatePage() {
  return (
    <main className="flex-1 flex p-4 bg-neutral-950">
      <form
        action={createPost}
        className="flex flex-col gap-6 w-[600px] mx-auto text-xl"
      >
        <input
          type="text"
          name="title"
          className={`p-2 bg-neutral-900 rounded`}
        />
        <textarea
          name="content"
          id="content"
          className={`h-full p-2 bg-neutral-900 rounded`}
        />
        <div>
          <button
            type="submit"
            className={`border px-2 rounded
            text-black
            bg-green-900 border-green-900
            hover:bg-green-500 duration-100`}
          >
            Create
          </button>
        </div>
      </form>
    </main>
  );
}
