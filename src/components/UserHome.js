// UserHome.jsx

import React from 'react';
import './UserHome.css'; // Import a CSS file for styling

const UserHome = () => {
  return (
    <div className="user-home-container">
      <h2 className="welcome-message">Welcome to Your User Home Page!</h2>
      <div className="content">
        <p>Congratulations on joining our vibrant community! Your user home page is your central hub for personalized experiences and features.</p>

        <p>Discover a world of possibilities as you navigate through tailored content, connect with like-minded individuals, and stay informed about the latest happenings. Your journey towards a richer online experience starts here.</p>

        <p>Engage with discussions, explore curated recommendations, and make your mark within our community. Your preferences matter, and we're here to ensure you have a seamless and enjoyable experience every time you log in.</p>

        <p>Feel free to explore different sections, update your profile, and take advantage of the tools and resources available to you. Enjoy your stay!</p>
      </div>
    </div>
  );
};

export default UserHome;
