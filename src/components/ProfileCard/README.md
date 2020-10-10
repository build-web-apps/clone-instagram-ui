## Profile Card

1. Create a folder with the name **ProfileCard** under **components** folder.
2. Inside **ProfileCard** folder, create 4 files.
   1. Create **ProfileCard.js** - the react component file
   2. Create **ProfileCard.css** - the styles
   3. Create **BigProfileCard.js** - the react component file
   4. Create **BigProfileCard.css** - the styles

> Inside **ProfileCard.js** file, copy paste the following

```js
import React from 'react';
import './ProfileCard.css';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
  userName,
  description,
  link = '',
  isFollowRequired = false,
}) => {
  const firstCharacter = userName[0].toUpperCase();
  return (
    <Link to={`/profile/${userName}`} className="profile-navigation-link">
      <div className={className}>
        <div>
          <Avatar style={{ background: getBackgroundColor(firstCharacter) }}>
            {firstCharacter}
          </Avatar>
        </div>
        <div className="content-area">
          <span className="username">{userName}</span>
          <p className="decription">{description}</p>
        </div>
      </div>
    </Link>
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

> Inside **BigProfileCard.js** file, copy paste the following

```js
import React from 'react';
import './BigProfileCard.css';
import { Avatar, Button } from '@material-ui/core';

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

export const BigProfileCard = ({
  className = 'big-profile-card',
  userName,
  name,
  description,
  showFollowing,
  isFollowing,
  postsCount,
  followersCount,
  followingCount,
  handleFollowClick,
}) => {
  const firstCharacter = userName[0].toUpperCase();
  return (
    <div className={className}>
      <div className="avatar-area">
        <Avatar
          className="big-profile-avatar"
          style={{ background: getBackgroundColor(firstCharacter) }}
        >
          {firstCharacter}
        </Avatar>
      </div>
      <div className="content-area">
        <div className="content-item">
          <b className="username">{userName}</b>
          {showFollowing && (
            <Button
              size="small"
              variant={isFollowing ? 'outlined' : 'contained'}
              color={isFollowing ? '' : 'primary'}
              onClick={() => {
                handleFollowClick();
              }}
            >
              {isFollowing ? 'Following' : 'Follow'}
            </Button>
          )}
        </div>
        <div className="content-item has-children-items">
          <span className="content-secondary-item">
            <b>{postsCount}</b> posts
          </span>
          <span className="content-secondary-item">
            <b>{followersCount}</b> followers
          </span>
          <span className="content-secondary-item">
            <b>{followingCount}</b> following
          </span>
        </div>
        <div className="content-item">
          <b>{name}</b>
        </div>
      </div>
    </div>
  );
};
```

> Inside **BigProfileCard.css** file, copy paste the following

```css
.big-profile-card {
  display: flex;
  flex: 1;
  padding: 0 100px;
  min-height: 250px;
  max-height: 250px;
}

.big-profile-card .avatar-area {
  flex: 1;
}

.big-profile-card .content-area {
  flex: 2;
  display: flex;
  flex-direction: column;
}

.big-profile-card .content-area .content-item .username {
  font-size: 28px;
  margin-right: 15px;
}

.big-profile-card .content-area .content-item {
  display: flex;
  padding: 10px 0;
  font-size: 16px;
  display: flex;
}

.big-profile-card .content-area .content-item.has-children-items {
  justify-content: space-between;
}

.big-profile-card .big-profile-avatar {
  width: 150px;
  height: 150px;
  font-size: 50px;
}
```
