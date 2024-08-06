import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import TourBG from '../../../assets/TourBG.png';
import './CustomizeTour.css';
import Header from '../Header';
import kharmang from '../../../assets/Kharmang.jpg';
import khacura from '../../../assets/Kachuraa.jpg';
import Shigar from '../../../assets/Shigar.jpg';
import Footer from '../Footer';

const CustomizeTour = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    countryCode: '',
    whatsappNumber: '',
    category: 'single',
    numberOfPersons: '',
    city: '',
    tripDays: '',
    startDate: '',
    destination: 'skardu',
    transportation: 'air',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted:', form);
  };

  return (
    <>
    
      <div className="customize-tour-image">
        <img src={TourBG} alt="Tour Background" className="background-image" />
        <div className="text-container">
          <p className="hero-text">Customize Tour</p>
        </div>
      </div>
      <div className="tour-titles">
        <p className="tour-title">Customize Tour</p>
        <h1 className="tour-subtitle">Select Your Own Destination</h1>
      </div>
      <div className="tour-form-container">
        <div className="form-section">
          <h4>Please plan your trip</h4>
          <h5>Back your customized tour</h5>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="input-field">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input-group">
              <div className="input-field">
                <label htmlFor="countryCode">Country Code</label>
                <input
                  type="text"
                  name="countryCode"
                  placeholder="Country Code"
                  value={form.countryCode}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-field">
                <label htmlFor="whatsappNumber">WhatsApp Number</label>
                <input
                  type="text"
                  name="whatsappNumber"
                  placeholder="WhatsApp Number"
                  value={form.whatsappNumber}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input-group">
              <div className="input-field">
                <label htmlFor="category">Category</label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                >
                  <option value="single">Single</option>
                  <option value="couple">Couple</option>
                  <option value="group">Group</option>
                </select>
              </div>
              <div className="input-field">
                <label htmlFor="numberOfPersons">Number of Persons</label>
                <input
                  type="number"
                  name="numberOfPersons"
                  placeholder="Number of Persons"
                  value={form.numberOfPersons}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input-group">
              <div className="input-field">
                <label htmlFor="city">Your City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Your City"
                  value={form.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-field">
                <label htmlFor="tripDays">Trip Days</label>
                <input
                  type="number"
                  name="tripDays"
                  placeholder="Trip Days"
                  value={form.tripDays}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input-field">
              <label htmlFor="startDate">Tour Starting Date</label>
              <input
                type="date"
                name="startDate"
                placeholder="Tour Starting Date"
                value={form.startDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <div className="input-field">
                <label htmlFor="destination">Destination</label>
                <select
                  name="destination"
                  value={form.destination}
                  onChange={handleChange}
                >
                  <option value="skardu">Skardu</option>
                  <option value="kharmang">Kharmang</option>
                  <option value="shigar">Shigar</option>
                </select>
              </div>
              <div className="input-field">
                <label htmlFor="transportation">Transportation</label>
                <select
                  name="transportation"
                  value={form.transportation}
                  onChange={handleChange}
                >
                  <option value="air">By Air</option>
                  <option value="road">By Road</option>
                </select>
              </div>
            </div>
            <div className="input-field">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                placeholder="Please let us know if you want us to take care of anything. Specify in your message."
                value={form.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="image-section">
          {[
            {
              image: kharmang,
              date: '9 Nov, 2019',
              text: 'The surfing man will blow your mind'
            },
            {
              image: khacura,
              date: '10 Dec, 2019',
              text: 'A journey to remember'
            },
            {
              image: kharmang,
              date: '15 Jan, 2020',
              text: 'Experience the best of nature'
            },
            {
              image: Shigar,
              date: '20 Feb, 2020',
              text: 'Unforgettable moments await'
            },
            {
              image: kharmang,
              date: '25 Mar, 2020',
              text: 'Discover hidden gems'
            }
          ].map((item, index) => (
            <div key={index} className="image-card">
              <div className="image-container">
                <img src={item.image} alt={`Image for ${item.date}`} />
              </div>
              <div className="text-content">
                <FaCalendarAlt />
                <h5>{item.date}</h5>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <Header/>
    </>
  );
};

export default CustomizeTour;
