import { useMutation } from "@tanstack/react-query";
import { useAppDispatch } from "../../../redux/hooks";
import { isSubmitting, submit } from "../../../redux/reducers/quizReducer";

export function useSubmit() {
  const dispatch = useAppDispatch();

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
