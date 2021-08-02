import axios from "axios";

const base_URL = "https://api.themoviedb.org/3";

const API_KEY = "afd2c986c5adb63f9553e5d223b5cb34";

export const fetchTrendingToday = async () => {
  try {
    return await axios
      .get(base_URL + `/trending/movie/day?api_key=` + API_KEY)
      .then((res) => res.data.results);
  } catch (error) {
    console.log(`error`, error);
  }
};

export const fetchDetailsMovie = async (movieId) => {
  try {
    return await axios
      .get(base_URL + `/movie/` + movieId + `?api_key=` + API_KEY)
      .then((res) => res.data);
  } catch (error) {
    console.log(`error`, error);
  }
};

export const fetchSearchMovie = async (query) => {
  try {
    return await axios
      .get(base_URL + `/search/movie?api_key=` + API_KEY + `&query=` + query)
      .then((res) => res.data.results);
  } catch (error) {
    console.log(`error`, error);
  }
};

export const fetchMovieCredits = async (movieId) => {
  try {
    return await axios
      .get(base_URL + `/movie/` + movieId + `/credits?api_key=` + API_KEY)
      .then((res) => res.data);
  } catch (error) {
    console.log(`error`, error);
  }
};

export const fetchMoviesDetails = async (movieId) => {
  try {
    return await axios
      .get(
        base_URL +
          `/movie/` +
          movieId +
          `/reviews?api_key=` +
          API_KEY +
          `&page=1`
      )
      .then((res) => res.data);
  } catch (error) {
    console.log(`error`, error);
  }
};

// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&page=1
