import { useMutation } from "@tanstack/react-query";
import { useQuizDispatch } from "./useQuiz";
import { isSubmitting, submit } from "../reducers/quizReducer";

export function useSubmit() {
  const dispatch = useQuizDispatch();

  const { mutate: submitQuiz } = useMutation({
    mutationFn: async ({
      name,
      email,
      score,
    }: {
      name: string;
      email: string;
      score: number;
    }) => {
      console.log(name, email, score);
    },
    onSuccess: () => dispatch(submit()),
    onMutate: () => dispatch(isSubmitting()),
  });

  return { submitQuiz };
}
