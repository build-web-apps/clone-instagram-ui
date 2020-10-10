# Loader

1. Navigate to the `src` folder inside `react-materialui-starter` project.
2. Create a folder `components` inside `src`

This is where we will place all reusable components.

3. Create a folder `Loader` inside `src/components`

4. Create 2 files

- `Loader.js`
- `Loader.css`

Open the created `Loader.js` and paste the following:

```js
import React from 'react';
import { CircularProgress } from '@material-ui/core';
import './Loader.css';

export const Loader = () => {
  return (
    <div className="loader-container">
      <CircularProgress />
    </div>
  );
};
```

Similarly, open `Loader.css` and paste the following:

```css
.loader-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.2);
}
```
