import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteQuestion as deleteQuestionApi } from "../../../services/apiQuestions";
import toast from "react-hot-toast";

export function useDeleteQuestion() {
  const queryClient = useQueryClient();
  const {
    isPending: isDeleting,
    mutate: deletQuestion,
    error,
    isSuccess,
  } = useMutation({
    mutationKey: ["question"],
    mutationFn: deleteQuestionApi,
    onSuccess: () => {
      toast.success("Question successfully deleted!");
      queryClient.invalidateQueries({ queryKey: ["questions"] });
    },
    onError: () => toast.error("Question could not be deleted!"),
  });

  return { isDeleting, deletQuestion, error, isSuccess };
}
