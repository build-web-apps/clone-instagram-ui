import React from 'react';
import './Body.css';
import { MainBar } from './MainBar/MainBar';

export const Body = ({ className }) => {
  return (
    <div className={className}>
      <MainBar posts={[{}, {}]} />
      {/* <SideBar /> */}
    </div>
  );
};
