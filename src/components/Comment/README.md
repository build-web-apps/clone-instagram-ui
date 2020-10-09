# Comment

1. Create a folder `Comment` inside `src/components`
2. Create 2 files

- `Comment.js`
- `AddComment.js`

Open the created `Comment.js` and paste the following:

```js
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
```

Open the created `AddComment.js` and paste the following:

```js
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
```
