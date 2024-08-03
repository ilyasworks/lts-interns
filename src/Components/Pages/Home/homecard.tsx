import { BiStar, BiUser } from 'react-icons/bi';
import { CgCalendar } from 'react-icons/cg';
import { CiLocationOn } from 'react-icons/ci';
import { FaArrowRight } from 'react-icons/fa';
import '../Home/homecard.css';
import Card1 from '../../../assets/card 1.png';
import Card2 from '../../../assets/card 2.png';
import Card3 from '../../../assets/card 3.png';

const Homecard = () => {
  const cards = [
    {
      title: 'North Pakistan Trip',
      days: '4 days',
      users: 50,
      rating: 5,
      location: 'Gilgit',
      price: 9000,
      discountPrice: 8000,
      imgSrc: Card1,
      offer: '15% off',
    },
    {
      title: 'South Pakistan Adventure',
      days: '5 days',
      users: 30,
      rating: 4,
      location: 'Karachi',
      price: 7000,
      discountPrice: 6500,
      imgSrc: Card1,
      offer: '10% off',
    },
    {
      title: 'Central Pakistan Exploration',
      days: '3 days',
      users: 20,
      rating: 4,
      location: 'Lahore',
      price: 6000,
      discountPrice: 5500,
      imgSrc: Card2,
      offer: '8% off',
    },
    {
      title: 'Central Pakistan Exploration',
      days: '3 days',
      users: 20,
      rating: 4,
      location: 'Lahore',
      price: 6000,
      discountPrice: 5500,
      imgSrc: Card3,
      offer: '8% off',
    },
    {
      title: 'Central Pakistan Exploration',
      days: '3 days',
      users: 20,
      rating: 4,
      location: 'Lahore',
      price: 6000,
      discountPrice: 5500,
      imgSrc: Card2,
      offer: '8% off',
    },
    {
      title: 'Central Pakistan Exploration',
      days: '3 days',
      users: 20,
      rating: 4,
      location: 'Lahore',
      price: 6000,
      discountPrice: 5500,
      imgSrc: Card3,
      offer: '8% off',
    },
   
   
  ];

  return (
    <div className="homecard-container">
      <h5 className="homecard-subtitle">Popular Hotels</h5>
      <h1 className="homecard-title">Special Offers</h1>
      <div className="homecard-grid">
        {cards.map((card, index) => (
          <div key={index} className="homecard-card">
            <img src={card.imgSrc} alt={card.title} className="homecard-image" />
            <button className="homecard-button">{card.offer}</button>
            <div className="homecard-info-container">
              <div className="homecard-info-item">
                <CgCalendar />
                <span>{card.days}</span>
              </div>
              <div className="homecard-info-item">
                <BiUser />
                <span>{card.users}</span>
              </div>
              <div className="homecard-rating">
                {[...Array(card.rating)].map((_, index) => (
                  <BiStar key={index} />
                ))}
              </div>
            </div>
            <h1 className="homecard-card-title">{card.title}</h1>
            <div className="homecard-location">
              <CiLocationOn />
              <span>{card.location}</span>
            </div>
            <hr className="homecard-divider" />
            <div className="homecard-price">
              <h6>From</h6>
              <p>
                Rs {card.discountPrice} <span className="homecard-original-price">Rs {card.price}</span>
                <span className="homecard-explore">Explore <FaArrowRight /></span>
              </p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Homecard;
