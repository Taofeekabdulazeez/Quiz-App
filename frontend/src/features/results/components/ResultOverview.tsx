import { useParams } from "react-router-dom";

function ResultOverview() {
  const { id } = useParams();
  return <div>{id}</div>;
}

export default ResultOverview;
