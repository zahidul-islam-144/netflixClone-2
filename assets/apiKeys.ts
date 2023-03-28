import { UriType } from "../utilities/types";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const allURI:UriType[] = [
  {
    movieType: "netflixOriginals",
    movieURL: `${baseURL}/discover/tv?api_key=${apiKey}&with_networks=213`,
  },
  {
    movieType: "topRated",
    movieURL: `${baseURL}/movie/top_rated?api_key=${apiKey}&language=en-US`,
  },
  {
    movieType: "trending",
    movieURL: `${baseURL}/trending/all/week?api_key=${apiKey}&language=en-US`,
  },

  {
    movieType: "adeventure",
    movieURL: `${baseURL}/discover/movie?api_key=${apiKey}&with_genres=12`,
  },
  {
    movieType: "fantasy",
    movieURL: `${baseURL}/discover/movie?api_key=${apiKey}&with_genres=14`,
  },
  {
    movieType: "animation",
    movieURL: `${baseURL}/discover/movie?api_key=${apiKey}&with_genres=16`,
  },
  {
    movieType: "drama",
    movieURL: `${baseURL}/discover/movie?api_key=${apiKey}&with_genres=18`,
  },
  {
    movieType: "action",
    movieURL: `${baseURL}/discover/movie?api_key=${apiKey}&with_genres=28`,
  },
  {
    movieType: "comedy",
    movieURL: `${baseURL}/discover/movie?api_key=${apiKey}&with_genres=35`,
  },
  {
    movieType: "history",
    movieURL: `${baseURL}/discover/movie?api_key=${apiKey}&with_genres=36`,
  },
  {
    movieType: "horror",
    movieURL: `${baseURL}/discover/movie?api_key=${apiKey}&with_genres=27`,
  },
  {
    movieType: "thriller",
    movieURL: `${baseURL}/discover/movie?api_key=${apiKey}&with_genres=53`,
  },
  {
    movieType: "scienceFiction",
    movieURL: `${baseURL}/discover/movie?api_key=${apiKey}&with_genres=878`,
  },
  {
    movieType: "family",
    movieURL: `${baseURL}/discover/movie?api_key=${apiKey}&with_genres=10751`,
  },
  {
    movieType: "romance",
    movieURL: `${baseURL}/discover/movie?api_key=${apiKey}&with_genres=10749`,
  },
  {
    movieType: "documentry",
    movieURL: `${baseURL}/discover/movie?api_key=${apiKey}&with_genres=99`,
  },
];
