import React, { useEffect, useState } from "react";

import { getPublicRepositories } from "../services/repository";
import RepositoryItem from "./RepositoryItem";
import RepositoryDetail from "./RepositoryDetail";

import "./Repository.css";

const RepositoryList = () => {
  const [repositories, setRepositories] = useState([]);
  const [selectedRepository, setSelectedRepository] = useState();

  useEffect(() => {
    async function fetchData() {
      const result = await getPublicRepositories();

      setRepositories(result.slice(0, 5));
    }
    fetchData();
  }, []);

  const handleRepositoryClick = (username) => {
    setSelectedRepository(username);
  };

  const renderRepositories = () => {
    return repositories.map((repositorie) => {
      return (
        <RepositoryItem
          onRepositoryClick={handleRepositoryClick}
          key={repositorie.id}
          repositorie={repositorie}
        />
      );
    });
  };

  return (
    <div className="wrapper">
      <div className="box">
        <p>Public Repositories</p>
        {renderRepositories()}
      </div>
      <div className="box">
        {selectedRepository && (
          <>
            <p>User Repositories detail</p>
            <RepositoryDetail username={selectedRepository} />
          </>
        )}
      </div>
    </div>
  );
};

export default RepositoryList;
