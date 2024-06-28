import './Home.css';
import  BG1 from '../../assets/Background1.png';
import BG2 from '../../assets/Background2.png';
import Navbar from '../navbar';

const Home = () => {
  return (
   <>
     <Navbar/>
    <div className="image-container">
     
      <img className="bg-image1" src={BG1} alt="Background 1" />
      <img className="bg-image2" src={BG2} alt="Background 2" />
    </div>
   
   </>
  );
};

export default Home;
