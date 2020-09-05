import React from 'react';
import './Logo.css';

export const Logo = ({ src, alternateText }) => {
  return (
    <figure class="ins-logo">
      <img src={src} alt={alternateText} />
    </figure>
  );
};
