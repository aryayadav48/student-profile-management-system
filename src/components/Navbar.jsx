import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Student Profile
      </div>

      <div className="navbar-links">
        <Link to="/">Dashboard</Link>
        <Link to="/students">Students</Link>
        <Link to="/add-student">Add Student</Link>
      </div>
    </nav>
  );
}

export default Navbar;