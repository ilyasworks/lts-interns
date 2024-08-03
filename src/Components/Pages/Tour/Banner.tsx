// src/components/Banner.tsx

import React from 'react';
// import '../components/common.css';
import './Banner.css';
import bannerImage from '../../../assets/Banner-image.png';

const Banner: React.FC = () => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="banner-text">
        <h1>Tours List View</h1>
      </div>
    </div>
  );
}

export default Banner;
