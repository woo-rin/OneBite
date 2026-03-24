import { deleteImageInPath } from "@/api/image";
import { deletePost } from "@/api/post";
import type { UseMutationCallback } from "@/types";
import { useMutation } from "@tanstack/react-query";

export function useDeletePost(callbacks?: UseMutationCallback) {
  return useMutation({
    mutationFn: deletePost,
    onSuccess: async (deletePost) => {
      if (callbacks?.onSuccess) callbacks.onSuccess();

      if (deletePost.image_urls && deletePost.image_urls.length > 0) {
        await deleteImageInPath(`${deletePost.author_id}/${deletePost.id}`);
      }
    },
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
