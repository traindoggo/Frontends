import Link from "next/link";

const links = [
  {
    title: "Header",
    href: "/",
  },
  {
    title: "Create",
    href: "/blogs/create",
  },
];

export default function Header() {
  return (
    <div
      className="p-4 flex justify-around bg-neutral-950 text-xl
      border-b-4 border-b-neutral-900"
    >
      {links.map((link) => (
        <Link
          href={link.href}
          className={`border-b border-b-neutral-600
        hover:border-b-neutral-200 duration-100`}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}
