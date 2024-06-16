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
    <main className={`grow text-center border-slate-950 mt-10 text-xl`}>
      <h1 className="text-2xl">Click Link Avobe</h1>
    </main>
  );
}
