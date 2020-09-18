import React from 'react';
import { Typography } from '@material-ui/core';

export const Comment = ({ username, content }) => {
  return (
    <Typography>
      <b>{username}</b>
      <span>{content}</span>
    </Typography>
  );
};
