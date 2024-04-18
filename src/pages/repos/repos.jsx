/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchUserRepos } from "../../api/githubApi";

import Repo from "../../components/repo/repo";

import "./repos.css";

const Repos = () => {
  const { ownerName } = useParams();
  const [repos, setRepos] = useState([]);
  const [displayRepos, setDisplayRepos] = useState([]);

  useEffect(() => {
    // Fetch repos data based on ownerName
    fetchUserRepos(ownerName)
      .then((data) => {
        setRepos(data);
        setDisplayRepos(data);
      })
      .catch((error) => console.error(error));
  }, [ownerName]);

  return (
    <div>
      <h1>{ownerName}&apos;s Repo</h1>
      <input
        className="search-bar"
        type="text"
        placeholder="Search repos"
        onChange={(e) => {
          const searchTerm = e.target.value;
          const filteredRepos = repos.filter((repo) =>
            repo.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setDisplayRepos(filteredRepos);
        }}
      />
      <div className="repo-grid">
        {displayRepos.map((repo) => (
          <Repo
            key={repo.id}
            name={repo.name}
            link={repo.html_url}
            topics={repo.topics}
            description={repo.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Repos;
