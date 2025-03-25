import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchTrendingMovies } from "../../services/api";
import style from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const trendingMovies = await fetchTrendingMovies();
      setMovies(trendingMovies);
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1 className={style.home}>Trending Today</h1>
      <ul className={style.movieitem}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              style={{ color: "#3d5231", textDecoration: "underline" }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
