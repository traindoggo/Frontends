import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";

export default async function PageTask({ params }: { params: { id: string } }) {
  const task = await prisma.task.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!task) {
    return notFound();
  }

  return (
    <main
      className={`flex-1 flex flex-col gap-10
      w-[500px] mx-auto bg-neutral-900 p-4 items-center`}
    >
      <header>
        <p>{task.createdAt.toString()}</p>
        <p>{task.updatedAt.toString()}</p>
      </header>

      <div>
        <h1 className="text-2xl">{task.title}</h1>
      </div>
    </main>
  );
}
