import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editQuestion as editQuestionApi } from "../../../services/apiQuestions";
import toast from "react-hot-toast";

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
    isSuccess,
  } = useMutation({
    mutationFn: ({ id, data }: MutationParams) => editQuestionApi(id, data),
    onSuccess: () => {
      toast.success("Question successfully edited!");
      queryClient.invalidateQueries({
        queryKey: ["questions"],
      });
    },
    onError: () => toast.error("Question could not be edited!"),
  });

  return { isEditing, editQuestion, error, isSuccess };
}
