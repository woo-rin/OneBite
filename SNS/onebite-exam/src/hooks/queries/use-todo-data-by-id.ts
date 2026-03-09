import { useQuery, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/lib/constants";
import { fetchTodoById } from "@/api/fetch-todo-by-id";

export function useTodoDataById(id: string) {
  return useQuery({
    queryFn: () => fetchTodoById(id),
    queryKey: QUERY_KEYS.todo.detail(id),

    staleTime: 3000000,
    gcTime: 5000,
  });
}
