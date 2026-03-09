import { delelteTodo } from "@/api/delete-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useDeleteTodoMutation() {
  const queryClinet = useQueryClient();

  return useMutation({
    mutationFn: delelteTodo,
    onSuccess: (deleltedTodo) => {
      queryClinet.removeQueries({
        queryKey: QUERY_KEYS.todo.detail(deleltedTodo.id),
      });
      queryClinet.setQueryData<string[]>(
        QUERY_KEYS.todo.list,
        (prevTodoIds) => {
          if (!prevTodoIds) return [];
          return prevTodoIds.filter((id) => id !== deleltedTodo.id);
        },
      );
    },
  });
}
