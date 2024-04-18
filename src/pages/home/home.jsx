/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

// Styles
import "./home.css";

export default function Home() {
  return (
    // Home page
    <div className="page">
      <h1 className="page-title">Home</h1>
      <div className="home">
        <h1 className="home-legend">Welcome to GitHub Search</h1>
        <p className="home-paragraph">
          Search for your favorite user and repo on GitHub.
          <br />
          You can also search for repositories by topic.
        </p>
        <Link className="home-button" to="/search">
          Go to Search
        </Link>
      </div>
    </div>
  );
}
