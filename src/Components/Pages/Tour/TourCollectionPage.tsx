import React, { useState } from "react";
import "../../../Components/Pages/Tour/TourCollectionPage.css";
import {
  FaCalendarAlt,
  FaStar,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import tripImage from "../../../assets/card 1.png";
import Banner from "./Banner";
// import { Footer, Header } from "antd/es/layout/layout";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

const Card: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <>
    <Header />
    <Banner />
      <div className="card-container">
        <div className="card">
          <div className="card-image">
            <img src={tripImage} alt="Trip" />
          </div>
          <div className="card-content">
            <div className="card-header">
              <div className="card-header-left">
                <FaCalendarAlt className="icon" />
                <span className="small-text">Date</span>
                <FaStar className="icon" />
                <span className="number">50</span>
              </div>
              <div className="card-header-right">
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
              </div>
            </div>
            <div className="card-title">
              <h2>7 Days Trip in Northern Area</h2>
              <div className="location">
                <FaMapMarkerAlt className="icon" />
                <span>Gilgit, Baltistan</span>
              </div>
            </div>
            <div className="card-description">
              <p>
                Set off on this Epic 7 day trip through Costa Rica's must see
                locations. From jungle to beach you will get to explore the
                amazing wildlife rich park of Manuel...
              </p>
            </div>
            <div className="card-footer">
              <div className="price">
                <span className="light-price">$1000</span>
                <span className="dark-price">$750</span>
              </div>
              <div className="explore">
                <span>Explore</span>
                <FaArrowRight className="icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar">
          <div className="sidebar-item">
            <div className="sidebar-heading">Filter</div>
            <div className="sidebar-heading">Price</div>
            <div className="price-slider">
              <input type="range" min="0" max="100" />
            </div>
            <div className="price-values">
              <span>$0</span>
              <span>$1000</span>
            </div>
            <div className="horizontal-line"></div>
          </div>

          <div className="sidebar-item">
            <div className="sidebar-heading">Destinations</div>
            <div className="checkbox-group">
              <div className="destination_title">Gilgit</div>
              <label>
                <input type="checkbox" name="destination" /> Naltar Valley
              </label>
              <label>
                <input type="checkbox" name="destination" /> Rakaposhi Base Camp
              </label>
              <label>
                <input type="checkbox" name="destination" /> Haramosh Peak
              </label>
            </div>
            <div className="checkbox-group">
              <div className="destination_title">Skardu</div>
              <label>
                <input type="checkbox" name="destination" /> Shigar Valley
              </label>
              <label>
                <input type="checkbox" name="destination" /> Satpara Lake
              </label>
              <label>
                <input type="checkbox" name="destination" /> Deosai Plains
              </label>
            </div>
            <div className="checkbox-group">
              <div className="destination_title">Hunza</div>
              <label>
                <input type="checkbox" name="destination" /> Karimabad
              </label>
              <label>
                <input type="checkbox" name="destination" /> Altit Fort
              </label>
              <label>
                <input type="checkbox" name="destination" /> Baltit Fort
              </label>
            </div>
            <div className="checkbox-group">
              <div className="destination_title">Fairy Meadows</div>
              <label>
                <input type="checkbox" name="destination" /> Nanga Parbat Base
                Camp
              </label>
              <label>
                <input type="checkbox" name="destination" /> Beyal Camp
              </label>
            </div>
            <div className="checkbox-group">
              <div className="destination_title">Swat</div>
              <label>
                <input type="checkbox" name="destination" /> Kalam Valley
              </label>
              <label>
                <input type="checkbox" name="destination" /> Malam Jabba
              </label>
              <label>
                <input type="checkbox" name="destination" /> Mingora
              </label>
            </div>
            <div className="horizontal-line"></div>
          </div>

          <div className="sidebar-item">
            <div className="sidebar-heading">Activity</div>
            <div className="checkbox-group">
              <label>
                <input type="checkbox" name="activity" /> Hiking
              </label>
              <label>
                <input type="checkbox" name="activity" /> Sightseeing
              </label>
              <label>
                <input type="checkbox" name="activity" /> Camping
              </label>
              <label>
                <input type="checkbox" name="activity" /> Photography
              </label>
              <label>
                <input type="checkbox" name="activity" /> Fishing
              </label>
              <label>
                <input type="checkbox" name="activity" /> Bird Watching
              </label>
              <label>
                <input type="checkbox" name="activity" /> Rafting
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="pagination">
        <span
          className={`page-number ${currentPage === 1 ? "active" : ""}`}
          onClick={() => handlePageClick(1)}
        >
          1
        </span>
        <span
          className={`page-number ${currentPage === 2 ? "active" : ""}`}
          onClick={() => handlePageClick(2)}
        >
          2
        </span>
        <span
          className={`page-number ${currentPage === 3 ? "active" : ""}`}
          onClick={() => handlePageClick(3)}
        >
          3
        </span>
        <span
          className={`page-number ${currentPage === 4 ? "active" : ""}`}
          onClick={() => handlePageClick(4)}
        >
          4
        </span>
        <span className="next-button" onClick={handleNextClick}>
          Next
        </span>
      </div>
      <Footer />
    </>
  );
};

export default Card;
