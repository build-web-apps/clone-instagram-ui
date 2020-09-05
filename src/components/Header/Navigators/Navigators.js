import React from 'react';
import './Navigators.css';
import { Toolbar, IconButton } from '@material-ui/core';
import { Home, FavoriteBorderOutlined, Add } from '@material-ui/icons';
import { Profile } from './Profile';

export const Navigators = ({ className }) => {
  return (
    <Toolbar className={className}>
      <IconButton edge="start" color="inherit" aria-label="menu">
        <Home />
      </IconButton>
      <IconButton color="inherit" aria-label="menu">
        <FavoriteBorderOutlined />
      </IconButton>
      <IconButton color="inherit" aria-label="menu">
        <Add />
      </IconButton>
      <IconButton color="inherit" aria-label="menu">
        <Profile src="https://instagram.fmaa3-1.fna.fbcdn.net/v/t51.2885-19/10724122_884280208257740_2025085888_a.jpg?_nc_ht=instagram.fmaa3-1.fna.fbcdn.net&_nc_ohc=jZjdH0PzYbUAX9BE1Pw&oh=9d55ce62392f2868ce86f1d6183892f5&oe=5F7C93A2" />
      </IconButton>
    </Toolbar>
  );
};
