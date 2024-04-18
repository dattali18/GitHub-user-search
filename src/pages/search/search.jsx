/* eslint-disable react/no-unescaped-entities */
// Styles
import "./search.css";

// Api
import { Link } from "react-router-dom";
import { fetchUserProfile } from "../../api/githubApi.js";

// React
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

// Components
import Card from "../../components/card/card";

const handleSubmit = (e, setSearchTerm) => {
  e.preventDefault();
  const search = e.target[0].value;
  // make a request to the GitHub API
  // print the search term for now
  console.log(search);
  setSearchTerm(search);
  e.target.reset();
};

function SearchForm({ setSearchTerm }) {
  // Component code here
  return (
    <form
      className="search-form"
      onSubmit={(e) => handleSubmit(e, setSearchTerm)}
    >
      <legend className="search-legend">Search For Users On GitHub</legend>
      <div className="form-group">
        <input
          className="search-input"
          type="text"
          placeholder="type username"
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </div>
    </form>
  );
}

SearchForm.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
};

function Search() {
  const [userProfile, setUserProfile] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm) {
        setIsLoading(true);
        try {
          const profile = await fetchUserProfile(searchTerm);
          setUserProfile(profile);
          setErrorMessage("");
        } catch (error) {
          console.error("Error fetching user profile:", error);
          setErrorMessage("Error fetching user profile");
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchData();
  }, [searchTerm]);

  return (
    // Home page
    <div className="page">
      <h1 className="page-title">Search</h1>
      <div className="search">
        <SearchForm setSearchTerm={setSearchTerm} />
        {isLoading ? (
          <p>Loading...</p>
        ) : userProfile ? (
          <>
            <Card
              name={userProfile.name}
              avatar_url={userProfile.avatar_url}
              created_since={new Date(
                userProfile.created_at
              ).toLocaleDateString()}
              public_repos={userProfile.public_repos}
              followers={userProfile.followers}
            />
            <Link className="search-repo" to={"/repos/" + userProfile.login}>
              {userProfile.name}'s Repositories
            </Link>
          </>
        ) : (
          <p>{errorMessage}</p>
        )}
      </div>
    </div>
  );
}

export default Search;
