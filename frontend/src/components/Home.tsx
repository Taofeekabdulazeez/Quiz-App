import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [toggle, setToggle] = useState(false);

  useEffect(
    function () {
      if (toggle) document.querySelector("html")?.classList.add("dark-mode");
      else document.querySelector("html")?.classList.remove("dark-mode");
    },
    [toggle]
  );
  return (
    <div>
      <button onClick={() => setToggle((x) => !x)}>switch</button>
      <nav>
        <ul>
          <li>
            <Link className="link" to="users">
              View users
            </Link>
          </li>
        </ul>
      </nav>
      <button className="button">Component</button>
    </div>
  );
}

export default Home;
