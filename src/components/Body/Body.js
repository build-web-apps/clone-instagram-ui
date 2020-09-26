import React from 'react';
import { MainBar } from './MainBar/MainBar';
import { SideBar } from './SideBar/SideBar';

export const Body = ({
  className,
  posts,
  userInformation,
  onCommentChange,
}) => {
  return (
    <div className={className}>
      <MainBar posts={posts} onCommentChange={onCommentChange} />
      <SideBar userInformation={userInformation} />
    </div>
  );
};
