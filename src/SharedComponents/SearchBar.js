// src/SharedComponents/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch, onClear }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleClear = () => {
    setSearchTerm('');
    onClear();
  };

  return (
    <span className="search-bar min-margin">
        <div class="input-group rounded">
            <input type="search" class="form-control rounded" aria-label="Search" aria-describedby="search-addon" value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search recipes..." />
            <span class="input-group-text border-0 mouse-pointer" id="search-addon" onClick={handleSearch}>
                <i class="fas fa-search">Click</i>
            </span>
            <span class="input-group-text border-0 mouse-pointer" id="search-addon" onClick={handleClear}>
                <i class="fas fa-search">Clear</i>
            </span>
        </div>
    </span>
  );
};

export default SearchBar;
