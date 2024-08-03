import React, { useState } from "react";
import { FaGripLinesVertical, FaMinus, FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import TourBG from "../../../assets/TourBG.png";
import "./CustomizeTour.css";
import Logo from "../../../assets/Logo.png"; // Assuming this is your logo path

const CustomTourHeader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  function handleImageClick(image: any): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <div className="CustomizeTour-image">
        <img src={TourBG} alt="Tour Background" className="background-image" />
        <nav className="navbar">
          <div className="navbar-brand">
            <img src={Logo} alt="Logo" className="logo-image" />
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#hotel" className="nav-link">
                Hotel
              </a>
            </li>
            <li className="nav-item">
              <a href="#tours" className="nav-link">
                Tours
              </a>
            </li>
            <li className="nav-item">
              <a href="#blog" className="nav-link">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact Us
              </a>
            </li>
            <li className="nav-item dropdown">
              <button className="nav-link" onClick={handleDropdownToggle}>
                International Traveler
                <IoMdArrowDropdown />
              </button>
              {dropdownOpen && (
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <a href="#">Pakistan Visa Help</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Tours</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Trekking</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Best Sellers</a>
                  </li>
                </ul>
              )}
            </li>
            <span className="contact-info">
              <span className="num">0312-334567</span>
              <FaGripLinesVertical />
              <FaUser />
            </span>
          </ul>
        </nav>
        <div className="text-container">
          <p className="hero-text">Customize Tour</p>
        </div>
      </div>
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
                The Surfing man will blow your mind.The Surfing man will blow
                your mind.The Surfing man will blow your mind.The Surfing man
                will blow your mind.The Surfing man will blow your mind.
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
    </>
  );
};

export default CustomTourHeader;
