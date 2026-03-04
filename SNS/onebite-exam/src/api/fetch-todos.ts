import { API_URL } from "@/lib/constans";
import type { Todo } from "@/types";

export async function fetchTodos() {
  const response = await fetch(`${API_URL}/todos`);
  if (!response.ok) throw new Error("Featch Failed");

  const data: Todo[] = await response.json();
  return data;
}
