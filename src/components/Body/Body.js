import React from 'react';
import { MainBar } from './MainBar/MainBar';
import { SideBar } from './SideBar/SideBar';

export const Body = ({
  className,
  posts,
  userInformation,
  onCommentChange,
  onLike,
}) => {
  return (
    <div className={className}>
      <MainBar
        posts={posts}
        onCommentChange={onCommentChange}
        onLike={onLike}
      />
      <SideBar userInformation={userInformation} />
    </div>
  );
};
