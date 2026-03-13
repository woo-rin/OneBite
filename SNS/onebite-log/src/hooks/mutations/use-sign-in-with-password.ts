import { signInwithPassword } from "@/api/auth";
import type { useMutationCallback } from "@/types";
import { useMutation } from "@tanstack/react-query";

export function useSignInwithPassword(callbacks?: useMutationCallback) {
  return useMutation({
    mutationFn: signInwithPassword,
    onError: (error) => {
      console.error(error);

      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
