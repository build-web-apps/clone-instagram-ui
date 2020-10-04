import React, { useState, useEffect, useReducer } from 'react';
import { getCall, patchCall } from '../../utils/Network';
import { Loader } from '../../components/Loader/Loader';

import './Profile.css';
import { BigProfileCard } from '../../components/ProfileCard/BigProfileCard';
import { getUserInformation } from '../../utils/Utils';

const GET_USER_API = '/users';
const POST_FOLLOW_API = '/users/follow';

const POST_UNFOLLOW_API = '/users/unfollow';

const initialState = {};

const updateFollowing = (following, username) => {
  const index = following.indexOf(username);
  if (index !== -1) {
    following.slice(index, 1);
  } else {
    following.push(username);
  }
  return following;
};

const reducer = (state = initialState, action) => {
  const { type, ...rest } = action;
  switch (type) {
    case 'set_user':
      return {
        ...rest,
      };
    case 'update_followers':
      return {
        ...state,
        followers: updateFollowing(state.followers, rest.username),
      };
    default:
      return state;
  }
};

const isFollowing = (state, username) => {
  if (state && state.followers) {
    return state.followers.indexOf(username) !== -1;
  }
  return false;
};

export const Profile = ({ ...props }) => {
  const username = props.match.params.username;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialState);

  let information = getUserInformation();

  useEffect(() => {
    const getUser = async (username) => {
      try {
        const response = await getCall(`${GET_USER_API}/${username}`);
        const users = await response.json();
        const action = { type: 'set_user', ...users[0] };
        dispatch(action);
        // setLoading(false);
        // setError(false);
      } catch (err) {
        setLoading(false);
        setError(true);
      }
    };

    getUser(username);
  }, [username]);

  const handleFollowClick = async () => {
    let url = POST_FOLLOW_API;
    if (isFollowing(state, information.userName)) {
      url = POST_UNFOLLOW_API;
    }
    url += `/${username}`;
    try {
      const response = await patchCall(
        url,
        JSON.stringify({
          loggedIn: information.userName,
        })
      );
      updateFollowing(state.followers, username);
      dispatch({ type: 'update_followers', username: information.userName });
    } catch (err) {
      console.log('Do something with the error');
    }
  };

  return (
    <div className="profile-view ins-body">
      {loading && <Loader />}
      {!loading && !error && (
        <BigProfileCard
          userName={username}
          description={username}
          name={state ? state.name : ''}
          showFollowing={
            state.userName ? state.userName !== information.userName : false
          }
          isFollowing={isFollowing(state, information.userName)}
          postsCount={1000}
          followersCount={state.followers ? state.followers.length : 0}
          followingCount={state.following ? state.following.length : 0}
          handleFollowClick={() => {
            handleFollowClick();
          }}
        />
      )}
    </div>
  );
};
