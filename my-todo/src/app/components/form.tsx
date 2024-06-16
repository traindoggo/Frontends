import { createTodo } from "@/actions/actions";

export default function TodoForm() {
  return (
    <form
      action={createTodo}
      className={`flex gap-4 justify-between px-4 py-1`}
    >
      <input
        type="text"
        name="body"
        className="flex-1 px-2 py-1 bg-neutral-950 outline-none
        border-b border-neutral-700 focus:border-neutral-300
        duration-100"
        placeholder="input todo"
      />
    </form>
  );
}
