// Styles
import "./search.css";

// React

// Components
import Card from "../../components/card/card";

const handleSubmit = (e) => {
  e.preventDefault();
  const search = e.target[0].value;
  // make a request to the GitHub API
  // print the search term for now
  console.log(search);
  e.target.reset();
};

function SearchForm() {
  return (
    <form className="search-form" onSubmit={handleSubmit}>
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

function Search() {
  return (
    // Home page
    <div className="page">
      <h1 className="page-title">Search</h1>
      <div className="search">
        <SearchForm />
        <Card
          name="John Doe"
          avatar_url="https://avatars.githubusercontent.com/u/74492594?s=400&v=4"
          created_since="1y 3m ago"
          public_repos={10}
          followers={100}
        />
      </div>
    </div>
  );
}

export default Search;
