# Comment

1. Create a folder `ProfilePosts` inside `src/components`
2. Create 2 files

- `ProfilePosts.js`
- `ProfilePosts.css`

Open the created `ProfilePosts.js` and paste the following:

```js
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
```

Open the created `ProfilePosts.css` and paste the following:

```css
.profile-posts {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.profile-posts .ins-post {
  display: flex;
  width: 24%;
  margin: 10px;
}

.profile-posts .profile-navigation-link {
  display: none;
}
```
