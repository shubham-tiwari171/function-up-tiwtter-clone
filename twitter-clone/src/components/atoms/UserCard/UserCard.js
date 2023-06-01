// import React from 'react';
// import './UserCard.css';

// const UserCard = ({ user }) => {
//   const { username, imageUrl, profile } = user;

//   return (
//     <div className="user-card">
//       <img className="user-image" src={imageUrl} alt={username} />
//       <div className="user-info">
//         <div>
//           <h4>{username}</h4>
//           <p>{profile}</p>
//         </div>
//         <button className="follow-button">Follow</button>
//       </div>
//     </div>
//   );
// };

// export default UserCard;

import React, { useState } from 'react';
import './UserCard.css';

const UserCard = ({ user }) => {
  const { username, imageUrl, profile } = user;
  const [isFollowed, setIsFollowed] = useState(false);

  const handleFollow = () => {
    setIsFollowed(!isFollowed);
  };

  return (
    <div className="user-card">
      <img className="user-image" src={imageUrl} alt={username} />
      <div className="user-info">
        <div>
          <h4>{username}</h4>
          <p>{profile}</p>
        </div>
        <button className={isFollowed ? 'followed-button' : 'follow-button'} onClick={handleFollow}>
          {isFollowed ? 'Followed' : 'Follow'}
        </button>
      </div>
    </div>
  );
};

export default UserCard;
