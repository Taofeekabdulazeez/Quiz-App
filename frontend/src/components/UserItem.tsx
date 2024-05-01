import { useMutation } from "@tanstack/react-query";
import { User } from "../interfaces/interface";
import { deleteUser } from "../services/apiUsers";
import { useNavigate } from "react-router-dom";

type UserItemProps = {
  user: User;
};

function UserItem({ user }: UserItemProps) {
  const { isPending: isDeleting, mutate } = useMutation({
    mutationFn: deleteUser,
  });

  const navigate = useNavigate();

  return (
    <li className="user">
      <span>{user.name}</span>
      <div>
        <button>edit</button>
        <button onClick={() => mutate(user.id)}>
          {isDeleting ? <span className="loader"></span> : "delete"}
        </button>
        <button onClick={() => navigate(`/users/${user.id}`)}>View</button>
      </div>
    </li>
  );
}

export default UserItem;
