import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser as createUserApi } from "../../../services/apiUsers";

export function useCreateUser() {
  const queryClient = useQueryClient();

  const {
    isPending: isCreating,
    mutate: createUser,
    error,
  } = useMutation({
    mutationFn: createUserApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  return { isCreating, createUser, error };
}
