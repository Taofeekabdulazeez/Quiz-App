import { useQuery } from "@tanstack/react-query";
import { getAllUsers as getAllUsersAPi } from "../services/apiUsers";

export function useUsers() {
  const {
    isLoading,
    data: users,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsersAPi,
  });

  return { isLoading, users, error };
}
