import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../services/apiUsers";
import UserItem from "./UserItem";

function UserList() {
  const {
    isLoading,
    data: users,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  if (isLoading) return <strong>Loading users</strong>;

  if (error)
    return (
      <strong
        style={{
          color: "red",
        }}
      >
        Couldn't get users
      </strong>
    );

  return (
    <ul className="user-list">
      {users?.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
}

export default UserList;
