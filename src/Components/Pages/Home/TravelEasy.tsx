import frogLogo from "../../../assets/TE1.png";
import compassLogo from "../../../assets/TE2.png";
import bagLogo from "../../../assets/TE3.png";
import dollLogo from "../../../assets/TE4.png";
import "./TravelEasy.css";

const TravelEasy = () => {
  return (
    <div className="banner">
      <div className="banner-options-container">
        <div className="banner-option">
          <div className="frog-logo-container">
            <img src={frogLogo} alt="Frog Logo" className="frog-logo" />
          </div>
          <h1>5</h1>
          <p>Destinations</p>
        </div>
        <div className="banner-option">
          <div className="frog-logo-container">
            <img src={compassLogo} alt="Frog Logo" className="frog-logo" />
          </div>
          <h1>10</h1>
          <p>Destinations</p>
        </div>
        <div className="banner-option">
          <div className="frog-logo-container">
            <img src={bagLogo} alt="Frog Logo" className="frog-logo" />
          </div>
          <h1>15</h1>
          <p>Destinations</p>
        </div>
        <div className="banner-option">
          <div className="frog-logo-container">
            <img src={dollLogo} alt="Frog Logo" className="frog-logo" />
          </div>
          <h1>20</h1>
          <p>Destinations</p>
        </div>
      </div>
      <div className="banner-text">
        <h1>We make world travel easy</h1>
        <p>
          Traveling under your own power and at your own pace, you'll connect
          more meaningfully with your destination and have more fun!
        </p>
        <button>Explore Our Tours</button>
      </div>
    </div>
  );
};

export default TravelEasy;
