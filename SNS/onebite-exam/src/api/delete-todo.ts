import { API_URL } from "@/lib/constants";

export async function delelteTodo(id: string) {
  const response = await fetch(`${API_URL}/todos/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) throw new Error("DELETE Todo Failed");
  const data = await response.json();
  return data;
}
