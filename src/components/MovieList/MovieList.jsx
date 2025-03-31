// import React from "react";

// const MovieList = ({ movies }) => {
//   return (
//     <div>
//       <h2></h2>
//       <ul>
//         {movies.map((movie) => (
//           <li key={movie.id}>
//             <h3>{movie.title}</h3>
//             <p>{movie.overview}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MovieList;

/*import { Link } from "react-router-dom";
import style from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  return (
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
  );
};

export default MovieList;*/

import { Link, useLocation } from "react-router-dom";
import style from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={style.movieitem}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            style={{ color: "#3d5231", textDecoration: "underline" }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
