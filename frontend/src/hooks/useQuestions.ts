import { useQuery } from "@tanstack/react-query";
import { getQuestions as getQuestionsApi } from "../services/apiQuestions";

export function useQuestions() {
  const {
    isLoading,
    data: questions,
    error,
  } = useQuery({ queryKey: ["questions"], queryFn: getQuestionsApi });

  return { isLoading, questions, error };
}
