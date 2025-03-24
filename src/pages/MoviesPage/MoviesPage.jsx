import React, { useState } from "react";
import MovieSearchForm from "../../components/MovieSearchForm/MovieSearchForm"; 

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    const response = await fetch(
      `https://api.example.com/search?query=${query}`
    ); 
    const data = await response.json();
    setMovies(data.results); 
  };

  return (
    <div>
      <h1>Movies</h1>
      <MovieSearchForm onSearch={handleSearch} />
      {/* Здесь отобразим результаты поиска */}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
