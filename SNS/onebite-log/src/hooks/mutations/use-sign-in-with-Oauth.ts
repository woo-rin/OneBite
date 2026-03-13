import { signInwithOath } from "@/api/auth";
import type { useMutationCallback } from "@/types";
import { useMutation } from "@tanstack/react-query";

export function useSignInwithOAuth(callbacks?: useMutationCallback) {
  return useMutation({
    mutationFn: signInwithOath,
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
