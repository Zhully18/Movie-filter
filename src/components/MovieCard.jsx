// MovieCard.js
import React from 'react';

const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <img src={movie.large_cover_image
} alt={movie.title} />
    <div className="movie-info">
      <h3>{movie.title}</h3>
      <p>{movie.summary
}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  </div>
);

export default MovieCard;
