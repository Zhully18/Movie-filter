// MovieDetails.js
import React from 'react';
import { Link } from 'react-router-dom';

const MovieDetails = ({ match }) => {
  // Use match.params.id to get the movie ID from the URL
  const movieId = match.params.id;
  // Fetch movie details using movieId from your movie data

  return (
    <div>
      {/* Movie details */}
      <h2>Movie Details</h2>
      <h3>This is an interesting movie</h3>
      <Link to="/"><button>Back to Home</button></Link>
    </div>
  );
};

export default MovieDetails;
