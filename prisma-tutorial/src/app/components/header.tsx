import Link from "next/link";

export default function Header() {
  return (
    <header className={`p-10 border-b-2 border-neutral-800 text-center`}>
      <ul className="flex justify-around mx-40">
        <Link
          href="/"
          className={`text-xl border rounded px-2
            hover:bg-neutral-300 hover:text-neutral-900
            duration-100`}
        >
          Top
        </Link>

        <Link
          href="/posts"
          className={`text-xl border rounded px-2
            hover:bg-neutral-300 hover:text-neutral-900
            duration-100`}
        >
          Post
        </Link>
      </ul>
    </header>
  );
}
