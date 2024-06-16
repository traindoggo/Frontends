export default function Home() {
  return (
    <main className={`grow border-slate-950 mt-10 text-xl`}>
      <form className={`flex flex-col gap-y-4 w-[400px] mx-auto`}>
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

        <button type="submit" className="bg-blue-500 py-2 rounded">
          Submit
        </button>
      </form>
    </main>
  );
}
