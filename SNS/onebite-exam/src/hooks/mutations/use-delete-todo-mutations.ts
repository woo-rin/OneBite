import { delelteTodo } from "@/api/delete-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useDeleteTodoMutation() {
  const queryClinet = useQueryClient();

  return useMutation({
    mutationFn: delelteTodo,

    onSuccess: (deleltedTodo) => {
      queryClinet.setQueryData<Todo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
        if (!prevTodos) return [];
        return prevTodos.filter((prevTodo) => prevTodo.id !== deleltedTodo.id);
      });
    },
  });
}
