import axios from "axios";

const API_KEY = "b6e4115a9d43fdee0d017c42ccd345ca";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export const fetchTrendingMovies = async () => {
  const response = await axios.get("trending/movie/day", {
    params: { api_key: API_KEY },
  });
  return response.data.results;
};
