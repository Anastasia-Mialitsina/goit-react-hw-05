import React, { useState } from "react";
import style from './MovieSearchForm.module.css';

const MovieSearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={style.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
      />
      <button type="submit" className={style.btn}>
        Search
      </button>
    </form>
  );
};

export default MovieSearchForm;
