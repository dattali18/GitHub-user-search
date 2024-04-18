// Styles
import "./card.css";

import PropTypes from "prop-types";

export default function Card({
  name,
  avatar_url,
  created_since,
  public_repos,
  followers,
}) {
  return (
    <div className="card">
      <div className="card-icon">
        <img className="card-img" src={avatar_url} alt={name} />
        <h1 className="card-name">{name}</h1>
      </div>
      <div className="card-info">
        <p className="tag card-info-item">{created_since}</p>
        <p className="tag card-info-item">{public_repos} Public Repos</p>
        <p className="tag card-info-item">{followers} Followers</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
  created_since: PropTypes.string.isRequired,
  public_repos: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
};
