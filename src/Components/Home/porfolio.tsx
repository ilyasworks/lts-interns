import React from 'react';
import { FaStar } from 'react-icons/fa';
import './Portfolio.css'; // Assuming you want to add some CSS styling
import Devoloper1 from '../../assets/designer.png';

const people = [
  {
    id: 1,
    image: Devoloper1,
    name: 'John Doe',
    designation: 'Web Developer',
    about: 'John is a skilled web developer with 5 years of experience in creating amazing websites.',
    rating: 4
  },
  {
    id: 2,
    image: Devoloper1,
    name: 'Jane Smith',
    designation: 'Graphic Designer',
    about: 'Jane is a creative graphic designer who loves to bring ideas to life through stunning visuals.',
    rating: 5
  },
  {
    id: 3,
    image: Devoloper1,
    name: 'Mike Johnson',
    designation: 'Project Manager',
    about: 'Mike is an experienced project manager who ensures that projects are completed on time and within budget.',
    rating: 3
  }
];

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="title-section">
        <h5 className="unique-subtitle">Testimonials</h5>
        <h1 className="unique-title">Stansfield Clint's</h1>
      </div>
      <div className="cards-container">
        {people.map(person => (
          <div key={person.id} className="card">
            <img src={person.image} alt={person.name} className="card-image"/>
            <h2>{person.name}</h2>
            <h4>{person.designation}</h4>
            <p>{person.about}</p>
            <div className="rating">
              {Array.from({ length: 5 }, (v, i) => (
                <FaStar key={i} color={i < person.rating ? 'gold' : 'gray'} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
