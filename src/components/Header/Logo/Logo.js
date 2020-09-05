import React from 'react';
import './Logo.css';

export const Logo = ({ className, src, alternateText }) => {
  return (
    <figure className={className}>
      <img src={src} alt={alternateText} />
    </figure>
  );
};
