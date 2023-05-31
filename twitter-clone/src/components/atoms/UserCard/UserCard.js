import React from 'react';
import './UserCard.css';

const UserCard = ({ user }) => {
  const { username, imageUrl, profile } = user;

  return (
    <div className="user-card">
      <img className="user-image" src={imageUrl} alt={username} />
      <div className="user-info">
        <div>
          <h4>{username}</h4>
          <p>{profile}</p>
        </div>
        <button className="follow-button">Follow</button>
      </div>
    </div>
  );
};

export default UserCard;
