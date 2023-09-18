import axios from "@/axios";
import React, { useEffect, useState } from "react";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="text-white ml-5 " aria-label="row">
      <h2>{title}</h2>

      <div
        className=" flex overflow-y-hidden overflow-x-hidden p-5"
        alt="row_posters"
      >
        {movies.map((movie) => (
          <img
            className={`max-h-24 object-contain mr-2.5 transition duration-450 hover:scale-105 opacity-100 ${
              isLargeRow ? "max-h-64" : ""
            }`}
            key={movie.id}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
