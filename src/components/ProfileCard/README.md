## Profile Card

1. Create a folder with the name **ProfileCard** under **components** folder.
2. Inside **ProfileCard** folder, create 2 files.
   1. Create **ProfileCard.js** - the react component file
   2. Create **ProfileCard.css** - the styles

> Inside **ProfileCard.js** file, copy paste the following

```js
import React from 'react';
import './ProfileCard.css';
import { Avatar } from '@material-ui/core';

const COLOR_MAP = {
  A: '#fb0c1c',
  B: '#a44f5a',
  C: '#a575bb',
  D: '#b8749c',
  E: '#7dfefc',
  F: '#a0082e',
  G: '#3bf231',
  H: '#3d9b89',
  I: '#77f5f2',
  J: '#f3c312',
  K: '#c79d27',
  L: '#7563f8',
  M: '#4356bd',
  N: '#41f07e',
  O: '#578044',
  P: '#376126',
  Q: '#d47064',
  R: '#188cad',
  S: '#e67869',
  T: '#e216d5',
  U: '#12b56',
  V: '#b21e35',
  W: '#3f8216',
  X: '#9a2b51',
  Y: '#4c6997',
  Z: '#b96cda',
};

const DEFAULT_COLOR = 'grey';

export const getBackgroundColor = (character) => {
  return COLOR_MAP[character] || DEFAULT_COLOR;
};

export const ProfileCard = ({
  className = 'profile-card',
  username,
  description,
  link = '',
  isFollowRequired = false,
}) => {
  const firstCharacter = username[0].toUpperCase();
  return (
    <a className="profile-navigation-link" href={link}>
      <div className={className}>
        <div>
          <Avatar style={{ background: getBackgroundColor(firstCharacter) }}>
            {firstCharacter}
          </Avatar>
        </div>
        <div className="content-area">
          <span className="username">{username}</span>
          <p className="decription">{description}</p>
        </div>
      </div>
    </a>
  );
};
```

> Inside **ProfileCard.css** file, copy paste the following

```css
.profile-navigation-link {
  text-decoration: none;
}

.profile-card {
  display: flex;
}

.profile-card .content-area .decription {
  padding: 0;
  margin: 0;
  color: #8e8e8e;
  font-size: 12px;
}

.profile-card .content-area {
  margin-left: 10px;
}

.profile-card .content-area .username {
  color: #262626;
  font-weight: bold;
  font-size: 14px;
}
```
