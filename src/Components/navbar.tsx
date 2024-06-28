import React, { useState } from 'react';
import { FaMinus, FaUser } from 'react-icons/fa';
import '../Components/Home/Navbar.css';
import Logo from '../assets/Logo.png';
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
   <>
    <nav className="navbar">
      
      <ul className="navbar-nav">
      <div className="navbar-brand">
        <img src={Logo} alt="Logo" />
      </div>
        <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Hotels</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Tours</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Blogs</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
        <li className="nav-item dropdown">
          <button className="nav-link" onClick={handleDropdownToggle}>
            International Traveler
            <IoMdArrowDropdown />
          </button>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li className="dropdown-item"><a href="#">Pakistan Visa Help</a></li>
              <li className="dropdown-item"><a href="#">Tours</a></li>
              <li className="dropdown-item"><a href="#">Trekking</a></li>
              <li className="dropdown-item"><a href="#">Best Sellers</a></li>
            </ul>
          )}
          
        </li>
        <span className="contact-info">
  <span className="num">0312-334567</span>
  <FaMinus/>
  <FaUser />
</span>
      </ul>
     
    </nav>
    <div className="container">
  <div className="text-container">
    <h3>What is this</h3>
    <h1>Discover the most engaging place</h1>
    <button>Explore Now</button>
  </div>
</div>

    </>
    
  );
};

export default Navbar;
