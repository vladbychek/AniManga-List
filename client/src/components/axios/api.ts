import axios from "axios";

export const axiosData = axios.create({
  baseURL: "https://kitsu.io/api/edge",
});
