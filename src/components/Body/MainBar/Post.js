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
import { getBackgroundColor } from '../../ProfileCard/ProfileCard';
import { Link } from 'react-router-dom';

export const Post = ({ post, onCommentChange }) => {
  const firstCharacter = post.userName[0].toUpperCase();
  return (
    <Card className="ins-post">
      <Link
        to={`/profile/${post.userName}`}
        className="profile-navigation-link"
      >
        <CardHeader
          avatar={
            <Avatar style={{ background: getBackgroundColor(firstCharacter) }}>
              {firstCharacter || '-'}
            </Avatar>
          }
          title={post.userName}
        />
      </Link>
      <img
        className="ins-post-media"
        src={post.media}
        title={post.content}
        alt={post.title}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteBorderOutlined />
        </IconButton>
      </CardActions>
      <CardContent className="comments-section">
        <b>{`${post.likes || 0} Likes`}</b>
        {post.comment.map((c) => (
          <Comment {...c} />
        ))}
      </CardContent>
      <AddComment onCommentChange={onCommentChange} />
    </Card>
  );
};
