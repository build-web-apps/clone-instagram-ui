import React from 'react';
import './SideBar.css';
import { ProfileCard } from '../../ProfileCard/ProfileCard';

export const SideBar = ({ userInformation }) => {
  return (
    <div className="side-bar">
      <ProfileCard
        userName={userInformation.userName}
        description={userInformation.name}
      />
    </div>
  );
};
