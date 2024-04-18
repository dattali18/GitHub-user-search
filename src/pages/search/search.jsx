// Styles
import "./search.css";

const handleSubmit = (e) => {
  e.preventDefault();
  const search = e.target[0].value;
  // make a request to the GitHub API
  // print the search term for now
  console.log(search);
  e.target.reset();
};

export default function Search() {
  return (
    // Home page
    <div className="page">
      <h1 className="page-title">Search</h1>
      <div className="search">
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
      </div>
    </div>
  );
}
