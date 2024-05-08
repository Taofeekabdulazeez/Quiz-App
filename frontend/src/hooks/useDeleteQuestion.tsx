import { useMutation } from "@tanstack/react-query";
import { deleteQuestion as deleteQuestionApi } from "../services/apiQuestions";

export function useDeleteQuestion() {
  const {
    isPending: isDeleting,
    mutate: deletQuestion,
    error,
  } = useMutation({ mutationKey: ["question"], mutationFn: deleteQuestionApi });

  return { isDeleting, deletQuestion, error };
}
