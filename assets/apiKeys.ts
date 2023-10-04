import { UriType } from "../utilities/types";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const allURI:UriType[] = [
  {
    movieType: "netflixOriginals",
    movieURL: `${baseURL}/discover/tv?api_key=${apiKey}&with_networks=213`,
    movieID: 0
  },
  {
    movieType: "topRated",
    movieURL: `${baseURL}/movie/top_rated?api_key=${apiKey}&language=en-US`,
    movieID: 1
  },
  {
    movieType: "trending",
    movieURL: `${baseURL}/trending/all/week?api_key=${apiKey}&language=en-US`,
    movieID: 2
  },

  {
    movieType: "adeventure",
    movieURL: `${baseURL}/discover/movie?api_key=${apiKey}&with_genres=12`,
    movieID: 3
  },
  {
    movieType: "fantasy",
    movieURL: `${baseURL}/discover/movie?api_key=${apiKey}&with_genres=14`,
    movieID: 4
  },
  {
    movieType: "animation",
    movieURL: `${baseURL}/discover/movie?api_key=${apiKey}&with_genres=16`,
    movieID: 5
  },
  {
    movieType: "drama",
    movieURL: `${baseURL}/discover/movie?api_key=${apiKey}&with_genres=18`,
    movieID: 6
  },
  {
    movieType: "action",
    movieURL: `${baseURL}/discover/movie?api_key=${apiKey}&with_genres=28`,
    movieID: 7
  },
  {
    movieType: "comedy",
    movieURL: `${baseURL}/discover/movie?api_key=${apiKey}&with_genres=35`,
    movieID: 8
  },
  {
    movieType: "history",
    movieURL: `${baseURL}/discover/movie?api_key=${apiKey}&with_genres=36`,
    movieID: 9
  },
  {
    movieType: "horror",
    movieURL: `${baseURL}/discover/movie?api_key=${apiKey}&with_genres=27`,
    movieID: 10
  },
  {
    movieType: "thriller",
    movieURL: `${baseURL}/discover/movie?api_key=${apiKey}&with_genres=53`,
    movieID: 11
  },
  {
    movieType: "scienceFiction",
    movieURL: `${baseURL}/discover/movie?api_key=${apiKey}&with_genres=878`,
    movieID: 12
  },
  {
    movieType: "family",
    movieURL: `${baseURL}/discover/movie?api_key=${apiKey}&with_genres=10751`,
    movieID: 13
  },
  {
    movieType: "romance",
    movieURL: `${baseURL}/discover/movie?api_key=${apiKey}&with_genres=10749`,
    movieID: 14
  },
  {
    movieType: "documentry",
    movieURL: `${baseURL}/discover/movie?api_key=${apiKey}&with_genres=99`,
    movieID: 15
  },
];
