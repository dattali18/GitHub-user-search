import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchUserRepos } from "../../api/githubApi";

import Repo from "../../components/repo/repo";

import "./repos.css";

const Repos = () => {
  const { ownerName } = useParams();
  console.log(ownerName);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // Fetch repos data based on ownerName
    fetchUserRepos(ownerName)
      .then((data) => setRepos(data))
      .catch((error) => console.error(error));
  }, [ownerName]);

  return (
    <div>
      <h1>{ownerName}&apos;s Repo</h1>
      <div className="repo-grid">
        {repos.map((repo) => (
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
