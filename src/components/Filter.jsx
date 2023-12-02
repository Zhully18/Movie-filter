// Filter.js
import React from 'react';

const Filter = ({ onFilterChange }) => (
  <div className="filter">
    <label htmlFor="title">Title:</label>
    <input
      type="text"
      id="title"
      onChange={(e) => onFilterChange({ title: e.target.value })}
    />

    <label htmlFor="rating">Rating:</label>
    <input
      type="number"
      id="rating"
      min="1"
      max="5"
      onChange={(e) => onFilterChange({ rating: e.target.value })}
    />
  </div>
);

export default Filter;
