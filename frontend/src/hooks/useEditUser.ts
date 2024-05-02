import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser as updateUserApi } from "../services/apiUsers";

export function useEditUser() {
  const queryClient = useQueryClient();

  type MutationParams = {
    id: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any;
  };

  const { isPending: isEditing, mutate: editUser } = useMutation({
    mutationFn: ({ id, data }: MutationParams) => updateUserApi(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  return { isEditing, editUser };
}
