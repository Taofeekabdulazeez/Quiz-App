import { Outlet } from "react-router-dom";
import TableLoader from "../ui/TableLoader";

function Uploads() {
  return (
    <div>
      {false && <TableLoader rows={7} />}
      <Outlet />
    </div>
  );
}

export default Uploads;
