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
