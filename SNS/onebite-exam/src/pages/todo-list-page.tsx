import TodoEditor from "@/components/todo-list/todo-editer";
import TodoItem from "@/components/todo-list/todo-item";
const dummyTodos = [
  {
    id: 1,
    content: "game",
  },
  {
    id: 2,
    content: "soccer",
  },
  {
    id: 3,
    content: "basketball",
  },
];

export default function TodoList() {
  return (
    <div className="flex flex-col gap-5 p-5">
      <h1 className="text-2xl font-extrabold">Todo Lsit</h1>
      <TodoEditor />
      {dummyTodos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
}
