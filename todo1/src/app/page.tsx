import { CreateTodoForm } from "./components/CreateTodoForm";
import { TodoList } from "./components/TodoList";

export default function Home() {
  return (
    <main className="max-w-xl mx-auto mt-10 flex flex-col">
      <h1 className="text-xl p-2 underline mb-5">Todo App</h1>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 bg-slate-400 p-2 rounded-md">
          <h2 className="text-slate-950 mx-auto">Create Todo From</h2>
          <CreateTodoForm />
        </div>

        <div className="flex flex-col gap-2 bg-slate-400 p-2 rounded-md">
          <h2 className="text-slate-950">Todo List</h2>
          <TodoList />
        </div>
      </div>
    </main>
  );
}
