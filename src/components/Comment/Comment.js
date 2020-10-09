import React from 'react';
import { Typography } from '@material-ui/core';

export const Comment = ({ userName, comment }) => {
  return (
    <Typography>
      <b>{userName}</b>
      <span>{comment}</span>
    </Typography>
  );
};
