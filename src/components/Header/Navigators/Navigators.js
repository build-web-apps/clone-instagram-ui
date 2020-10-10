import React from 'react';
import './Navigators.css';
import { Toolbar, IconButton, Menu, MenuItem } from '@material-ui/core';
import { Home, FavoriteBorderOutlined, Add } from '@material-ui/icons';
import { Profile } from './Profile';
import { Link } from 'react-router-dom';
import { removeUserInformation } from '../../../utils/Utils';

export const Navigators = ({ className, username, onNavigationClick }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (type) => {
    setAnchorEl(null);
    if (type === 'log-out') {
      removeUserInformation();
      window.location.reload();
    }
  };
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
          {/* <Link to={`/profile/${username}`} className="navigation-link"></Link> */}
          <IconButton
            color="inherit"
            aria-label="menu"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <Profile username={username} />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
          >
            <Link to={`/profile/${username}`} className="navigation-link">
              <MenuItem onClick={handleClose.bind(null, 'profile')}>
                Profile
              </MenuItem>
            </Link>
            <MenuItem onClick={handleClose.bind(null, 'log-out')}>
              Logout
            </MenuItem>
          </Menu>
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
