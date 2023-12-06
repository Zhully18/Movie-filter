// MovieList.js
import {useState, useEffect} from 'react';
import MovieCard from './MovieCard';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async() => {
    const url = 'https://list-movies.p.rapidapi.com/list_movies.json';
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'aad7867c1dmsh6d84afb69e91c69p1bd499jsne57f3b5c0525',
          'X-RapidAPI-Host': 'list-movies.p.rapidapi.com'
        }
      };
      
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setMovies(result.data.movies)
      } catch (error) {
        console.error(error);
      }
  };

  useEffect(() => {
    fetchMovies();
  }, [])

  console.log(movies)
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </div>
  );

}

export default MovieList;
