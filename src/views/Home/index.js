import React from 'react';
import { Body } from '../../components/Body/Body';
import { getCall } from '../../utils/Network';

export class Home extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  async fetchPosts(userId = 1234) {
    const response = await getCall(`/posts?userId=${userId}`);
    const posts = await response.json();
    this.setState({
      posts: posts,
    });
  }

  onCommentChange = (value) => {
    console.log(value);
  };

  componentDidMount() {
    this.fetchPosts(this.props.userId);
  }

  render() {
    return (
      <Body
        className="ins-body"
        userInformation={this.props.userInformation}
        posts={this.state.posts}
        onCommentChange={this.onCommentChange}
      ></Body>
    );
  }
}
