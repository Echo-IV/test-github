import React, { useEffect, useState } from "react";
import { getPublicRepositoryDetail } from "../services/repository";
import "./Repository.css";

const RepositoryDetail = ({ username }) => {
  console.log(username, "user");

  const [repositoryDetail, setRepositoryDetail] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getPublicRepositoryDetail(username);

      setRepositoryDetail(result);
    }
    fetchData();
  }, [username]);

  const renderUserRepositories = () => {
    return repositoryDetail.map((repos) => {
      return (
        <div className="Card">
          <p>Name: {repos.name}</p>
          <p>Language: {repos.language}</p>
        </div>
      );
    });
  };

  console.log(repositoryDetail, "repositoryDetail");

  return <>{renderUserRepositories()}</>;
};

export default RepositoryDetail;
