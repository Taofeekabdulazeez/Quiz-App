import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="users">View users</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
