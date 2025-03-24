import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  fetchMovieDetails,
  fetchMovieCast,
  fetchMovieReviews,
} from "../../services/api";
import { Outlet, useOutletContext } from "react-router-dom";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const movieData = await fetchMovieDetails(movieId);
      const castData = await fetchMovieCast(movieId);
      const reviewsData = await fetchMovieReviews(movieId);

      setMovie(movieData);
      setCast(castData);
      setReviews(reviewsData);
    };

    fetchDetails();
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <button>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
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
              <Link
                to={`/movies/${movieId}/cast`}
                style={{ color: "blue", textDecoration: "underline" }}
              >
                Cast
              </Link>
            </li>
            <li>
              <Link
                to={`/movies/${movieId}/reviews`}
                style={{ color: "blue", textDecoration: "underline" }}
              >
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Display Cast or Reviews based on route */}
      <Outlet context={{ cast, reviews }} />
    </div>
  );
};

const Cast = () => {
  const { cast } = useOutletContext();
  return (
    <div>
      <h3>Cast</h3>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
              style={{ width: "100px", height: "auto" }}
            />
            <p>
              {actor.name} as {actor.character}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Reviews = () => {
  const { reviews } = useOutletContext();
  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetailsPage;
