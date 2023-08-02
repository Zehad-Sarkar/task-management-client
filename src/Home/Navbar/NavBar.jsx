import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar bg-base-300 rounded-md">
      <h2 className=" normal-case text-4xl mr-12">Task Management</h2>
      <ul className="font-bold ml-4 text-2xl">
        <li>
          <Link className="mr-4" to="/">
            Home
          </Link>
        </li>

        <li>
          <Link className="mr-4" to="/addTask">
            Add Task
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
