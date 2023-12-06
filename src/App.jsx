// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import MovieDetails from './components/MovieDetails';
import MovieCard from './components/MovieCard';

const App = () => {
  const [movies, setMovies] = useState([
    // Your movie data
  ]);

  const [filter, setFilter] = useState({ title: '', rating: '' });

  const handleFilterChange = (newFilter) => {
    setFilter((prevFilter) => ({ ...prevFilter, ...newFilter }));
  };

  const filteredMovies = movies.filter((movie) => {
    const titleMatch = movie.title.toLowerCase().includes(filter.title.toLowerCase());
    const ratingMatch = filter.rating ? movie.rating >= parseInt(filter.rating, 10) : true;
    return titleMatch && ratingMatch;
  });

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <MovieList movies={filteredMovies} />} />
        <Route path="/movies/:id" component={MovieDetails} />
      </Switch>

      <div className="app">
        <Filter onFilterChange={handleFilterChange} />
        <MovieList movies={filteredMovies}/>
        <MovieCard />
      </div>
    </Router>
  );
};

export default App;
