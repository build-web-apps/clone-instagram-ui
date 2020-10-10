import React from 'react';
import { Body } from '../../components/Body/Body';
import { getCall, patchCall } from '../../utils/Network';
import { getUserInformation } from '../../utils/Utils';

const POST_BASE_ROUTE = '/posts';
const LIKE_API = `${POST_BASE_ROUTE}/likes`;
const COMMENT_API = `${POST_BASE_ROUTE}/comment`;

const updatePosts = (posts, post) => {
  const cachePosts = [...posts];
  for (let i in cachePosts) {
    const p = cachePosts[i];
    if (p._id === post._id) {
      cachePosts[i] = post;
    }
  }
  return cachePosts;
};

export class Home extends React.PureComponent {
  constructor(props) {
    super(props);

    let user = getUserInformation();

    this.state = {
      posts: [],
      userInformation: {
        ...(user || {}),
      },
      openDialog: false,
      isLoggedin: user !== null,
    };
  }

  async fetchPost(postId) {
    const response = await getCall(`/posts/${postId}`);
    const post = await response.json();
    this.setState({
      posts: updatePosts(this.state.posts, post[0]),
    });
  }

  async fetchPosts() {
    const response = await getCall(
      `/home/${this.state.userInformation.userName}`
    );
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
      this.fetchPost(postId);
    } catch (err) {
      console.log('Do something with this error', err);
    }
  };

  onLike = async (postId) => {
    try {
      const response = await patchCall(`${LIKE_API}/${postId}`);
      this.fetchPost(postId);
    } catch (err) {
      console.log('Do something with this error', err);
    }
  };

  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    return this.state.userInformation.userName ? (
      <Body
        className="ins-body"
        userInformation={this.state.userInformation}
        posts={this.state.posts}
        onCommentChange={this.onCommentChange}
        onLike={this.onLike}
      ></Body>
    ) : null;
  }
}
