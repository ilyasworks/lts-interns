import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/home"
import Homecard from "./Components/Home/homecard";
import CustomizeTour from "./Components/Home/Tour/CustomizeTour";
import TourCollection from "./Components/Home/Tour/TourCollection";
import Blogs from "./Components/Pages/Blogs"
import ContactUs from "./Components/Pages/ContactUs";
import TourPages from "./Components/Pages/TourPage"
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/*" element={<Homecard/>} ></Route>
        <Route path="/CustomizeTour" element={<CustomizeTour/>} ></Route>
        <Route path="/TourCollection" element={<TourCollection/>} ></Route>
        <Route path="/TourPages" element={<TourPages/>} ></Route>
        <Route path="/Blogs" element={<Blogs/>} ></Route>
        <Route path="/ContactUs" element={<ContactUs/>} ></Route>
      
      </Routes>
    </BrowserRouter>
  );
}

