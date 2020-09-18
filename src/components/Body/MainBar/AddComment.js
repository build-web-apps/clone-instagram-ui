import React from 'react';
import { TextField } from '@material-ui/core';

const handleTextFieldKeyDown = (event, callback) => {
  console.log(event);
  switch (event.key) {
    case 'Enter':
      // call corresponding handler
      callback(event.target.value);
      break;
    case 'Escape':
      // etc...
      break;
    default:
      break;
  }
};

export const AddComment = ({ onCommentChange }) => {
  return (
    <TextField
      style={{ display: 'flex' }}
      placeholder="Add a comment ..."
      onKeyDown={(event) =>
        handleTextFieldKeyDown(event, (value) => {
          onCommentChange(value);
        })
      }
    />
  );
};
