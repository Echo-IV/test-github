import React, { useEffect, useState } from "react";

import { getPublicRepositories } from "../services/repository";
import RepositoryItem from "./RepositoryItem";
import "./Repository.css";

const RepositoryList = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getPublicRepositories();

      setRepositories(result.slice(0, 5));
    }
    fetchData();
  }, []);

  const renderRepositories = () => {
    return repositories.map((repositorie) => {
      return <RepositoryItem key={repositorie.id} repositorie={repositorie} />;
    });
  };

  return (
    <div className="wrapper">
      <div>
        <p>Public Repositories</p>
        {renderRepositories()}
      </div>
    </div>
  );
};

export default RepositoryList;
