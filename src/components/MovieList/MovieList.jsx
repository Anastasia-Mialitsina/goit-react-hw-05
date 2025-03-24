// src/components/MovieList.jsx
import React from "react";

const MovieList = ({ movies }) => {
  return (
    <div>
      <h2>Список популярных фильмов</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
