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
