import React from 'react';
import { Body } from '../../components/Body/Body';
import { getCall } from '../../utils/Network';
import { getUserInformation } from '../../utils/Utils';

export class Home extends React.PureComponent {
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
      openDialog: false,
      isLoggedin: user !== null,
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
        userInformation={this.state.userInformation}
        posts={this.state.posts}
        onCommentChange={this.onCommentChange}
      ></Body>
    );
  }
}
