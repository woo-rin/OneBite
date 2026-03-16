import { createPost } from "@/api/post";
import type { UseMutationCallback } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { error } from "console";

export function useCreatePost(callbacks?: UseMutationCallback) {
  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      if (callbacks?.onSuccess) callbacks.onSuccess();
    },
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
