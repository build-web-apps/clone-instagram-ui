import React from 'react';
import './Header.css';
import AppBar from '@material-ui/core/AppBar';
import { Logo } from './Logo/Logo';

const INSTAGRAM_SRC =
  'https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png';

export const Header = ({ ...props }) => {
  return (
    <AppBar color="transparent">
      <div className="ins-container">
        <Logo src={INSTAGRAM_SRC} alternateText="Instagram Logo" />
        {/* <Search />
      <Widgets /> */}
      </div>
    </AppBar>
  );
};
