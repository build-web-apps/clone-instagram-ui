import React from 'react';
import './Post.css';
import {
  Card,
  CardActions,
  IconButton,
  CardHeader,
  Avatar,
  CardContent,
} from '@material-ui/core';
import { FavoriteBorderOutlined } from '@material-ui/icons';
import { Comment } from './Comment';
import { AddComment } from './AddComment';

export const Post = ({ post, onCommentChange }) => {
  return (
    <Card className="ins-post">
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            {post.username[0].toUpperCase() || '-'}
          </Avatar>
        }
        title={post.title}
      />
      <img
        className="ins-post-media"
        src={post.media.url}
        title={post.title}
        alt={post.title}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteBorderOutlined />
        </IconButton>
      </CardActions>
      <CardContent className="comments-section">
        <b>{`${post.likes} Likes`}</b>
        {post.comments.map((comment) => (
          <Comment {...comment} />
        ))}
      </CardContent>
      <AddComment onCommentChange={onCommentChange} />
    </Card>
  );
};
