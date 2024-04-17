import { Link } from "react-router-dom";

// Styles
import "./home.css";

export default function Home() {
  return (
    <>
      <h1 className="home-title">Home</h1>
      <div className="home-div">
        <p className="home-paragraph">
          This app allows you to search for GitHub users. To use the app, simply
          enter the username of the GitHub user you want to search for in the
          input field provided. Then, click on the "Search" button to retrieve
          the user's information. Once you have searched for a user, you will
          see their profile information displayed on the screen. This includes
          their username, avatar, bio, and the number of followers they have.
          You can also click on the "View Repositories" button to see a list of
          the user's repositories. Each repository will display its name,
          description, and the number of stars it has. Feel free to explore
          different GitHub users by repeating the search process. Enjoy using
          the app!
        </p>
        <Link className="home-button" to="/search">
          Go to Search
        </Link>
      </div>
    </>
  );
}
