import React from 'react';
import './MainBar.css';
import { Post } from './Post';

export const MainBar = ({ posts }) => {
  return (
    <div className="ins-main">
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};
