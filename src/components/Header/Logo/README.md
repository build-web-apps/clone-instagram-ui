# Logo

1. Create a folder `Logo` inside `src/components/Header`
2. Create 2 files:
   - Logo.js
   - Logo.css

> Open `Logo.js` and paste the following:

```js
import React from 'react';
import './Logo.css';

export const Logo = ({ className, src, alternateText }) => {
  return (
    <figure className={className}>
      <img src={src} alt={alternateText} />
    </figure>
  );
};
```

> Open `Logo.css` and paste the following:

```css
figure {
  padding: 0;
  margin: 0;
}
```
