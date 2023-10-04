import { Dispatch, SetStateAction } from "react";

export interface ObjType {
  [key: string]: [] | number; // dynamically setting types for key and key_value and to set object key-value pair
}

export interface NavLinkType {
  [key: string]: string; // dynamically setting types for key and key_value and to set object key-value pair
}
export interface formInputType {
  [key: string]: string|any; // dynamically setting types for key and key_value and to set object key-value pair
}

export interface UriType {
  movieType?: string | any;
  movieURL?: string | any;
  movieID?: number | any;
}

export interface Movie {
  title: string;
  backdrop_path?: string;
  media_type?: string;
  release_date?: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  vote_average: number;
  vote_count: number;
}

export interface MoviePropsType {
  netflixOriginals: Movie[];
  topRated: Movie[];
  trending: Movie[];
  adeventure: Movie[];
  fantasy: Movie[];
  animation: Movie[];
  drama: Movie[];
  action: Movie[];
  comedy: Movie[];
  history: Movie[];
  horror: Movie[];
  thriller: Movie[];
  scienceFiction: Movie[];
  family: Movie[];
  romance: Movie[];
  documentry: Movie[];
  movieObjects: object | any;
}

export interface targetMovieObjectType {
  id: string,
  movieType: string
}

export interface ContextType extends targetMovieObjectType{
  movieObjects: object | any;
  setMovieObjects: Dispatch<SetStateAction<object|any>>;
  authData?: any;
  setAuthData: Dispatch<SetStateAction<any>>;
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<any>>;
  targetMovie: targetMovieObjectType;
  setTargetMovie: Dispatch<SetStateAction<any>>;
}

