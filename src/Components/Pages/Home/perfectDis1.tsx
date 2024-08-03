import React, { useState } from "react";
import "./perfectDis1.css";
import Shigar from "../../../assets/Shigar.jpg";
import khaplu from "../../../assets/Khaplu.jpg";
import Kharmang from "../../../assets/Kharmang.jpg";
import { FiCalendar } from "react-icons/fi"; // Import the appropriate icon from react-icons

const images = [
  {
    src: Shigar,
    alt: "Shigar",
    icon: <FiCalendar />,
    date: "9 November, 2029",
  },
  {
    src: khaplu,
    alt: "Khaplu",
    icon: <FiCalendar />,
    date: "9 November, 2029",
  },
  {
    src: Kharmang,
    alt: "Kharmang",
    icon: <FiCalendar />,
    date: "9 November, 2029",
  },
];

const Perfectdis1 = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <div className="unique-container">
      <h5 className="unique-subtitle">Place to go</h5>
      <h1 className="unique-title">Perfect Destinations</h1>
      <div className="unique-content">
        <div className="unique-left-container">
          <div className="unique-left-content">
            <img src={currentImage.src} alt={currentImage.alt} />
            <div className="icon-with-date">
              <button>Explore Packing Tips</button>
              {currentImage.icon}
              <span>{currentImage.date}</span>
              <h1>pack wisely before travelling</h1>
            </div>
            <p>
              The Surfing man will blow your mind.The Surfing man will blow your
              mind.The Surfing man will blow your mind.The Surfing man will blow
              your mind.The Surfing man will blow your mind.
            </p>
          </div>
        </div>
        <div className="unique-right-content">
          {images.map((image, index) => (
            <div
              key={index}
              className={`unique-column ${
                image === currentImage ? "active" : ""
              }`}
              onClick={() => handleImageClick(image)}
            >
              <div className="image-title">
                <img src={image.src} alt={image.alt} />
                <div className="icon-with-date">
                  {image.icon}
                  <span>{image.date}</span>
                  <p>The Surfing man will blow your mind.</p>
                </div>
              </div>
              <hr></hr>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Perfectdis1;
