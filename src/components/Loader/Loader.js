import React from 'react';
import { CircularProgress } from '@material-ui/core';
import './Loader.css';

export const Loader = () => {
  return (
    <div className="loader-container">
      <CircularProgress />
    </div>
  );
};
