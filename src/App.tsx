import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/home";
import Homecard from "./Components/Pages/Home/homecard";
import CustomizeTour from "./Components/Pages/Tour/CustomizeTour";
import TourCollectionPage from "./Components/Pages/Tour/TourCollectionPage";
import Tour from "./Components/Pages/Tour/Tour";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/*" element={<Homecard />}></Route>
        <Route path="/CustomizeTour" element={<CustomizeTour />}></Route>
        <Route path="/TourCollectionPage" element={<TourCollectionPage />}></Route>
        <Route path="/Tour" element={<Tour />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
