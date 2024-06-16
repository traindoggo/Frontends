"use client";

import { TSignUpSchema, signUpSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors, IsSubmitting },
    reset,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: TSignUpSchema) => {
    // TODO: submit data
    await new Promise((resolve) => setTimeout(resolve, 100));

    console.log(data);

    // form reset
    reset();
  };

  return (
    <main className={`grow border-slate-950 text-center mt-10 text-xl`}>
      <h1 className="text-2xl underline">ReactHookForm + Zod</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`flex flex-col gap-y-4 w-[400px] mx-auto mt-10`}
      >
        {/* register all fields */}
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="px-4 py-2 rounded"
        />
        {errors.email && (
          <p className="text-red-500">{`${errors.email.message}`}</p>
        )}

        <input
          {...register("password")}
          type="password"
          placeholder="password"
          className="px-4 py-2 rounded"
        />
        {errors.password && (
          <p className="text-red-500">{`${errors.password.message}`}</p>
        )}

        <input
          {...register("confirmPassword")}
          type="password"
          placeholder="Confirm password"
          className="px-4 py-2 rounded"
        />
        {errors.confirmPassword && (
          <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>
        )}

        <button
          disabled={IsSubmitting}
          type="submit"
          className="bg-blue-500 disabled:bg-gray-500 py-2 rounded "
        >
          Submit
        </button>
      </form>
    </main>
  );
}
