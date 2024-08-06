import React from 'react'
import TourBG from '../../assets/TourBG.png';
import Header from '../Home/Header'
import Footer from '../Home/Footer'

const ContactUs = () => {
  return (
    <div>
      
      <div className="customize-tour-image">
        <img src={TourBG} alt="Tour Background" className="background-image" />
        <div className="text-container">
          <p className="hero-text">Contact Us</p>
        </div>
      </div> 
      <Header/>
      <Footer/>
     
    </div>
  )
}

export default ContactUs
