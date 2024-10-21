// src/components/SearchBar.jsx
import React, { useState } from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ onSearch, clearInputAfterSearch = true }) => { // Added prop
  const [term, setTerm] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (term) {
      onSearch(term);
      if (clearInputAfterSearch) {
        setTerm(''); // Clear the input after searching if prop is true
      }
    }
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={onFormSubmit} className="search-bar">
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search for images..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
