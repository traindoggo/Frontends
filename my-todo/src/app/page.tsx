import TodoForm from "./components/form";
import TodoList from "./components/todo-list";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 w-full p-4">
      <TodoForm />
      <TodoList />
    </main>
  );
}
