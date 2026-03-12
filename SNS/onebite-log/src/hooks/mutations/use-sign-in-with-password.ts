import { signInwithPassword } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

export function useSignInwithPassword() {
  return useMutation({
    mutationFn: signInwithPassword,
  });
}
