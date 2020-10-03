import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import imageCompression from 'browser-image-compression';
import { Header } from './components/Header/Header';
import { Body } from './components/Body/Body';
import './App.css';
import { Upload } from './components/Upload/Upload';
import { Home } from './views/Home';
import { Profile } from './views/Profile';
import { getUserInformation } from './utils/Utils';
import { Start } from './views/Start';
import { postCall } from './utils/Network';
import { Loader } from './components/Loader/Loader';

const SAVE_POSTS_API = '/posts';

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const PrivateRoute = ({ children, ...rest }) => {
  let user = getUserInformation();

  if (user) {
    user = user.profile;
  }
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
class App extends React.PureComponent {
  constructor(props) {
    super(props);

    let user = getUserInformation();

    if (user) {
      user = user.profile;
    }

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
              return this.state.isLoggedin ? (
                <Redirect to="/" />
              ) : (
                <Start {...props} />
              );
            }}
          ></Route>
          <Route
            path="/"
            render={(props) => {
              return this.state.isLoggedin ? (
                <Home {...props} userInformation={this.state.userInformation} />
              ) : (
                <Redirect to="/start" />
              );
            }}
          ></Route>
        </Switch>
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
        {this.state.isLoggedin && this.renderHeader()}
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
