# Search

1. Create a folder `Search` inside `src/components/Header`
2. Create 2 files:
   - Search.js
   - Search.css

> Open `Search.js` and paste the following:

```js
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
```

> Open `Search.css` and paste the following:

```css
.ins-search-box {
  width: 215px;
}
.ins-search-box input {
  background-color: #fafafa;
  border: solid 1px #dbdbdb;
  padding: 4px;
  font-size: 14px;
  text-align: center;
}

.ins-search-box input:focus {
  text-align: left;
}
```
