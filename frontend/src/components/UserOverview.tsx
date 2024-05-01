import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getUser } from "../services/apiUsers";

function UserOverview() {
  const { userId } = useParams();
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(Number(userId)),
  });

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
