import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <h2>Navbar Component</h2>
      <ul>
        <li>
          <Link to="/create">Create Blog</Link>
        </li>
        <li>
          <Link to="/">Home Page</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
