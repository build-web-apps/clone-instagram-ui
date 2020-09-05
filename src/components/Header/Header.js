import React from 'react';
import './Header.css';
import AppBar from '@material-ui/core/AppBar';
import { Logo } from './Logo/Logo';
import { Search } from './Search/Search';
import { Navigators } from './Navigators/Navigators';

const INSTAGRAM_SRC =
  'https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png';

const INSTAGRAM_SEARCH_PLACEHOLDER_TEXT = 'Search';

export const Header = ({ onSearchChange }) => {
  return (
    <AppBar color="#ffffff">
      <div className="ins-container">
        <Logo
          className="logo-container"
          src={INSTAGRAM_SRC}
          alternateText="Instagram Logo"
        />
        <Search
          placeholder={INSTAGRAM_SEARCH_PLACEHOLDER_TEXT}
          onSearchChange={onSearchChange}
        />
        <Navigators className="navigator" />
      </div>
    </AppBar>
  );
};
