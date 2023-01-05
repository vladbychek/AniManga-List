import axios from "axios";




export const mangaData = axios.create({
   baseURL: "https://kitsu.io/api/edge",
});   