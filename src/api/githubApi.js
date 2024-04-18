import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
});

export default githubApi;

export const fetchUserProfile = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};

export const fetchUserRepos = async (username) => {
    try {
        const response = await githubApi.get(`/users/${username}/repos`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user repos:", error);
        throw error;
    }
};