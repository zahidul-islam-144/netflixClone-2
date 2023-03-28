import React, { createContext, ReactNode, useContext, useState } from "react";
import { fetchMovieObjects, useFetchMovies } from "../hooks/useFetchMovies";
import { ContextType } from "../utilities/types";

type Props = {
  children: ReactNode;
  // data: object | any;
};

const defaulValues = {
  movieObjects: {},
  setMovieObjects: (): object | any => null,
  authData: null,
  setAuthData: (): any => null,
};

// creating context to share in whole project
export const context = createContext<ContextType>(defaulValues);

const StoreProvider = ({ children }: Props) => {
  const [movieObjects, setMovieObjects] = useState<Props | any>({});
  const [authData, setAuthData] = useState<Props | any>({});

  return (
    <>
      <context.Provider
        value={{ movieObjects, setMovieObjects, authData, setAuthData }}
      >
        {children}
      </context.Provider>
    </>
  );
};

export default StoreProvider;
