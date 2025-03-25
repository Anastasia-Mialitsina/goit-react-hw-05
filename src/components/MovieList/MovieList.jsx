import React from "react";
//import style from './MovieList.module.css';

const MovieList = ({ movies }) => {
  return (
    <div>
      <h2></h2>
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
