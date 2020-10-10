# Body

1. Create a folder `Body` inside `src/components`
2. Create a file `Body.js` inside `Body` folder and paste the following:

```js
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
```

As you can see the `Body` is not using class, it is like a normal function.
This way of writing a component in `React` is called the `Functional components`

We can see that Body has 2 files included

1. MainBar
2. SideBar

Let's go and create them.

- Click here to follow the steps to create a [MainBar](./MainBar/README.md)
- Click here to follow the steps to create a [SideBar](./SideBar/README.md)
