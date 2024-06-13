// this 'use server' does not mean Server Component
// this server means 'server actions' D:
"use server";

export async function createPost(formData: FormData) {
  // typically don't want to do this 'type conversion' in typescript
  // like this... (as blah)
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;

  console.log(title, body);

  // insert into database
}
