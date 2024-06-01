import prisma from "../../lib/prisma";
import { DeleteTodoButton } from "./DeleteTodoButton";

export async function TodoList() {
  const todos = await prisma.todo.findMany();

  return (
    <div className="flex flex-col gap-2 rounded-md">
      {todos.map((todo) => {
        return (
          <div
            key={todo.id}
            className="bg-slate-900 flex justify-between items-center py-1 px-2 rounded-md"
          >
            <span className="text-lg">{todo.title}</span>
            <DeleteTodoButton id={todo.id} />
          </div>
        );
      })}
    </div>
  );
}
