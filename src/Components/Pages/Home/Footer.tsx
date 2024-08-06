import { FunctionComponent } from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaPhoneVolume,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";

export type HomeFooterType = {
  className?: string;
};

const HomeFooter: FunctionComponent<HomeFooterType> = ({ className = "" }) => {
  return (
    <div className={`footer ${className}`}>
      {/* Banner Section */}
      <div className="footer-banner">
        <div className="footer-banner-background" />
        <div className="footer-content-wrapper">
          <div className="footer-content">
            <div className="contact-text">
              Don’t wait any longer. Contact us!
              <div className="contact-info">
                <FaPhoneVolume className="icon" />
                <b className="phone-number">0355-344343</b>
                <MdOutlineAttachEmail className="icon" />
                <b className="email-address">support@example.com</b>
              </div>
            </div>
          </div>
          <div className="follow-us">
            <h1>Follow us</h1>
            <div className="social-icons">
              <FaYoutube className="icon" />
              <FaInstagram className="icon" />
              <FaTwitter className="icon" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="footer-main-content">
        {/* Logo Section */}
        <div className="footer-logo-section">
          <b className="footer-logo">Logo</b>
          <div className="footer-description">
            <p className="description-line">Nisi ut aliquip ex ea commodo</p>
            <p className="description-line">consequatute irure dolor in</p>
            <p className="description-line">reprehenderit in</p>
            <p className="description-line">voluptate velit esse</p>
            <p className="description-line">
              cillum dolore eu fugiat nulla excepteur
            </p>
            <p className="description-line">pariatur.</p>
          </div>
        </div>

        {/* Services Section */}
        <div className="footer-services">
          <b className="services-title">Our Services</b>
          <div className="service-item">Booking</div>
          <div className="service-item">Rental Car</div>
          <div className="service-item">Hostel</div>
          <div className="service-item">Trivago</div>
          <div className="service-item">Trip Advisor</div>
        </div>

        {/* Explore Section */}
        <div className="footer-explore">
          <b className="explore-title">Explore</b>
          <div className="explore-item">Skardu</div>
          <div className="explore-item">Kharmang</div>
          <div className="explore-item">Shigar</div>
          <div className="explore-item">Khaplu</div>
          <div className="explore-item">Kachura</div>
        </div>

        {/* Subscribe Section */}
        <div className="footer-subscribe">
          <div className="subscribe-text-container">
            <h3>Get Updates & More</h3>
            <p className="subscribe-text">
              Subscribe to the free newsletter and
            </p>
            <p className="subscribe-text">stay up to date</p>
          </div>
          <input className="email-placeholder" placeholder="Your email" />
          <button className="subscribe-button-text">Subscribe</button>
          <div className="subscribe-background" />
        </div>
      </div>
      {/* Copyright Section */}
      <div className="footer-copyright-wrapper">
        <div className="footer-copyright">
          Copyright @ 2023 Skardu Tour. All Rights Reserved.
          <div className="privacy-link">Privacy</div>
          <div className="policy-link">Policy</div>
          <div className="about-us-link">About us</div>
          <div className="support-link">Support</div>
          <div className="faq-link">FAQ</div>
          <div className="blog-link">Blog</div>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
