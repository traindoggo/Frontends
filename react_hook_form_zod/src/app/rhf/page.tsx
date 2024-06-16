"use client";

import { FieldValues, useForm } from "react-hook-form";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors, IsSubmitting },
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    // TODO: submit data
    await new Promise((resolve) => setTimeout(resolve, 100));

    // form reset
    reset();
  };

  return (
    <main className={`grow border-slate-950 mt-10 text-xl`}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`flex flex-col gap-y-4 w-[400px] mx-auto`}
      >
        {/* register all fields */}
        <input
          {...register("email", {
            required: "Email is required",
          })}
          type="email"
          placeholder="Email"
          className="px-4 py-2 rounded"
        />
        {errors.email && (
          <p className="text-red-500">{`${errors.email.message}`}</p>
        )}

        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 10,
              message: "Password must be at least 10 characters",
            },
          })}
          type="password"
          placeholder="password"
          className="px-4 py-2 rounded"
        />
        {errors.password && (
          <p className="text-red-500">{`${errors.password.message}`}</p>
        )}

        <input
          {...register("confirmPassword", {
            required: "Confirm password is required",
            validate: (value) =>
              value === getValues("password") || "Passwords must match",
            minLength: {
              value: 10,
              message: "Confirm Password msut be at least 10 characters",
            },
          })}
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
