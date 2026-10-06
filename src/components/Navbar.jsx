import { Link } from "react-router";
function Navbar() {
  return <div>
    <Link to="/">home</Link>
    <Link to="/about">about</Link>
  </div>;
}

export default Navbar;