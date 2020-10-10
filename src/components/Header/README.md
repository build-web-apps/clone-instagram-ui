# Header

1. Create a folder `Header` inside `src/components`
2. Create 2 files:
   - Header.js
   - Header.css

> Open `Header.js` and paste the following:

```js
import React from 'react';
import './Header.css';
import AppBar from '@material-ui/core/AppBar';
import { Logo } from './Logo/Logo';
import { Search } from './Search/Search';
import { Navigators } from './Navigators/Navigators';
import { getUserInformation } from '../../utils/Utils';

export const INSTAGRAM_SRC =
  'https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png';

const INSTAGRAM_SEARCH_PLACEHOLDER_TEXT = 'Search';

export const Header = ({ onSearchChange, onNavigationClick }) => {
  let user = getUserInformation();
  const username = user ? user.userName : null;
  return (
    <AppBar color="#ffffff">
      <div className="ins-container">
        <Logo
          className="logo-container"
          src={INSTAGRAM_SRC}
          alternateText="Instagram Logo"
        />
        <Search
          placeholder={INSTAGRAM_SEARCH_PLACEHOLDER_TEXT}
          onSearchChange={onSearchChange}
        />
        <Navigators
          username={username}
          className="navigator"
          onNavigationClick={onNavigationClick}
        />
      </div>
    </AppBar>
  );
};
```

> Open `Header.css` and paste the following:

```css
.ins-header {
  display: flex;
  justify-content: center;
}

.ins-container {
  width: 100%;
  max-width: 975px;
  height: 54px;
  max-height: 54px;
  box-sizing: border-box;
  margin: 0 auto;
  align-items: center;
  display: flex;
  padding: 13px 0;
}

.logo-container {
  display: flex;
  align-items: center;
  height: 100%;
  min-width: 40%;
}

.logo-container img {
  height: 100%;
  margin-top: 7px;
}

.navigator {
  justify-content: flex-end;
  flex: 1;
}
```

If you have observed the `Header.js` file, we would have use the following:

- Logo
- Navigators
- Search

Those are small components inside Header itself, let's create them

3. Click here to follow the steps to create a [Logo](./Logo/README.md)
4. Click here to follow the steps to create a [Navigators](./Navigators/README.md)
5. Click here to follow the steps to create a [Search](./Search/README.md)
