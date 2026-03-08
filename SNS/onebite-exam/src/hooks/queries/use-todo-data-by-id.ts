import { useQuery } from "@tanstack/react-query";
import { fetchTodoByid } from "@/api/fetch-to-do-by-id";
import { QUERY_KEYS } from "@/lib/constants";

export function useTodoDataById(id: string) {
  return useQuery({
    queryFn: () => fetchTodoByid(id),
    queryKey: QUERY_KEYS.todo.detail(id),

    staleTime: 3000000,
    gcTime: 5000,
  });
}
