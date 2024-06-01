import { addTodo } from "@/lib/action";

export function CreateTodoForm() {
  return (
    <form className="flex gap-2 mx-auto" action={addTodo}>
      <input
        required
        placeholder="input Todo"
        type="text"
        name="title"
        className="bg-slate-900 text-slate-200 rounded-md px-2"
        defaultValue={""}
      />

      <button type="submit" className="bg-slate-900 rounded-md px-2">
        Create
      </button>
    </form>
  );
}
