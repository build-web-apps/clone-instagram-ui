import React from 'react';
import './Navigators.css';
import { Toolbar, IconButton } from '@material-ui/core';
import { Home, FavoriteBorderOutlined, Add } from '@material-ui/icons';
import { Profile } from './Profile';
import { Link } from 'react-router-dom';

export const Navigators = ({ className, username, onNavigationClick }) => {
  return (
    <Toolbar className={className}>
      {username && (
        <React.Fragment>
          <Link to={`/home`} className="navigation-link">
            <IconButton edge="start" color="inherit" aria-label="menu">
              <Home />
            </IconButton>
          </Link>
          <IconButton color="inherit" aria-label="menu">
            <FavoriteBorderOutlined />
          </IconButton>
          <IconButton
            onClick={onNavigationClick.bind(null, 'add-media')}
            color="inherit"
            aria-label="menu"
          >
            <Add />
          </IconButton>
          <Link to={`/profile/${username}`} className="navigation-link">
            <IconButton color="inherit" aria-label="menu">
              <Profile username={username} />
            </IconButton>
          </Link>
        </React.Fragment>
      )}
      {!username && (
        <Link to="/start">
          <span>Login / Signup</span>
        </Link>
      )}
    </Toolbar>
  );
};
