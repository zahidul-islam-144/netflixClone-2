import Image from "next/image";
import { useEffect, useState } from "react";
import { Movie } from "../utilities/types";
import { textTruncate } from "../utilities/utilities";
import { FaPlay } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
import useStorage from "../hooks/useStorage";

type propsType = {
  netflixOriginals: Movie[];
};

const Banner = ({ netflixOriginals }: propsType) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const movieObjects = useStorage();

  const baseURL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;
  const imageSrc = `${baseURL}${movie?.backdrop_path || movie?.poster_path}`;

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals?.length)]
    );
  }, [netflixOriginals]);

  return (
    <section className="banner_main_section">
      <div className="bannerImageBlock">
        <Image
          src={`${imageSrc}`}
          alt={`Image of ${movie?.name || movie?.original_name}`}
          height={50}
          width={100}
          loading="lazy"
          layout="responsive"
        />

        <div className="gradientBlock"></div>
      </div>

      <div className="bannerContentBlock">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>

        <div className="movieOverview">
          {textTruncate(movie?.overview, 120)}
        </div>

        <div className="btnBlock">
          <button>
            <FaPlay className="btnIcon" />
            Play
          </button>

          <button>
            More Info
            <BsFillInfoCircleFill className="btnIcon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
