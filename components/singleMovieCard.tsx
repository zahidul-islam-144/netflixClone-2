import React, { useState } from "react";
import Image from "next/image";
import { Movie } from "../utilities/types";

type propsType = {
  singleMovieCard: Movie;
};

const SingleMovieCard = ({ singleMovieCard }: propsType) => {
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
  const baseURL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;
  const imageSrc = `${baseURL}${
    singleMovieCard?.backdrop_path || singleMovieCard?.poster_path
  }`;

const handleHoverCard = () => {
  setTimeout(() => {
    setIsMouseOver(true);
  }, 800);
}
  return (
    <div className="singleMovieCard" onMouseLeave={()=> setIsMouseOver(false)}>
      <div className={`cardImageBlock ${isMouseOver ? 'mouseOver':'cardImageBlock'}`}>
        <Image
          src={imageSrc}
          alt={`Image of ${
            singleMovieCard?.name || singleMovieCard?.original_name
          }`}
          quality={100}
          loading="lazy"
          layout="fill"
          className="cardImage"
        />
      </div>
    </div>
  );
};

export default SingleMovieCard;
