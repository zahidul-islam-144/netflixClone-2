import React, { useState, FC, useRef, useEffect, RefObject } from "react";
import Image from "next/image";
import { Movie } from "../utilities/types";
import MoviePreview from "./MoviePreview";
import useStorage from "../hooks/useStorage";
import { FaPlay } from "react-icons/fa";
import { BiDislike, BiLike, BiPlus } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HandThumbsUp, HandThumbsDown } from "react-bootstrap-icons";
import { IoIosArrowDown } from "react-icons/io";
import ToolTips from "./sharedComponent/ToolTips";

type propsType = {
  singleMovieCard: Movie;
  indexNumber: number;
  movieType: string;
  // handleImageLoading:  (isLoading:boolean) => void;
};

const SingleMovieCard: FC<propsType> = ({
  singleMovieCard,
  movieType,
  indexNumber,
}) => {
  const { isOpen, setIsOpen, setTargetMovie } = useStorage();
  const [myRef, setMyRef] = useState<HTMLDivElement|null>(null);
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
  const myListRef = useRef<HTMLDivElement|null>(null);
  const infoRef = useRef<HTMLDivElement|null>(null);
  const removeRef = useRef<HTMLDivElement|null>(null);
  const dislikeRef = useRef<HTMLDivElement|null>(null);
  const like1Ref = useRef<HTMLDivElement|null>(null);
  const like2Ref = useRef<HTMLDivElement|null>(null);

  const baseURL:any = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;
  const imageSrc:string = `${baseURL}${
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
            <div
              className="myList"
              ref={myListRef}
            >
              <BiPlus className="addMyListIcon" />
              <ToolTips elementRef={myListRef} content='Add to my list' toolTipClass="myList_tp"/>
            </div>
            <div className="reacts">
              <HandThumbsUp />

              <div className="reactsExpansion">
                <div className="reacts2">
                  <div ref={dislikeRef}>
                    <HandThumbsDown className="dislike"/>
                    <ToolTips elementRef={dislikeRef} content='Not for me' toolTipClass="dislike_tp"/>
                  </div>
                  <div ref={like1Ref}>
                    <HandThumbsUp className="like1" />
                    <ToolTips elementRef={like1Ref} content='I like this' toolTipClass="like1_tp"/>
                  </div>
                  <div ref={like2Ref}>
                    <HandThumbsUp className="likeOverlap" />
                    <HandThumbsUp className="like2" />
                    <ToolTips elementRef={like2Ref} content='I love this!' toolTipClass="like2_tp"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="removed" ref={removeRef}>
              <AiOutlineClose className="removeIcon" />
              <ToolTips elementRef={removeRef} content='Remove from row' toolTipClass="remove_tp"/>
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
            ref={infoRef}
          >
            <IoIosArrowDown />
            <ToolTips elementRef={infoRef} content='Episodes & info' toolTipClass="episodes_info_tp"/>
          </div> 
        </div>

        <div className="movie_rating">
            Rating<span>{singleMovieCard?.vote_average.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleMovieCard;
