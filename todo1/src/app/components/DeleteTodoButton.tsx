import { deleteTodo } from "@/lib/action";

export function DeleteTodoButton({ id }: { id: number }) {
  const deleteTodoWithId = deleteTodo.bind(null, id);

  return (
    <form action={deleteTodoWithId}>
      <button className="bg-red-700 px-1 rounded-md">Delete</button>
    </form>
  );
}
