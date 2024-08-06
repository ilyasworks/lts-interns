import Footer from '../../Pages/Home/Footer';
import Header from '../Home/Header';
import TourBanner from '../Tour/TourBanner';
import ItineraryList from './ItineraryList';
import ReviewSection from './ReviewSection';


const Tour = () => {
  return (
    <div>
      <Header />
      <TourBanner />
      <ItineraryList />
      <ReviewSection />
      <Footer/>
    </div>
  )
}

export default Tour
