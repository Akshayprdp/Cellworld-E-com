import React from 'react';
import './Home.css';

function Home() {
  const handleShopNowClick = () => {
    window.scrollBy({ top: 700, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="home-container">
      <div className="box">
        <h1>Explore the latest tech trends with our variety pack of smartphones, offering a world of features and styles to suit every need.</h1>
        <button onClick={handleShopNowClick}>Shop Now</button>
      </div>
    </div>
  );
}

export default Home;
