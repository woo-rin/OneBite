import { createTodo } from "@/api/create-todo";
import { useMutation } from "@tanstack/react-query";

export function useCreateTodoMutation() {
  return useMutation({
    mutationFn: createTodo,
    onMutate: () => {},
    onSuccess: () => {
      window.location.reload();
    },
    onSettled: () => {},
    onError: (error) => {
      window.alert(error.message);
    },
  });
}
