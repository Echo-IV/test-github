import React from "react";

import "./Repository.css";

const RepositoryList = ({ repositorie, onRepositoryClick }) => {
  return (
    <div
      className="Card"
      onClick={() => onRepositoryClick(repositorie.owner.login)}
      key={repositorie.id}
    >
      <p>User : {repositorie.owner.login}</p>
      <p>Description: {repositorie.description}</p>
    </div>
  );
};

export default RepositoryList;
