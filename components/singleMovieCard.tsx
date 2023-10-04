import React, { Suspense, useState, FC } from "react";
import Image from "next/image";
import { Movie } from "../utilities/types";
import MoviePreview from "./MoviePreview";
import ImageLoading from "./imageLoading";
import useStorage from "../hooks/useStorage";
import { FaPlay } from "react-icons/fa";
import { BiDislike, BiLike, BiPlus } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HandThumbsUp, HandThumbsDown } from "react-bootstrap-icons";
import { IoIosArrowDown } from "react-icons/io";

type propsType = {
  singleMovieCard: Movie;
  indexNumber: number;
  movieType: string;
  // handleImageLoading:  (isLoading:boolean) => void;
};

type classType = {
  className: string;
};

const SingleMovieCard: FC<propsType> = ({
  singleMovieCard,
  movieType,
  indexNumber,
}) => {
  const { setIsOpen, setTargetMovie } = useStorage();

  const baseURL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;
  const imageSrc = `${baseURL}${
    singleMovieCard?.backdrop_path || singleMovieCard?.poster_path
  }`;

  return (
    <div
      className="singleMovieCard"
      onClick={() => {
        setIsOpen(true),
          setTargetMovie({ id: singleMovieCard?.id, movieType: movieType });
      }}
    >
      <div className="cardImageBlock">
        <Image
          src={imageSrc}
          alt={`Image of ${
            singleMovieCard?.name || singleMovieCard?.original_name
          }`}
          quality={100}
          loading="lazy"
          layout="fill"
          className="cardImage"
          placeholder="blur"
          blurDataURL="https://loading.io/asset/692159"
        />
      </div>

      <div className="moviePreview_block">
        <div className="previewImageBlock">
          <Image
            src={imageSrc}
            alt={`Image of ${
              singleMovieCard?.name || singleMovieCard?.original_name
            }`}
            quality={100}
            loading="lazy"
            layout="fill"
            className="cardImage"
            placeholder="blur"
            blurDataURL="https://loading.io/asset/692159"
          />
        </div>

        <div className="previewContents">
          <div className="buttonsBlock">
            <div className="play">
              <FaPlay className="playIcon" />
            </div>
            <div className="myList">
              <BiPlus className="addMyListIcon" />
            </div>
            <div className="reacts">
              <HandThumbsUp />

              <div className="reactsExpansion">
                <div className="reacts2">
                  <div>
                    <HandThumbsDown className="dislike" />
                  </div>
                  <div>
                    <HandThumbsUp className="like1" />
                  </div>
                  <div>
                    <HandThumbsUp className="likeOverlap" />
                    <HandThumbsUp className="like2" />
                  </div>
                </div>
              </div>
            </div>
            <div className="removed">
              <AiOutlineClose className="removeIcon" />
            </div>
          </div>

          <div
            className="episodes_info"
            onClick={() => {
              setIsOpen(true),
                setTargetMovie({
                  id: singleMovieCard?.id,
                  movieType: movieType,
                });
            }}
          >
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovieCard;
