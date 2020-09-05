import React from 'react';
import './Profile.css';
import { Logo } from '../Logo/Logo';

export const Profile = ({ ...props }) => {
  return <Logo className="profile" {...props} />;
};
