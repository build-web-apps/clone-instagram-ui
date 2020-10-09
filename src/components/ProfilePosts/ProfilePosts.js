import React from 'react';

import './ProfilePosts.css';
import { Post } from '../Post/Post';

export const ProfilePosts = ({ posts }) => {
  return (
    <div className="profile-posts">
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};
