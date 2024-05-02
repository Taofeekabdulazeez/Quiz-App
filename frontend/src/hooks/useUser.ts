import { useParams } from "react-router-dom";
import { getUser } from "../services/apiUsers";
import { useQuery } from "@tanstack/react-query";

export function useUser() {
  const { userId } = useParams();
  const {
    isLoading,
    data: user,
    error,
  } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUser(userId as string),
    retry: true,
  });

  return { isLoading, user, error };
}
