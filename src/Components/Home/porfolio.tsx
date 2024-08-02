import React, { useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaStar } from 'react-icons/fa';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import './Portfolio.css';
import DeveloperImage from '../../assets/designer.png'; // Update the path as necessary

const people = [
  {
    id: 1,
    image: DeveloperImage,
    name: 'John Doe',
    designation: 'Web Developer',
    about: 'John is a skilled web developer with 5 years of experience in creating amazing websites.',
    rating: 4,
  },
  {
    id: 2,
    image: DeveloperImage,
    name: 'Jane Smith',
    designation: 'Graphic Designer',
    about: 'Jane is a creative graphic designer who loves to bring ideas to life through stunning visuals.',
    rating: 5,
  },
  {
    id: 3,
    image: DeveloperImage,
    name: 'Mike Johnson',
    designation: 'Project Manager',
    about: 'Mike is an experienced project manager who ensures that projects are completed on time and within budget.',
    rating: 3,
  },
  // Add more people as needed
];

const Portfolio = () => {
  const carouselRef = useRef(null);

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  return (
    <div className="portfolio-section">
      <div className="portfolio-title-section">
        <h5 className="portfolio-subtitle">Testimonials</h5>
        <h1 className="portfolio-title">Our Team</h1>
      </div>
      <div className="portfolio-carousel-container">
        <LeftOutlined className="portfolio-carousel-arrow left" onClick={handlePrev} />
        <Carousel
          ref={carouselRef}
          showArrows={false}
          showThumbs={false}
          infiniteLoop={true}
          showStatus={false}
          autoPlay={true}
          interval={5000}
          centerMode={true}
          centerSlidePercentage={33.33}
          emulateTouch={true}
          swipeable={true}
        >
          {people.map(({ id, image, name, designation, about, rating }) => (
            <div key={id} className="portfolio-card">
              <img src={image} alt={name} className="portfolio-card-image" />
              <h2 className="portfolio-card-name">{name}</h2>
              <h4 className="portfolio-card-designation">{designation}</h4>
              <p className="portfolio-card-about">{about}</p>
              <div className="portfolio-card-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} color={i < rating ? 'gold' : 'gray'} />
                ))}
              </div>
            </div>
          ))}
        </Carousel>
        <RightOutlined className="portfolio-carousel-arrow right" onClick={handleNext} />
      </div>
    </div>
  );
};

export default Portfolio;
