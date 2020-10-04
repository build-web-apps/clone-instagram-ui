import React, { useState, useEffect } from 'react';
import { getCall, postCall } from '../../utils/Network';
import { Loader } from '../../components/Loader/Loader';

import './Profile.css';
import { BigProfileCard } from '../../components/ProfileCard/BigProfileCard';

const GET_USER_API = '/users';
const POST_FOLLOW_API = '/users/follow';

const POST_UNFOLLOW_API = '/users/unfollow';

export const Profile = ({ ...props }) => {
  const username = props.match.params.username;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUserInformation = async (username) => {
      try {
        const response = await getCall(`${GET_USER_API}/${username}`);
        const users = await response.json();
        setLoading(false);
        setError(false);
        setUser({ ...users[0] });
      } catch (err) {
        setLoading(false);
        setError(true);
      }
    };

    getUserInformation(username);
  }, [username]);

  const handleFollowClick = async (isFollowing = true) => {
    let url = POST_FOLLOW_API;
    if (isFollowing) {
      url = POST_UNFOLLOW_API;
    }
    url += `/${username}`;
    try {
      const response = await postCall(
        url,
        JSON.stringify({
          loggedInUser: user.userName,
        })
      );
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
          name={user.name}
          showFollowing={user.userName !== username}
          isFollowing={false}
          postsCount={1000}
          followersCount={10000}
          followingCount={10000}
          handleFollowClick={handleFollowClick}
        />
      )}
    </div>
  );
};
