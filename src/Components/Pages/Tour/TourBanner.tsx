import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faVideo, faCamera, faPlus } from '@fortawesome/free-solid-svg-icons';
import './TourBanner.css';

const TourBanner: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showMoreImages, setShowMoreImages] = useState<boolean>(false);

  const images: string[] = [
    'Rectangle 55.png', // replace with actual image paths
    'Rectangle 56.png',
    'Rectangle 57.png',
    'Rectangle 58.png',
    'Rectangle 56.png',
    'Rectangle 57.png',
  ];

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div className="banner">
      <div className="item">
        <div className="left">
          <h1>Best Of Northern Area</h1>
          <div className="location">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span>Gilgit Baltistan</span>
          </div>
        </div>
        <div className="right">
          <button className="button">
            <FontAwesomeIcon icon={faVideo} /> Video
          </button>
          <button className="button">
            <FontAwesomeIcon icon={faCamera} /> Gallery
          </button>
        </div>
      </div>
      <div className="item">
        <div className="left">
          <img src={selectedImage || images[0]} alt="Selected" className="big-image" />
        </div>
        <div className="right">
          {images.slice(0, showMoreImages ? images.length : 4).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="thumbnail"
              onClick={() => handleImageClick(image)}
            />
          ))}
          {!showMoreImages && (
            <div className="more-images" onClick={() => setShowMoreImages(true)}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TourBanner;
