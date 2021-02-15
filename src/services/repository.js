import { BASE_URL } from "../constants";

export const getPublicRepositories = async () => {
  const response = await fetch(`${BASE_URL}/repositories`, {
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  });

  return response.json();
};

export const getPublicRepositoryDetail = async (username) => {
  const response = await fetch(`${BASE_URL}/users/${username}/repos`, {
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  });
  return response.json();
};
