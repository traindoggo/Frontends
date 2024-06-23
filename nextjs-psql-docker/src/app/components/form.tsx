import { createTask } from "@/actions/actions";

export default function Form() {
  return (
    <form action={createTask} className="flex gap-6">
      <input
        type="text"
        name="title"
        className="text-xl bg-neutral-950 rounded px-2 py-1"
      />
      <button
        type="submit"
        className="text-xl bg-blue-800 border-0 px-2 py-1 rounded"
      >
        Add Task
      </button>
    </form>
  );
}
