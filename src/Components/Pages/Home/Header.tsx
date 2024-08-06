// src/components/Header.tsx

import React from "react";
// import '../components/common.css';
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        <span className="logo">Logo</span>
        <nav>
          <ul>
            <li>
              <a href="#hotel">Hotel</a>
            </li>
            <li>
              <a href="#tour">Tour</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact-us">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-right">
        <span className="contact-number">+123456789</span>
        <span className="icon">📞</span>
        <span className="icon">|</span>
      </div>
    </header>
  );
};

export default Header;
