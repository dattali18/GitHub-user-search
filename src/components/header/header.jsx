// Dependencies
import "./header.css";
// react router dom components
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-icon">
          <h1>GitHub Search</h1>
        </div>
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/search">Search</Link>
          </li>
          <li className="navbar-item">
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
