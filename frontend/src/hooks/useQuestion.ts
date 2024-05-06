import { useQuery } from "@tanstack/react-query";
import { getQuestion as getQuestionApi } from "../services/apiQuestions";
import { useSearchParams } from "react-router-dom";

export function useQuestion() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const {
    isLoading,
    data: question,
    error,
  } = useQuery({
    queryKey: ["question"],
    queryFn: () => getQuestionApi(id as string),
  });

  return { isLoading, question, error };
}
