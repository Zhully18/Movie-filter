// App.js
import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Its a wonderful Knife',
      description: 'A mind-bending thriller',
      posterURL: 'https://nkiri.com/wp-content/uploads/2023/12/its-a-wonderful-knife-hollywood-movie.jpg',
      rating: 4.5,
    },
    {
      title: 'The Story of Parks Marriage Contract',
      description: 'A mind-bending thriller',
      posterURL: 'https://nkiri.com/wp-content/uploads/2023/11/the-story-of-parks-marriage-contract-korean-drama-200x300.jpg',
      rating: 4.5,
    },
    {
      title: 'My Demon',
      description: 'A mind-bending thriller',
      posterURL: 'https://nkiri.com/wp-content/uploads/2023/11/my-demon-korean-drama-200x300.jpg',
      rating: 4.5,
    },
    {
      title: 'Woman of 9.9 billion',
      description: 'A mind-bending thriller',
      posterURL: 'https://nkiri.com/wp-content/uploads/2023/11/woman-of-9.9-billion-korean-drama-200x300.jpg',
      rating: 4.5,
    },
    {
      title: 'Vigilante',
      description: 'A mind-bending thriller',
      posterURL: 'https://nkiri.com/wp-content/uploads/2023/11/vigilante-korean-drama-200x300.jpg',
      rating: 4.5,
    },
    {
      title: 'The marchmaker',
      description: 'A mind-bending thriller',
      posterURL: 'https://nkiri.com/wp-content/uploads/2023/10/the-matchmakers-korean-drama-200x300.jpg',
      rating: 4.5,
    },
  
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
    <div className="app">
      <Filter onFilterChange={handleFilterChange}/>
      <MovieList movies={filteredMovies}/>
      {/* Add a component or form to add new movies */}
    </div>
  );
};

export default App;
