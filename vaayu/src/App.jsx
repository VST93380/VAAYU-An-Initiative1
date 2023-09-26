import React from "react";
import "./Styles/App.css";
import "./Styles/login.css";
import "./Styles/Attractions.css";
import "./Styles/Community.css";
import "./Styles/Festivals.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Attractions from "./components/Attractions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import TripPlanner from "./components/TripPlanner";
import Vaayusoul from "./components/Vaayusoul";
import Community from "./components/Community"
import HotelAttractions from "./components/HotelAttractions";
import Map from "./components/Map";

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <ScrollToTop />
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/tripplanner" element={<TripPlanner />} />
          <Route path="/community" element={<Community />} />
          <Route path="/vaayusoul" element={<Vaayusoul></Vaayusoul>} />
          <Route path="/hotel" element={<HotelAttractions/>} />
          <Route path="/map" element={<Map/>} />
        </Routes>
      </section>
      <Footer />
    </>
  );
}

export default App;
