import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movieData, movieSearch, rateMovie }) => {
  return (
    <div
        style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}>
      {movieData
        .filter(
          (movie) =>
            movie.title.toLowerCase().includes(movieSearch.toLowerCase().trim()) &&
            movie.rate >= rateMovie
        )
        .map((movie, i) => (
          <MovieCard  movie={movie} key={i} />
        ))}
    </div>
  );
};

export default MovieList;