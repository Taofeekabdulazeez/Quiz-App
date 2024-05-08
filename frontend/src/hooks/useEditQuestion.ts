import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editQuestion as editQuestionApi } from "../services/apiQuestions";

type MutationParams = {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
};

export function useEditQuestion() {
  const queryClient = useQueryClient();
  const {
    isPending: isEditing,
    mutate: editQuestion,
    error,
  } = useMutation({
    mutationFn: ({ id, data }: MutationParams) => editQuestionApi(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["questions", "question"],
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["questions", "question"],
      });
    },
  });

  return { isEditing, editQuestion, error };
}
