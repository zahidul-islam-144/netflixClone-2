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
  isOpen: false,
  setIsOpen: (): boolean|any => null,
  targetMovie: {},
  setTargetMovie: (): boolean|any => null
};

// creating context to share in whole project
export const context = createContext<ContextType>(defaulValues);

const StoreProvider = ({ children }: Props) => {
  const [movieObjects, setMovieObjects] = useState<Props | any>({});
  const [isOpen, setIsOpen] = useState<Props | any>(false)
  const [authData, setAuthData] = useState<Props | any>({});
  const [targetMovie, setTargetMovie] = useState<Props | any>(null);

  return (
    <>
      <context.Provider
        value={{ movieObjects, setMovieObjects, authData, setAuthData, isOpen, setIsOpen, targetMovie, setTargetMovie }}
      >
        {children}
      </context.Provider>
    </>
  );
};

export default StoreProvider;
