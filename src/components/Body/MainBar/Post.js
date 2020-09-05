import React from 'react';
import './Post.css';
import {
  Card,
  CardActions,
  IconButton,
  CardHeader,
  Avatar,
} from '@material-ui/core';
import { FavoriteBorderOutlined } from '@material-ui/icons';

export const Post = ({ post }) => {
  return (
    <Card className="ins-post">
      <CardHeader
        avatar={<Avatar aria-label="recipe">R</Avatar>}
        title="Shrimp and Chorizo Paella"
      />
      <img
        className="ins-post-media"
        src="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
        title="Contemplative Reptile"
        alt="fkjn"
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteBorderOutlined />
        </IconButton>
      </CardActions>
    </Card>
  );
};
