import "./Home.css";
import BG1 from "../../../assets/Background1.png";
import BG2 from "../../../assets/Background2.png";
import Navbar from "./navbar";
import Homecard from "./homecard";
import TravelEasy from "./TravelEasy";
import PerfectDis from "./perfectDis";
import Perfectdis1 from "./perfectDis1";
import Portfolio from "./porfolio";
import HomeFooter from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />\
      <div className="image-container">
        <img className="bg-image1" src={BG1} alt="Background 1" />
        <img className="bg-image2" src={BG2} alt="Background 2" />
      </div>\
      <Homecard />
      <TravelEasy />
      <PerfectDis />
      <Perfectdis1 />
      <Portfolio />
      <HomeFooter />
    </>
  );
};

export default Home;
