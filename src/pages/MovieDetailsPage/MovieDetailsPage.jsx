import React, { useState, useEffect } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { fetchMovieDetails } from "../../services/api";
import "./MovieDetailsPage.module.css";
import style from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const movieData = await fetchMovieDetails(movieId);
      setMovie(movieData);
    };
    fetchDetails();
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <button className={style.btn}>
        <Link to="/" style={{ textDecoration: "none", color: "#122d17" }}>
          Go Back
        </Link>
      </button>

      <div style={{ display: "flex" }}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          style={{ width: "300px", height: "auto" }}
        />
        <div style={{ marginLeft: "20px" }}>
          <h2>
            {movie.title} ({movie.release_date.split("-")[0]})
          </h2>
          <p>User Score: {movie.vote_average * 10}%</p>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>

          <h3>Additional Information</h3>
          <ul>
            <li>
              <Link to="cast" className={style.ct}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" className={style.ct}>
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;

