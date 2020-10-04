import React from 'react';
import { Post } from '../Body/MainBar/Post';

import './ProfilePosts.css';

export const ProfilePosts = ({ posts }) => {
  return (
    <div className="profile-posts">
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};
