import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/home"
import Homecard from "./Components/Home/homecard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/*" element={<Homecard/>} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

