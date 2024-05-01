import { useParams } from "react-router-dom";

function UserOverview() {
  const { userId } = useParams();
  return <div>User {userId}</div>;
}

export default UserOverview;
