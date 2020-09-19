import React from 'react';
import { Header } from './components/Header/Header';
import { Body } from './components/Body/Body';
import './App.css';
import { Upload } from './components/Upload/Upload';
class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      userInformation: {
        username: 'arunkumars08',
        name: 'Arunkumar Srisailapathi',
      },
      openDialog: false,
    };
  }

  async fetchPosts(userId = 1234) {
    const response = await fetch(`/posts?userId=${userId}`);
    const posts = await response.json();
    this.setState({
      posts: posts.data.posts,
    });
  }

  componentDidMount() {
    this.fetchPosts(this.props.userId);
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

  getBase64 = (file) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  };

  onFileUpload = (files) => {
    const file = files[0];
    console.log(this.getBase64(file));
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
        {this.renderHeader()}
        {this.renderBody()}
        {this.state.openDialog && this.renderDialog()}
      </React.Fragment>
    );
  }

  render() {
    return <div className="ins-ui">{this.renderInstagramUI()}</div>;
  }
}

export default App;
