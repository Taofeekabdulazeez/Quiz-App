import { useUser } from "../hooks/useUser";

function UserOverview() {
  const { isLoading, user } = useUser();

  if (isLoading) return <strong>Loading details...</strong>;

  return (
    <div>
      <span>Name: {user?.name}</span>
      <br />
      <span>Age: {user?.age}</span>
      <span></span>
    </div>
  );
}

export default UserOverview;
