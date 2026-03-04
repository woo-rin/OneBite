import TodoEditor from "@/components/todo-list/todo-editer";
import TodoItem from "@/components/todo-list/todo-item";
import { useTodosData } from "@/hocks/quries/use-todos.data";

export default function TodoListPage() {
  const { data: todos, isLoading, error } = useTodosData();

  if (error) return <div> 오류 발생</div>;
  if (isLoading) return <div>로딩 중입니다</div>;

  return (
    <div className="flex flex-col gap-5 p-5">
      <h1 className="text-2xl font-extrabold">Todo Lsit</h1>
      <TodoEditor />
      {todos?.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
}
