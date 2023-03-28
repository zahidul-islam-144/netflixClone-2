import React, { useState } from "react";

type fetchValuesType = {
  values: object | any;
};

let fetchMovieObjects: fetchValuesType;

const useFetchMovies = (values: fetchValuesType): object | any => {
  const [movies] = useState(values); // dynamically set values into state
  // console.log("💛 fetchMovieObjects:", movies)
  return (fetchMovieObjects = values);
};

export { fetchMovieObjects, useFetchMovies };
