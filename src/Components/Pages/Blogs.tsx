import React from 'react'
import TourBG from '../../assets/TourBG.png';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
const Blogs = () => {
  return (
    <>
   
      <div className="customize-tour-image">
        <img src={TourBG} alt="Tour Background" className="background-image" />
        <div className="text-container">
          <p className="hero-text">BLOGS</p>
        </div>
      </div> 
      <Header/>
      <Footer/>
     
    </>
  )
}

export default Blogs;
