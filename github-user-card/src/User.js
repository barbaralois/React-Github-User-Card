import React from 'react';

export default function User(props) {
  let {
    image,
    name,
    username,
    location,
    githubLink,
    followers,
    following,
    bio,
  } = props.user;

  console.log(props);
  return (
    <div className="user-card">
      <img src={image} />
      <div className="user-info">
        <h3>{name}</h3>
        <p>{username}</p>
        <p>{location}</p>
        <p>
          <a href={githubLink}>GitHub Profile</a>
        </p>
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
        <p>{bio}</p>
      </div>
    </div>
  );
}
