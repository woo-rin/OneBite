import { useOpenAlertModal } from "@/store/alert-modal";
import { Button } from "../ui/button";
import { useDeletePost } from "@/hooks/mutations/post/use-delete-post";
import { toast } from "sonner";

export default function DeletePostButton({ id }: { id: number }) {
  const { mutate: deletePost, isPending: isDeletePostPending } = useDeletePost({
    onError: (error) => {
      toast.error("포스트삭제에 실패하였습니다", {
        position: "top-center",
      });
    },
  });
  const openAlertModal = useOpenAlertModal();
  const handleDeleteClick = () => {
    openAlertModal({
      title: "포스트삭제",
      description:
        "삭제된 포스트는 되돌릴수 없습니다. 정말로 삭제하시겠습니까?",
      onPositive: () => {
        deletePost(id);
      },
    });
  };

  return (
    <Button
      disabled={isDeletePostPending}
      onClick={handleDeleteClick}
      className="cursor-pointer"
      variant={"ghost"}
    >
      삭제
    </Button>
  );
}
