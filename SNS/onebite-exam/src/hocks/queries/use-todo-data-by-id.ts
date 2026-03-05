import { useQuery } from "@tanstack/react-query";
import { fetchTodoByid } from "@/api/fetch-to-do-by-id";

export function useTodoDataById(id: number) {
  return useQuery({
    queryFn: () => fetchTodoByid(id),
    queryKey: ["todos", id],
  });
}
