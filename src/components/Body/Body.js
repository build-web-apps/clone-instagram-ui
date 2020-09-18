import React from 'react';
import './Body.css';
import { MainBar } from './MainBar/MainBar';

export const Body = ({ className, posts, onCommentChange }) => {
  return (
    <div className={className}>
      <MainBar posts={posts} onCommentChange={onCommentChange} />
      {/* <SideBar /> */}
    </div>
  );
};
