"use client";

import { useState } from "react";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [erros, setErrors] = useState<string[]>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
  };

  return (
    <main className={`grow border-slate-950 mt-10 text-xl`}>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className={`flex flex-col gap-y-4 w-[400px] mx-auto`}
      >
        <input type="email" placeholder="Email" className="px-4 py-2 rounded" />
        <input
          type="password"
          placeholder="password"
          className="px-4 py-2 rounded"
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="px-4 py-2 rounded"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-500 disabled:bg-gray-500 py-2 rounded "
        >
          Submit
        </button>
      </form>
    </main>
  );
}
