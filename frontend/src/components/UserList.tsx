import UserItem from "./UserItem";
import CreateForm from "./CreateForm";
import { useUsers } from "../hooks/useUsers";
import styled from "styled-components";

const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-gray-200);
  margin-inline: auto;
  background-color: var(--bg-layer-1);
  border-radius: 13px;
  overflow: hidden;

  & li {
    padding: 1.6rem 1.2rem;
    border-bottom: 1px solid var(--color-gray-200);
    padding-block: 1rem;

    &:hover {
      background-color: var(--bg-layer-1);
    }
  }

  & li:last-child {
    border: none;
  }
`;

function UserList() {
  const { isLoading, users, error } = useUsers();

  if (isLoading) return <strong>Loading users</strong>;

  if (error) return <strong>Couldn't get users</strong>;

  return (
    <>
      <List className="user-list">
        {users?.map((user) => (
          <UserItem key={user._id} user={user} />
        ))}
      </List>
      <CreateForm />
    </>
  );
}

export default UserList;
