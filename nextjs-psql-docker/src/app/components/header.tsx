import Link from "next/link";

export default function Header() {
  return (
    <div className="p-4 flex gap-4 justify-center">
      <Link href="/" className="text-2xl">
        Home
      </Link>
    </div>
  );
}
