import React from 'react';

export default function Follower(props) {
  return (
    <div className="follower-card">
      <img src={props.follower.avatar_url} alt="portrait" />
      <h2>{props.follower.login}</h2>
    </div>
  );
}
