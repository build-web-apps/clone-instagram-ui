import React from 'react';
import './MainBar.css';
import { Post } from '../../Post/Post';

export const MainBar = ({ posts, onCommentChange, onLike }) => {
  return (
    <div className="ins-main">
      {posts.map((post) => (
        <Post
          post={post}
          onCommentChange={onCommentChange.bind(null, post._id)}
          onLike={onLike.bind(null, post._id)}
        />
      ))}
      {!posts.length && <div>Follow someone to see their posts here</div>}
    </div>
  );
};
