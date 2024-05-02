import UserItem from "./UserItem";
import CreateForm from "./CreateForm";
import { useUsers } from "../hooks/useUsers";

function UserList() {
  const { isLoading, users, error } = useUsers();

  if (isLoading) return <strong>Loading users</strong>;

  if (error) return <strong>Couldn't get users</strong>;

  return (
    <>
      <ul className="user-list">
        {users?.map((user) => (
          <UserItem key={user._id} user={user} />
        ))}
      </ul>
      <CreateForm />
    </>
  );
}

export default UserList;
