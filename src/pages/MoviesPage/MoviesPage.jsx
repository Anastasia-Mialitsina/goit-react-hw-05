// import React, { useState } from "react";
// import MovieSearchForm from "../../components/MovieSearchForm/MovieSearchForm"; 
// import { Link } from "react-router-dom";

// import style from './MoviesPage.module.css';

// const MoviesPage = () => {
//   const [movies, setMovies] = useState([]);

//   const handleSearch = async (query) => {
//     const response = await fetch(
//       `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=b6e4115a9d43fdee0d017c42ccd345ca`
//     ); 
//     const data = await response.json();
//     setMovies(data.results); 
//   };
  
//   return (
//     <div>
//       <h1 className={style.title}>Movies</h1>
//       <MovieSearchForm onSearch={handleSearch} />
//       <ul>
//         {movies?.length > 0 ? (
//           movies.map((movie) => (
//             <li key={movie.id}>
//               <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
//             </li>
//           ))
//         ) : (
//           <p>No movies found</p>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default MoviesPage;

/*import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import MovieSearchForm from "../../components/MovieSearchForm/MovieSearchForm";
import style from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=b6e4115a9d43fdee0d017c42ccd345ca`
      );
      const data = await response.json();
      setMovies(data.results);
    };

    fetchMovies();
  }, [query]);

  const handleSearch = (newQuery) => {
    setSearchParams({ query: newQuery });
  };

  return (
    <div>
      <h1 className={style.title}>Movies</h1>
      <MovieSearchForm onSearch={handleSearch} />
      <ul>
        {movies.length > 0 ? (
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

export default MoviesPage;*/


import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieSearchForm from "../../components/MovieSearchForm/MovieSearchForm";
import MovieList from "../../components/MovieList/MovieList";
import style from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=b6e4115a9d43fdee0d017c42ccd345ca`
      );
      const data = await response.json();
      setMovies(data.results);
    };

    fetchMovies();
  }, [query]);

  const handleSearch = (newQuery) => {
    setSearchParams({ query: newQuery });
  };

  return (
    <div>
      <h1 className={style.title}>Movies</h1>
      <MovieSearchForm onSearch={handleSearch} />
      {movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
};

export default MoviesPage;
