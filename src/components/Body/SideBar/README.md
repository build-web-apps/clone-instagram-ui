## Side Bar Layout

> Prerequisites

If you have followed the steps from the beginning, you should have already created a reusable **ProfileCard** component. Let's use that in the side bar.

1. Create a folder with the name **SideBar** under **components/Body** folder.
2. Inside **SideBar** folder, create 2 files.
   1. Create **SideBar.js** - the react component file
   2. Create **SideBar.css** - the styles

> Inside **SideBar.js** file, copy paste the following

```js
import React from 'react';
import './SideBar.css';
import { ProfileCard } from '../../ProfileCard/ProfileCard';

export const SideBar = ({ userInformation }) => {
  return (
    <div className="side-bar">
      <ProfileCard
        username={userInformation.username}
        description={userInformation.name}
      />
    </div>
  );
};
```

> Inside **SideBar.css** file, copy paste the following

```css
.side-bar {
  flex: 1;
  justify-content: center;
  display: flex;
}
```
