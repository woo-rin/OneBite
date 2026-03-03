import TodoEditor from "@/components/todo-list/todo-editer";
import TodoItem from "@/components/todo-list/todo-item";
import { useTodo } from "@/store/todos";

export default function TodoList() {
  const todos = useTodo();
  return (
    <div className="flex flex-col gap-5 p-5">
      <h1 className="text-2xl font-extrabold">Todo Lsit</h1>
      <TodoEditor />
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
}
