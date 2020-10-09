# Navigators

1. Create a folder `Navigators` inside `src/components/Header`
2. Create 4 files:
   - Navigators.js
   - Navigators.css
   - Profile.css
   - Profile.js

> Open `Navigators.js` and paste the following:

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

> Open `Navigators.css` and paste the following:

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

> Open `Profile.js` and paste the following:

```js
import React from 'react';
import './Profile.css';
import { Avatar } from '@material-ui/core';
import { getBackgroundColor } from '../../ProfileCard/ProfileCard';

export const Profile = ({ username }) => {
  const firstCharacter = username ? username[0].toUpperCase() : '';
  return (
    <Avatar
      className="profile-avatar"
      style={{ background: getBackgroundColor(firstCharacter) }}
    >
      {firstCharacter || '-'}
    </Avatar>
  );
};
```

> Open `Profile.css` and paste the following:

```css
.navigator .profile-avatar {
  border-radius: 50%;
  width: 24px;
  height: 24px;
  font-size: 14px;
}
```
