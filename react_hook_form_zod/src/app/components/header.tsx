import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-center gap-4 bg-slate-500 px-2 py-4">
      <Link
        href="/normal"
        className={`hover:bg-neutral-900 hover:text-neutral-200
          text-xl px-2 rounded duration-100`}
      >
        Normal Form
      </Link>

      <Link
        href="/rhf"
        className={`hover:bg-neutral-900 hover:text-neutral-200
        text-xl px-2 rounded duration-100`}
      >
        ReactHookForm
      </Link>

      <Link
        href="/rhf_zod"
        className={`hover:bg-neutral-900 hover:text-neutral-200
        text-xl px-2 rounded duration-100`}
      >
        ReactHookForm+Zod
      </Link>
    </header>
  );
}
