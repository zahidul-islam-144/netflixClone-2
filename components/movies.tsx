import React from "react";
import useStorage from "../hooks/useStorage";
import Row from "../components/row";

type propsType = {
  movieObjects: any;
};

const Movies = () => {
  const { movieObjects } = useStorage();
  const arrayConvertedData = Object.entries(movieObjects);
  // converted to array-object

  return (
    <section className="rowContainer">
      {arrayConvertedData.slice(0).map((data) => (
        <>
          <Row movies={data} />
        </>
      ))}
    </section>
  );
};

export default Movies;
