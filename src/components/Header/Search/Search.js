import React from 'react';
import './Search.css';

import InputBase from '@material-ui/core/InputBase';

export const Search = ({ placeholder, searchResults, onSearchChange }) => {
  return (
    <div className="ins-search">
      <InputBase
        type="search"
        placeholder={placeholder}
        className="ins-search-box"
        inputProps={{ 'aria-label': 'search' }}
        onChange={onSearchChange}
      />
    </div>
  );
};
