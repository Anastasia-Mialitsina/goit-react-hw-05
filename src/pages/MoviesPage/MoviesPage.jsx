import React, { useState } from "react";
import MovieSearchForm from "../../components/MovieSearchForm/MovieSearchForm"; 
import { Link } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=b6e4115a9d43fdee0d017c42ccd345ca`
    ); 
    const data = await response.json();
    setMovies(data.results); 
  };
  
  return (
    <div>
      <h1>Movies</h1>
      <MovieSearchForm onSearch={handleSearch} />
      <ul>
        {movies?.length > 0 ? (
          movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </ul>
    </div>
  );
};

export default MoviesPage;
