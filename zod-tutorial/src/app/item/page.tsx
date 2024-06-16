"use client";

import { useSearchParams } from "next/navigation";
import { z } from "zod";

const searchParamsSchema = z.object({
  id: z.coerce.number(),
  color: z.enum(["red", "green", "blue"]),
});

export default function Item() {
  const searchParams = useSearchParams();
  const searchParamsObject = Object.fromEntries(searchParams);

  const validatedSearchParams =
    searchParamsSchema.safeParse(searchParamsObject);

  if (!validatedSearchParams.success) {
    return;
  }

  console.log(validatedSearchParams.data);

  return (
    <main className="grow flex flex-col px-4 py-4 bg-neutral-900">
      <h1 className="text-2xl">Item Page</h1>
    </main>
  );
}
