import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadQuestion as uploadQuestionApi } from "../../../services/apiQuestions";
import toast from "react-hot-toast";

export function useUploadQuestion() {
  const queryClient = useQueryClient();

  const { isPending: isUploading, mutate: uploadQuestion } = useMutation({
    mutationFn: uploadQuestionApi,
    onSuccess: () => {
      toast.success("Question successfully uploaded!");
      queryClient.invalidateQueries({ queryKey: ["questions", "question"] });
    },
    onError: () => toast.error("Could not upload question"),
  });

  return { isUploading, uploadQuestion };
}
