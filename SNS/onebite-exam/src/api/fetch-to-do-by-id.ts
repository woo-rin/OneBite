import { API_URL } from "@/lib/constants";

export async function fetchTodoByid(id: string) {
  const response = await fetch(`${API_URL}`);

  if (!response.ok) throw new Error("Fetch Failed");

  const data = await response.json();
  return data;
}
