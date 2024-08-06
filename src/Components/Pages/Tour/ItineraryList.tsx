import React, { useState } from 'react';
import { FaMapMarkerAlt, FaChevronDown, FaChevronUp, FaEnvelope, FaPhone, FaGlobe, FaMapPin } from 'react-icons/fa';
import './ItineraryList.css';
import '../common.css';

interface DayScheduleProps {
  day: number;
  location: string;
  schedule: string[];
}

const DaySchedule: React.FC<DayScheduleProps> = ({ day, location, schedule }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="day-schedule">
      <button onClick={toggleDropdown} className="day-schedule-button">
        <FaMapMarkerAlt />
        <span>{`Day ${day}`}</span>
        <span>{location}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && (
        <ul className="schedule-list">
          {schedule.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const OfficeDetails: React.FC = () => {
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [contact, setContact] = useState('');

  return (
    <div className="office-details">
      <h2>Office Details</h2>
      <hr />
      <div className="detail-item">
        <FaMapPin />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="detail-item">
        <FaEnvelope />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="detail-item">
        <FaGlobe />
        <input
          type="text"
          placeholder="Website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>
      <div className="detail-item">
        <FaPhone />
        <input
          type="text"
          placeholder="Contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
      </div>
      <button className="book-now-button">Book Now</button>

      {/* <div className="book-now-button-parent">
      </div> */}
      
    </div>
  );
};

const ItineraryList: React.FC = () => {
  const days = [
    {
      day: 1,
      location: 'Skardu & Kachura Valley',
      schedule: [
        '• Pick guests from Skardu Airport',
        '• Travel towards Kachura Valley',
        '• Shangrila Resort',
        '• Upper Kachura Lake',
        '• Katpana Lake',
        '• Cold Desert Skardu',
        '• Transfer to hotel for overnight stay',
      ],
    },
    {
      day: 2,
      location: 'Skardu & Kachura Valley',
      schedule: [
        '• Pick guests from Skardu Airport',
        '• Travel towards Kachura Valley',
        '• Shangrila Resort',
        '• Upper Kachura Lake',
        '• Katpana Lake',
        '• Cold Desert Skardu',
        '• Transfer to hotel for overnight stay',
      ],
    },
    {
      day: 3,
      location: 'Skardu & Kachura Valley',
      schedule: [
        '• Pick guests from Skardu Airport',
        '• Travel towards Kachura Valley',
        '• Shangrila Resort',
        '• Upper Kachura Lake',
        '• Katpana Lake',
        '• Cold Desert Skardu',
        '• Transfer to hotel for overnight stay',
      ],
    },
    {
      day: 4,
      location: 'Skardu & Kachura Valley',
      schedule: [
        '• Pick guests from Skardu Airport',
        '• Travel towards Kachura Valley',
        '• Shangrila Resort',
        '• Upper Kachura Lake',
        '• Katpana Lake',
        '• Cold Desert Skardu',
        '• Transfer to hotel for overnight stay',
      ],
    },
    {
      day: 5,
      location: 'Skardu & Kachura Valley',
      schedule: [
        '• Pick guests from Skardu Airport',
        '• Travel towards Kachura Valley',
        '• Shangrila Resort',
        '• Upper Kachura Lake',
        '• Katpana Lake',
        '• Cold Desert Skardu',
        '• Transfer to hotel for overnight stay',
      ],
    },
  ];

  return (
    <div className="app">
      <div className="left-sidebar">
        {days.map((dayInfo) => (
          <DaySchedule
            key={dayInfo.day}
            day={dayInfo.day}
            location={dayInfo.location}
            schedule={dayInfo.schedule}
          />
        ))}
      </div>
      <div className="right-sidebar">
        <OfficeDetails />
      </div>
    </div>
  );
};

export default ItineraryList;
