import React from 'react'
import TourBG from '../../../assets/TourBG.png';
import Header from '../Header';
import Footer  from '../Footer';
const TourCollection = () => {
  return (
    <>
    
      <div className="customize-tour-image">
        <img src={TourBG} alt="Tour Background" className="background-image" />
        <div className="text-container">
          <p className="hero-text">Tour List View</p>
        </div>
      </div> 
      <Header/>
      <Footer/>
     
    </>
  )
}

export default TourCollection
