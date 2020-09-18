import React from 'react';
import { Header } from './components/Header/Header';
import { Body } from './components/Body/Body';
import './App.css';
class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
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

  renderHeader() {
    return <Header onSearchChange={this.onSearchChange} searchResults={null} />;
  }

  onCommentChange = (value) => {
    console.log(value);
  };

  renderBody() {
    return (
      <Body
        className="ins-body"
        posts={this.state.posts}
        onCommentChange={this.onCommentChange}
      ></Body>
    );
  }

  renderInstagramUI() {
    return (
      <React.Fragment>
        {this.renderHeader()}
        {this.renderBody()}
      </React.Fragment>
    );
  }

  render() {
    return <div className="ins-ui">{this.renderInstagramUI()}</div>;
  }
}

export default App;
