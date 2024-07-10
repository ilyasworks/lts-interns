import React, { useState } from 'react';
import './PerfectDis.css';
import './perfectDis1.css';
import Shigar from '../../assets/Shigar.jpg';
import khaplu from '../../assets/Khaplu.jpg';
import Kharmang from '../../assets/Kharmang.jpg';
import Kachura from '../../assets/Kachuraa.jpg';
import Bashu from '../../assets/Bashu.jpeg';

const images = [
    {
        src: Shigar,
        alt: 'Shigar',
        title: 'Shigar',
        description: 'Shigar is a beautiful valley located in the northern region of Pakistan. Known for its stunning landscapes, it is a gateway to the Karakoram mountains and offers a unique blend of natural beauty and cultural heritage. The Shigar Fort, a historical site, adds to the charm of this picturesque valley.'
    },
    {
        src: khaplu,
        alt: 'Khaplu',
        title: 'Khaplu',
        description: 'Khaplu is a scenic valley in the Gilgit-Baltistan region of Pakistan. It is famous for its majestic mountains, lush greenery, and the historic Khaplu Palace. The valley serves as a base for trekkers exploring the surrounding peaks and is known for its serene ambiance and rich cultural history.'
    },
    {
        src: Kharmang,
        alt: 'Kharmang',
        title: 'Kharmang',
        description: 'Kharmang is one of the five districts of Gilgit-Baltistan, Pakistan. Known for its breathtaking scenery, the district is a popular destination for nature lovers and adventure seekers. The Kharmang Valley offers stunning views of the mountains, rivers, and lush landscapes, making it a must-visit for those seeking tranquility and natural beauty.'
    },
    {
        src: Kachura,
        alt: 'Kachura',
        title: 'Kachura',
        description: 'Kachura is home to the famous Shangrila Resort, often referred to as "Heaven on Earth." The resort is situated next to the Lower Kachura Lake, also known as Shangrila Lake. The area is renowned for its crystal-clear waters, surrounded by rugged mountains and verdant forests, offering visitors a peaceful retreat amidst nature.'
    },
    {
        src: Bashu,
        alt: 'Bashu',
        title: 'Bashu',
        description: 'Bashu is a tranquil village located in the Skardu District of Gilgit-Baltistan, Pakistan. It is known for its serene environment, traditional Balti culture, and stunning natural beauty. Visitors to Bashu can enjoy the scenic landscapes, including lush green fields, snow-capped peaks, and clear blue skies.'
    }
];

const Carousel = () => {
    const [details, setDetails] = useState({ src: '', alt: '', title: 'Title', description: 'Description' });

    const showDetails = (src, alt, title, description) => {
        setDetails({ src, alt, title, description });
    };

    return (
        <>
            <div className="carousel-container">
                <h5 className="carousel-subtitle">Place to go</h5>
                <h1 className="carousel-title">Perfect Destinations</h1>
                <div className="carousel">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="carousel-item"
                            onClick={() => showDetails(image.src, image.alt, image.title, image.description)}
                        >
                            <img src={image.src} alt={image.alt} />
                        </div>
                    ))}
                </div>
            </div>
            <div id="imageDetails" className="custom-banner-text">
                <div className="custom-banner-text-image">
                    {details.src && <img src={details.src} alt={details.alt} />}
                </div>
                <div className="custom-banner-text-details">
                    <h5>About</h5>
                    <h1>We help you plan your journey</h1>
                    <h1 id="imageTitle">{details.title}</h1>
                    <p id="imageDescription">{details.description}</p>
                    <button>Explore Our Tours</button>
                </div>
            </div>
        </>
    );
};

export default Carousel;
