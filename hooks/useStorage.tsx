import { useContext } from "react";
import { context } from "../context/StoreContext";

const useStorage = () => {
  return useContext(context);
};

export default useStorage;
