// this 'use server' does not mean Server Component
// this server means 'server actions' D:
"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
  // typically don't want to do this 'type conversion' in typescript
  // like this... (as blah)
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;

  // insert into database
  await prisma.post.create({
    data: {
      title: title,
      body: body,
    },
  });

  // revalidate for slapping caching
  revalidatePath("/post");
}
