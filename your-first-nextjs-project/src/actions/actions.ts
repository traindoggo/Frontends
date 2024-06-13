// this 'use server' does not mean Server Component
// this server means 'server actions' D:
"use server";

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
  // auth check for incoming unknown user data
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("api/auth/login");
  }

  // and validation FormData(form data or other crazy malicious data)
  // e.g. zod, ...

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
