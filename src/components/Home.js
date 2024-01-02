import React from 'react';
import './Home.css'; // Import a CSS file for styling
import talent from'./talent.jpg'

const Home = () => (
  <div className="home-container">
    <div className="content">
      <h2>Welcome to Our Home Page</h2>
      {/* Updated home page content here */}
      <p>Embrace the possibilities in a world where innovation knows no bounds. Our commitment to excellence propels us forward, fostering an environment where creativity, collaboration, and dedication thrive. Join us on a journey where every individual contributes to shaping a future that reflects our shared values and aspirations.</p>
    </div>
    <div className="image-container">
      <img
        src={talent} // Replace with the actual image URL
        alt="Description of the image"
        className="image"
      />
    </div>
  </div>
);

export default Home;
