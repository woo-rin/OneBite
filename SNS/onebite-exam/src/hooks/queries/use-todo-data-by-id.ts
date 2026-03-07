import { useQuery } from "@tanstack/react-query";
import { fetchTodoByid } from "@/api/fetch-to-do-by-id";

export function useTodoDataById(id: String) {
  return useQuery({
    queryFn: () => fetchTodoByid(id),
    queryKey: ["todos", id],

    staleTime: 5000,
    gcTime: 5000,
  });
}
