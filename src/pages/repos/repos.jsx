/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchUserRepos } from "../../api/githubApi.js";

import Repo from "../../components/repo/repo.jsx";

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
      <h1>{ownerName}&apos;s Repos</h1>
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
            language={repo.language}
            language_class={getLanguageClass(repo.language)}
          />
        ))}
      </div>
    </div>
  );
};

export default Repos;

const getLanguageClass = (language) => {
  if (!language) return "";
  switch (language) {
    case "C":
      return "c";
    case "Ruby":
      return "ruby";
    case "Rust":
      return "rust";
    case "Objective-C":
      return "objective-c";
    case "Objective-C++":
      return "objective-cpp";
    case "Jupyter Notebook":
      return "jupyter-notebook";
    case "Dart":
      return "dart";
    case "Perl":
      return "perl";
    case "Go":
      return "go";
    case "Scala":
      return "scala";
    case "Kotlin":
      return "kotlin";
    case "Haskell":
      return "haskell";
    case "Lua":
      return "lua";
    case "R":
      return "r";
    case "Shell":
      return "shell";
    case "PowerShell":
      return "powershell";
    case "Elixir":
      return "elixir";
    case "C++":
      return "cpp";
    case "Python":
      return "python";
    case "JavaScript":
      return "javascript";
    case "Java":
      return "java";
    case "HTML":
      return "html";
    case "CSS":
      return "css";
    case "TypeScript":
      return "typescript";
    case "Swift":
      return "swift";
    case "Assembly":
      return "assembly";
    case "C#":
      return "csharp";
    case "PHP":
      return "php";
    default:
      return "";
  }
};
