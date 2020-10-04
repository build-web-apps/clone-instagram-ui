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
