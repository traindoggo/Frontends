export default function Header() {
  return (
    <div
      className={`flex justify-between items-center gap-10 py-4 px-7
        border-neutral-900 border-b-2`}
    >
      <div className="">Logo</div>
      <form className="flex-1 flex">
        <input
          type="search"
          className={`flex-1 px-2 rounded bg-neutral-900`}
          placeholder="search todo"
        />
      </form>
      <div className="">Menu</div>
    </div>
  );
}
