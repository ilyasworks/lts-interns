import React, { useState } from 'react';
import { FaGripLinesVertical, FaUser } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../../assets/Logo.png'; // Assuming this is your logo path
import Blogs from "../Pages/Blogs"
import ContactUs from "../Pages/ContactUs";
import TourPages  from '../Pages/TourPage'
const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={Logo} alt="Logo" className="logo-image" />
      </div>
      <ul className="navbar-nav">
        <li className="nav-item"><Link to="/hotel" className="nav-link">Hotel</Link></li>
        <li className="nav-item"><Link to="/TourPages" className="nav-link">Tours</Link></li>
        <li className="nav-item"><Link to="/Blogs" className="nav-link">Blog</Link></li>
        <li className="nav-item"><Link to="/ContactUs" className="nav-link">Contact Us</Link></li>
        <li className="nav-item dropdown">
          <button className="nav-link" onClick={handleDropdownToggle}>
            International Traveler
            <IoMdArrowDropdown />
          </button>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li className="dropdown-item"><Link to="/pakistan-visa-help">Pakistan Visa Help</Link></li>
              <li className="dropdown-item"><Link to="/tours">Tours</Link></li>
              <li className="dropdown-item"><Link to="/trekking">Trekking</Link></li>
              <li className="dropdown-item"><Link to="/best-sellers">Best Sellers</Link></li>
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
  );
};

export default Header;
