import requests from "@/Requests";
import axios from "@/axios";
import React, { useEffect, useState } from "react";

function Banner() {
  // TMDB請求數據
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);
  console.log(movie);

  // 縮短輸入的字串
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="relative h-96 text-white"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="ml-8 pt-36 h-48 " alt="bannerContents">
        <h1 className="text-5xl font-extrabold pb-2" alt="bannerTitle">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="" alt="bannerButtons">
          <button
            className="cursor-point text-white  font-medium 
            rounded-sm pl-8 pr-8 mr-4 bg-neutral-900 pb-0.5 py-1 hover:text-black hover:bg-white hover:ease-in duration-300"
            alt="button"
          >
            Play
          </button>
          <button
            className="cursor-point text-white  font-medium 
            rounded-sm pl-8 pr-8 mr-4 bg-neutral-900 pb-0.5 py-1 hover:text-black hover:bg-white hover:ease-in duration-300"
            alt="button"
            // transition:all 0.2s 查這個變化
          >
            My List
          </button>
        </div>
        <h1
          className="w-45rem leading-5 pt-4 text-sm max-w-xs h-20"
          alt="bannerDescription"
        >
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div
        // className="h-28 bg-gradient-to-b from-transparent via-gray-600 to-black "
        alt="bannerFadeBottom"
      />
    </header>
  );
}

export default Banner;
