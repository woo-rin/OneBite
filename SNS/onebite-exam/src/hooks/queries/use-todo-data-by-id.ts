import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/lib/constants";

export function useTodoDataById(id: string) {
  return useQuery({
    queryFn: () => fetchTodoByid(id),
    queryKey: QUERY_KEYS.todo.detail(id),

    staleTime: 3000000,
    gcTime: 5000,
  });
}
function fetchTodoByid(id: string): any {
  throw new Error("Function not implemented.");
}
