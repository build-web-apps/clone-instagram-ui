import React from 'react';
import { Body } from '../../components/Body/Body';
import { getCall, patchCall } from '../../utils/Network';
import { getUserInformation } from '../../utils/Utils';

const POST_BASE_ROUTE = '/posts';
const LIKE_API = `${POST_BASE_ROUTE}/likes`;
const COMMENT_API = `${POST_BASE_ROUTE}/comment`;

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

  async fetchPosts() {
    const { userId } = this.props;
    const response = await getCall(`/posts?userId=${userId}`);
    const posts = await response.json();
    this.setState({
      posts: posts,
    });
  }

  onCommentChange = async (postId, value) => {
    try {
      const response = await patchCall(
        `${COMMENT_API}/${postId}`,
        JSON.stringify({
          comment: [
            {
              userName: this.state.userInformation.userName,
              comment: value,
            },
          ],
        })
      );
    } catch (err) {
      console.log('Do something with this error', err);
    }
  };

  onLike = async (postId) => {
    try {
      const response = await patchCall(
        `${LIKE_API}/${postId}`,
        JSON.stringify({
          likes: Math.trunc(Math.random() * 10),
        })
      );
    } catch (err) {
      console.log('Do something with this error', err);
    }
  };

  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    return (
      <Body
        className="ins-body"
        userInformation={this.state.userInformation}
        posts={this.state.posts}
        onCommentChange={this.onCommentChange}
        onLike={this.onLike}
      ></Body>
    );
  }
}
