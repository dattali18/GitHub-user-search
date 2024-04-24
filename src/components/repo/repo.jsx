import "./repo.css";

import PropTypes from "prop-types";

const Repo = ({ name, link, topics, description, language, language_class }) => {
  return (
    <div className="repo">
      <h2 className="repo-title">{name}</h2>
      <a className="repo-link" target="_blank" href={link}>
        Link
      </a>
      <p className="repo-description">{description}</p>
      <ul className="repo-topics">
        {topics.map((topic, index) => (
          <li className="repo-topic-item" key={index}>
            {topic}
          </li>
        ))}
      </ul>
      <p className={"repo-language " + language_class}>
        {language}
      </p>
    </div>
  );
};

// write the prop types for Repo, description & topics are optional
Repo.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  topics: PropTypes.array,
  description: PropTypes.string,
  language: PropTypes.string,
  language_class: PropTypes.string,
};

export default Repo;
