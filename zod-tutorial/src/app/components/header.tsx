import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-around px-10 py-4 gap-10 bg-neutral-900">
      <Link href="/product" className="text-xl border px-2 rounded">
        Product
      </Link>

      <Link
        href="/item?id=10&color=blue"
        className="text-xl border px-2 rounded"
      >
        Item
      </Link>
    </header>
  );
}
