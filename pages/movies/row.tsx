import { type } from "os";
import React, { useState, useRef } from "react";
import { Movie } from "../../utilities/types";
import { capitalizeFirstLetter } from "../../utilities/utilities";
import SingleMovieCard from "./singleMovieCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

type propsType = {
  movieCategory: any;
};

const Row = ({ movieCategory }: propsType) => {
  const [isMouseEnter, setIsMouseEnter] = useState<boolean>(false);
  const [isRightArrowClicked, setIsRightArrowClicked] =
    useState<boolean>(false);
  const [isMoved, setIsMoved] = useState<boolean>(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // handle slider functionalities:
  const hanldeSlider = (direction: string) => {
    setIsMoved(true);
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo =
        direction === "LEFT"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      sliderRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div
      className="row_wrapper"
      onMouseEnter={() => setIsMouseEnter(true)}
      onTouchStart={() => setIsMouseEnter(true)}
      onMouseLeave={() => setIsMouseEnter(false)}
    >
      <h1 className="movieTitle">{capitalizeFirstLetter(movieCategory[0])}</h1>

      <div className="rowElementWrapper">
        {isMouseEnter && isRightArrowClicked && (
          <MdArrowBackIos
            className="rowSlider leftArrow"
            onClick={() => hanldeSlider("LEFT")}
          />
        )}
        <div className="rowBlock" ref={sliderRef}>
          {movieCategory[1].map((singleMovieCard: Movie) => (
            <SingleMovieCard
              key={singleMovieCard?.id}
              singleMovieCard={singleMovieCard}
            />
          ))}
        </div>
        {isMouseEnter && (
          <MdArrowForwardIos
            className="rowSlider rightArrow"
            onClick={() => {
              setIsRightArrowClicked(true);
              hanldeSlider("RIGHT");
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Row;
