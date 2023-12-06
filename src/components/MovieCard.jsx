// MovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';


const MovieCard = ({ movie }) => (
  <div className="movie-card">
     <Link to={`/movie/${movie.id}`} state={{ movie }}>
      <img src={movie.large_cover_image} alt={movie.title} />
    </Link>
    <div className="movie-info">
      <h3>{movie.title}</h3>
      <p>{movie.summary
}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  </div>
);

export default MovieCard;
