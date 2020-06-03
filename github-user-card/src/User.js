import React from 'react';
import Follower from './Follower';

export default function User(props) {
  let {
    avatar_url,
    name,
    username,
    location,
    html_url,
    followers,
    following,
    bio,
  } = props.user;

  console.log(props);
  return (
    <div className="user-card">
      <div className="indiv-user">
        <img src={avatar_url} alt="portrait" />
        <div className="indiv-info">
          <h3>{name}</h3>
          <p>{username}</p>
          <p>{location}</p>
          <p>
            <a href={html_url}>GitHub Profile</a>
          </p>
          <p>Followers: {followers}</p>
          <p>Following: {following}</p>
          <p>{bio}</p>
        </div>
      </div>
      <div className="followers">
        {props.followers.map((follower, index) => {
          return <Follower follower={follower} key={index} />;
        })}
      </div>
    </div>
  );
}
