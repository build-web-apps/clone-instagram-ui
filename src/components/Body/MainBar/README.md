# Main Bar Layout

1. Create a folder `MainBar` inside `src/components/Body`
2. Create a file `MainBar.js` and paste the following:

```js
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
```

3. Create a file `MainBar.css` and paste the following:

```css
.ins-main {
  max-width: 70%;
  width: 70%;
}
```
