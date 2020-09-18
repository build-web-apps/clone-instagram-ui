import React from 'react';
import './SideBar.css';
import { ProfileCard } from '../../ProfileCard/ProfileCard';

export const SideBar = ({ userInformation }) => {
  return (
    <div className="side-bar">
      <ProfileCard
        username={userInformation.username}
        description={userInformation.name}
      />
    </div>
  );
};
