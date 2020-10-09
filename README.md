# clone-instagram-ui

## Prerequisites:

You should have the following installed in your system before starting this tutorial / workshop.

1. Git - https://git-scm.com/downloads
2. VSCode - https://code.visualstudio.com/download
3. Node - https://nodejs.org/en/download/

Verify if the above are installed properly.

1. To check if `Git` is installed, go to your terminal / cmd prompt, run the following command

```
git version
```

You should get something like the following: (Note: The version number can be different, that's ok).

```
git version 2.23.0
```

2. To check if `VSCode` is installed, just try to open from your OS.
3. To check if `node` is installed, run the following command

```
node -v
```

You should get something like the following: (Note: The version number can be different, that's ok).

```
v12.18.3
```

If you have successfully done all the above, then you have all the required softwares / programs properly installed.

(Note: Installing a browser is also important, but since you are able to see this, you should have some browser already running. :D :D)

## Starter packs

Let's fork the starter pack for react which would have the necessary dependencies already installed.

To fork the starter pack,

1. Go to https://github.com/build-web-apps/react-materialui-starter

- This is the git repo we will fork.
- Click on `Fork` on the right top.

This creates a copy of the same in your `Github` and as a best practice, it is always good to fork and then clone to work on the project in order to raise `Pull requests`

2. Go to the forked URL and clone the project, should be something like below:

```
https://github.com/${yourGithubUserName}/react-materialui-starter
```

For eg.) My Github username is `thearunkumar`, so my fork will be like the following:

```
https://github.com/thearunkumar/react-materialui-starter
```

3. Open your terminal / cmd prompt

4. Go to any directory

5. Type the following command in the terminal

`git clone https://github.com/${githubUserName}/react-materialui-starter.git`

**Replace** \${githubUserName} with your username (In my case, `thearunkumar`).

Once done, you should see something like below

```
Cloning into 'react-materialui-starter'...
remote: Enumerating objects: 32, done.
remote: Counting objects: 100% (32/32), done.
remote: Compressing objects: 100% (27/27), done.
remote: Total 32 (delta 4), reused 28 (delta 4), pack-reused 0
Unpacking objects: 100% (32/32), done.
```

6. Let's go into the cloned directory

- Type `cd react-materialui-starter`

Now we have the `starter pack` in our local environment and ready to use.

Let's first install all the dependencies which are already specified in `package.json`

Do the following:

1. In `react-materialui-starter` directory inside terminal, run the following:

```
npm install
```

This will take some time to install the dependencies, meanwhile you can continue with the steps.

## Usecase

We will build a cloned version of the [Instagram](https://instagram.com/) just for learning purporse.

Our output will look something like this [Cloned Instagram](https://clone-instagram-ui.herokuapp.com/)

What features from instagram are we going to build?

### Broad level features

1. Registration
2. Home
3. Profile
4. Deploy to `Heroku`

### In depth

1. Basic registration
   - Needed to actually create an account for us to be able to login / sigin.
2. Basic login / signin
3. Header
   - Instagram logo
   - Search bar
   - Home icon
   - Favorites / notifications icon
   - Add media icon (Just photos for now)
     - NOTE: This is not present in web version of actual instagram itself, so we are innovating :D
     - We will create a modal which opens on click of that button
     - We will be able to upload images and click on Submit
     - We will set / manage some restrictions like:
       - Compress the image on the client side
       - Set max limit and throw error when the limit is breached.
   - Profile icon
4. Body
   - Main bar
     - Posts (From the followers) and each post will have:
       - Profile avatar
       - Username (clickable to go to their profile)
       - Post image
       - Option to like
       - Option to comment
   - Side bar
     - Profile information about the current logged in user. Clicking on which takes to the profile page of that user.
5. Profile page
   - Profile information
     - Avatar
     - Username
     - Name
     - Posts count
     - Followers count
     - Following count
   - Posts (All posts by the logged in user)

Phew! Let's get started. We have a lot to learn, build and enjoy!

> NOTE: Once we have completed to a level, we will go with deployment flow to make sure our code is viewable as a url. Don't worry, just by following this you will encounter those steps as well.

Let the hacking begin! :)

## Development

Now that we have the base project ready, we can go ahead and start updating to acheive our features.
Let's start by building small components which we will use in our flows later.

## Components

#### Loader component

Useful to show `Spinner` whenever we make some network calls. This way, the user knows that something is happening and he/she has to wait.
Otherwise, the user wouldn't know what's going on.

Click here to follow the steps to create a [Loader]()

#### ProfileCard component

Useful to show profile cards in `Home` page (side bar) as well as `Profile page`

Click here to follow the steps to create a [ProfileCard](./src/components/ProfileCard/README.md)

#### Comment component

Useful for displaying / adding comments in posts.

Click here to follow the steps to create a [Comment]()

#### Post component

Useful for displaying post card.

Click here to follow the steps to create a [Post]()

#### ProfilePosts component

Useful for displaying posts inside `Profile` page.

Click here to follow the steps to create a [ProfilePosts]()

#### Upload component

Useful for uploading media (Photos)

Click here to follow the steps to create a [Upload](./src/components/Upload/README.md)

#### Header component

Useful for displaying header on all pages except `Registration / Login`

Click here to follow the steps to create a [Header]()

#### Body component

Useful for displaying main bar (Center layout) and the side bar

Click here to follow the steps to create a [Body]()

> NOTE: If you have followed from the beginning, we have now completed creating all the reusable components.

---

## Utils

Let's create some `utility` methods that we will be using it later on.
Utility methods are generally preferred / used / implemented for the reason of reusability and easy modifications.

Just like how we will use the above components, we will use the utility functions also.

Create a folder `utils` under `src` (**Not** under components)

1. Create a file `Utils.js` inside `utils` and paste the following:

```js
export const getUserInformation = () => {
  const ss = window.localStorage;
  const item = ss.getItem('clone-ins');
  return item ? JSON.parse(item) : null;
};

export const setUserInformation = (user) => {
  const ss = window.localStorage;
  return ss.setItem('clone-ins', user);
};

export const isValid = (value) => {
  return typeof value === 'string' && value.trim() !== '';
};
```

2. Create a file `Network.js` inside `utils` and paste the following:

```js
import { BASE_API_URL } from '../Constants';

const makeCall = (type, url, data) => {
  return fetch(BASE_API_URL + url, {
    method: type,
    body: data,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const patchCall = (url, data) => {
  return makeCall('PATCH', url, data);
};

export const postCall = (url, data) => {
  return makeCall('POST', url, data);
};

export const getCall = (url, data = null) => {
  return makeCall('GET', url, data);
};
```

## Constants

Just like `utils` and `components`, we can reuse **strings** as well across projects. So we will create constants in a file and access them across.

Let's create a file `Constants.js` under `src` (**NOT** inside utils) and put the following:

```js
export const BASE_API_URL = 'https://clone-instagram-backend.herokuapp.com';
export const INVALID_CREDENTIALS_ERROR = 'Invalid credentials';
```

---

Let's take a step back, and verify things what we have done so far.

By now, if you have been following all the steps given here, you should have the folder structure like below:

- react-materialui-starter
  - public
  - src
    - components
      - Body
      - Comment
      - Header
      - Loader
      - Post
      - ProfileCard
      - ProfilePosts
      - Upload
    - utils

If you have something missed, you can always go back and follow the missed steps.

---

Now, let's create `views` required for displaying the features / components.

## Views

We have **3** views in our use case.

1. Home (Once user is logged, default landing page)
2. Start (When the user is not logged in)
3. Profile (Regardless of whether logged in / not)

To create different views, let's create a folder within which everything will go into.

Create a folder `views` under `src`

1. Click here to follow the steps to create a [Home View]()
2. Click here to follow the steps to create a [Start View]()
3. Click here to follow the steps to create a [Profile View]()

Now we have all our individual views ready, but we have still not said what view has to be loaded when.

That's where `Routers` coming into play.
This will take in some path names (eg. `/home` to load Home view, ...)

## Routes

Let's create a file `Routes.js` under `src` (**NOT** under views) and paste the following:

```js
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { getUserInformation } from './utils/Utils';
import { Home } from './views/Home';
import { Start } from './views/Start';
import { Profile } from './views/Profile';

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const PrivateRoute = ({ children, ...rest }) => {
  let user = getUserInformation();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/start',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export const Routes = ({ isLoggedin, userInformation }) => {
  return (
    <Switch>
      <Route
        path="/profile/:username"
        render={(props) => {
          return <Profile {...props} />;
        }}
      ></Route>
      <PrivateRoute path="/home">
        <Home userInformation={getUserInformation()} />
      </PrivateRoute>
      <Route
        path="/start"
        render={(props) => {
          return isLoggedin ? (
            <Redirect to="/" />
          ) : (
            <Start disableHeader={true} {...props} />
          );
        }}
      ></Route>
      <Route
        exact
        path="/"
        render={(props) => {
          return isLoggedin ? (
            <Redirect to="/home" />
          ) : (
            <Redirect to="/start" />
          );
        }}
      ></Route>
    </Switch>
  );
};
```

## Base Layout

If you see, we have different views to be displayed for different routes. (`/home`, `start`, `/profile`, ...). Eventhough the content are different, we might end up having some common content (Like in our case, `HEADER` which will be shown for some views)

There are 2 options:

1. Repeat the header in every view
2. Have a base layout and render only the changes.

The first appraoch, even though uses the same `Header` component ends up having that in all the views and maintainability is hard.

The second approach is just one file where we can have the logic of what needs header and what doesn't. (Easy maintenance)

So, going with the 2nd approach let's create a file `BaseLayout.js` under `src` and paste the following:

```js
import React, { useMemo } from 'react';
import { Header } from './components/Header/Header';
import {
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';

export const useRouter = () => {
  const params = useParams();
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  // Return our custom router object
  // Memoize so that a new object is only returned if something changes
  return useMemo(() => {
    return {
      // For convenience add push(), replace(), pathname at top level
      push: history.push,
      replace: history.replace,
      pathname: location.pathname,
      // Merge params and parsed query string into single "query" object
      // so that they can be used interchangeably.
      // Example: /:topic?sort=popular -> { topic: "react", sort: "popular" }
      query: {
        ...params,
      },
      // Include match, location, history objects so we have
      // access to extra React Router functionality if needed.
      match,
      location,
      history,
    };
  }, [params, match, location, history]);
};

const isStartView = () => {
  const { pathname } = window.location;
  return pathname.indexOf('/start') !== -1 || pathname === '/';
};

export const BaseLayout = ({ ...props }) => {
  const params = useRouter();
  const disableHeader = isStartView(params.pathname);
  return (
    <React.Fragment>
      {!disableHeader && <Header onNavigationClick={props.onNavigationClick} />}
      {props.children}
    </React.Fragment>
  );
};
```

## App

This is the base which ties all together.

1. Create a file `App.js` under `src` and paste the following:

```js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import imageCompression from 'browser-image-compression';
import { Header } from './components/Header/Header';
import { Body } from './components/Body/Body';
import './App.css';
import { Upload } from './components/Upload/Upload';
import { getUserInformation } from './utils/Utils';
import { postCall } from './utils/Network';
import { Loader } from './components/Loader/Loader';
import { Routes } from './Routes';
import { BaseLayout } from './BaseLayout';

const SAVE_POSTS_API = '/posts';

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    let user = getUserInformation();

    this.state = {
      posts: [],
      userInformation: {
        ...(user || {}),
      },
      fileUploadProgress: false,
      openDialog: false,
      isLoggedin: user !== null,
    };
  }

  onSearchChange = (event) => {
    console.log('Inside Search change', event.target.value);
  };

  onNavigationClick = (type) => {
    switch (type) {
      case 'add-media':
        this.setState({
          openDialog: !this.state.openDialog,
        });
        break;
      default:
        break;
    }
  };

  renderHeader() {
    return (
      <Header
        onSearchChange={this.onSearchChange}
        onNavigationClick={this.onNavigationClick}
        searchResults={null}
        username={this.state.userInformation.userName || null}
      />
    );
  }

  getBase64 = (file, callback) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      return callback(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  };

  compressFile = async (file) => {
    const options = {
      maxSizeMB: 0.01,
      maxWidthOrHeight: 500,
      useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(file, options);
      return compressedFile;
    } catch (error) {
      console.log(error);
    }
  };

  showUploadProgress = () => {
    this.setState({
      fileUploadProgress: true,
    });
  };

  hideUploadProgress = () => {
    this.setState({
      openDialog: false,
      fileUploadProgress: false,
    });
  };

  onFileUpload = async (files) => {
    let file = files[0];
    console.log('Original file size: ', file.size);
    file = await this.compressFile(file);
    console.log('Compressed file size: ', file.size);
    this.showUploadProgress();
    this.getBase64(file, async (base64) => {
      try {
        const response = await postCall(
          SAVE_POSTS_API,
          JSON.stringify({
            userName: this.state.userInformation.userName,
            content: ' ',
            media: base64,
          })
        );
        await response.json();
      } finally {
        this.hideUploadProgress();
      }
    });
  };

  onCommentChange = (value) => {
    console.log(value);
  };

  renderBody() {
    return (
      <Body
        className="ins-body"
        userInformation={this.state.userInformation}
        posts={this.state.posts}
        onCommentChange={this.onCommentChange}
      ></Body>
    );
  }

  renderRoutes() {
    return (
      <Router>
        <BaseLayout onNavigationClick={this.onNavigationClick}>
          <Routes
            isLoggedin={this.state.isLoggedin}
            userInformation={this.state.userInformation}
          />
        </BaseLayout>
      </Router>
    );
  }

  renderDialog() {
    return (
      <Upload
        onDialogClose={this.onNavigationClick.bind(this, 'add-media')}
        onFileUploadSave={this.onFileUpload}
      />
    );
  }

  renderInstagramUI() {
    return (
      <React.Fragment>
        {this.renderRoutes()}
        {this.state.openDialog && this.renderDialog()}
        {this.state.fileUploadProgress && <Loader />}
      </React.Fragment>
    );
  }

  render() {
    return <div className="ins-ui">{this.renderInstagramUI()}</div>;
  }
}

export default App;
```

You would already have `App.css` and `App.js` from the starter pack. Let's delete both of them.

> NOTE: (Or) You can just replace the contents in the respective files in the following steps

2. Create a file `App.css` under `src` and paste the following:
   > NOTE: This file deals with all the `responsiveness` required for the whole **APP**

```css
.ins-ui {
  background: #fafafa;
  position: relative;
}

.ins-body {
  min-height: 100vh;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  padding-top: 100px;
}

@media (max-width: 575.98px) {
  .ins-body {
    width: 100%;
  }

  .side-bar,
  .ins-search {
    display: none;
  }
}

@media (max-width: 576px) {
  .ins-body {
    width: 100%;
    max-width: 600px;
  }

  .ins-main {
    max-width: 100%;
    width: 100%;
  }

  .side-bar,
  .ins-search {
    display: none;
  }
}

@media (min-width: 576px) and (max-width: 767.98px) {
  .ins-body {
    width: 100%;
    max-width: 600px;
  }

  .ins-main {
    max-width: 100%;
    width: 100%;
  }

  .side-bar {
    display: none;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .ins-body {
    max-width: 900px;
  }

  .ins-main {
    max-width: 70%;
    width: 70%;
  }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
  .ins-body {
    width: 100%;
  }
}

@media (min-width: 1200px) {
  .ins-body {
    width: 100%;
  }
}
```
