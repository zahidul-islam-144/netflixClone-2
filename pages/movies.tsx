import React from "react";
import useStorage from "../hooks/useStorage";
import Row from "./row";

type propsType = {
  movieObjects: any;
};

const Movies = () => {
  const { movieObjects } = useStorage();
  const arrayConvertedData = Object.entries(movieObjects);// converted to array-object

  return (
    <section className="rowContainer">
      {arrayConvertedData.map((data) => (
        <>
          <Row movieCategory={data} />
        </>
      ))}
    </section>
  );
};

export default Movies;
