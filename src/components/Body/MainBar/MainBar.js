import React from 'react';
import './MainBar.css';
import { Post } from './Post';

export const MainBar = ({ posts, onCommentChange }) => {
  return (
    <div className="ins-main">
      {posts.map((post) => (
        <Post post={post} onCommentChange={onCommentChange} />
      ))}
    </div>
  );
};
