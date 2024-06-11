// this 'use server' does not mean Server Component
// this server means 'server actions' D:
"use server";

export async function createPost(formData: FormData) {
  const title = formData.get("title") as string;
  console.log(title);
}
