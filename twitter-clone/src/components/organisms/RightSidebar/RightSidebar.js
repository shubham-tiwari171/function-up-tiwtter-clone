import React, { useState } from 'react';
import UserCard from '../../atoms/UserCard/UserCard';
import './RightSidebar.css';

  const RightSidebar = () => {
  const users = [
  
    {
      username: 'Shivani Thoke',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqM9X2C-9dVbDi7EvWHrp-dutARHXXmACCxw&usqp=CAU',
      profile: 'Software Engineer | Tech Enthusiast',
    },
      {
      username:'John Smith',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8fULOER8x8EdPMg3q4TOujQy7KV33aaLONw&usqp=CAU',
      profile: 'Designer | Coffee Lover',
    },
    {
      username: 'Sonali Gupta',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlOkvEo8PGObTOgrZ8g6k-iJaVcBcpkOc9oQ&usqp=CAU',
      profile: 'MakeUp Artist',
    },
    {
        username: 'Neal Model',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwoRtzyKhr8Ua0RYcxxLsliouzyc0vd782vg&usqp=CAU',
        profile: 'Model | Fashion Designer',
      },
      {
        username: 'Susmita Singh',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgP1edFTrHPx9sU07MyIQWxrG_kSpHypZCPQ&usqp=CAU',
        profile: 'IT Programmer | Designer',
      },
  ];

  const [showMore, setShowMore] = useState(false);
  const displayedUsers = showMore ? users : users.slice(0, 3);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="right-sidebar">
      <h2>Who to follow</h2>
      {displayedUsers.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
      {users.length > 3 && (
        <button className="show-more-button" onClick={toggleShowMore}>
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};

export default RightSidebar;