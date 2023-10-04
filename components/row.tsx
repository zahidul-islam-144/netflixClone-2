// import { type } from "os";
import React, { useState, useRef, Suspense } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { capitalizeFirstLetter } from "../utilities/utilities";
import { Movie } from "../utilities/types";
import SingleMovieCard from "./singleMovieCard";

type propsType = {
  movies: any;
};

const Row = ({ movies }: propsType) => {
  const [isMouseEnter, setIsMouseEnter] = useState<boolean>(false);
  const [isRightArrowClicked, setIsRightArrowClicked] =
    useState<boolean>(false);
  const [isLeftArrowClicked, setIsLeftArrowClicked] = useState<boolean>(false);

  const [isMoved, setIsMoved] = useState<boolean>(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isImageLoading, setIsImageLoading] = useState<boolean>(false);

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

  const handleImageLoading = (isLoading: boolean) => {
    setIsImageLoading(isLoading);
  };

  // console.log("💛isImageLoading:", isImageLoading);
  return (
    <div
      className={`row_wrapper `}
      onMouseEnter={() => setIsMouseEnter(true)}
      onTouchStart={() => setIsMouseEnter(true)}
      onMouseLeave={() => setIsMouseEnter(false)}
    >
      <div className="row_title_block">
        <h1 className={`movieTitle `}>
          {capitalizeFirstLetter(movies[0])}
        </h1>
      </div>

      <div className={`rowSlider`}>
        {/* previous button */}
        {isMouseEnter && isRightArrowClicked && (
          <div
            className="sliderBar prevButton"
            onClick={() => {
              hanldeSlider("LEFT"), setIsLeftArrowClicked(true);
              // setIsRightArrowClicked(false);
            }}
          >
            <MdArrowBackIos className="arrowIcon" />
          </div>
        )}

        {/* movie collections */}
        <div
          className="rowElementContainer peek_hidden peek_shown"
          ref={sliderRef}
        >
          <div className="movieItems">
            {movies[1]
              .slice(0)
              .map((singleMovieCard: Movie, index: number) => (
                <>
                  <SingleMovieCard
                    key={singleMovieCard?.id}
                    singleMovieCard={singleMovieCard}
                    indexNumber={index}
                    movieType={movies[0]}
                    // handleImageLoading={handleImageLoading}
                  />
                </>
              ))}
          </div>
        </div>
        {/* movie collections */}

        {/* next button */}
        {isMouseEnter && (
          <div
            className="sliderBar  nextButton"
            onClick={() => {
              setIsLeftArrowClicked(false);
              setIsRightArrowClicked(true);
              hanldeSlider("RIGHT");
            }}
          >
            <MdArrowForwardIos className="arrowIcon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Row;
