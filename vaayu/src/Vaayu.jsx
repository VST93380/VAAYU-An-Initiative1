import React, { useState, useEffect } from "react";
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
import axios from "axios";
import TripPlanner from "./components/TripPlanner";
import Vaayusoul from "./components/Vaayusoul";
import Community from "./components/Community";
import HotelAttractions from "./components/HotelAttractions";
import ArVr from "./components/ArVr";
import Package from "./components/Package";
import Map from "./components/Map";
import { useAuth } from "./Authcontext";
import Profile from "./components/Profile"

function App() {
  const auth = useAuth();
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  useEffect(() => {
    async function fetchLocationData() {
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        );
        if (response.data.address && response.data.address.state) {
          auth.location(
            response.data.address.state,
            response.data.address.state_district
          );
          setUserLocation(response.data.address.state);
        } else {
          setUserLocation("Location not found");
        }
      } catch (error) {}
    }

    fetchLocationData();
  }, [latitude, longitude, auth]);

  const fetchUserLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        // const latitude = 28.7041;
        // const longitude = 77.1025;

        setLatitude(latitude);
        setLongitude(longitude);
      });
    } else {
      setUserLocation("Geolocation is not available in this browser.");
    }
  };
  useEffect(() => {
    fetchUserLocation();
  }, []);
  return (
    <>
      <ToastContainer />
      {/* <Backvid /> */}
      <Navbar />
      <ScrollToTop />
      <section>
        <Routes>
          <Route path="/" element={<Home location={userLocation} />} />
          <Route path="/attractions/:string" element={<Attractions />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/tripplanner" element={<TripPlanner />} />
          <Route path="/packages" element={<Package />} />
          <Route path="/community" element={<Community />} />
          <Route path="/vaayusoul" element={<Vaayusoul></Vaayusoul>} />
          <Route path="/hotel" element={<HotelAttractions />} />
          <Route path="/vr" element={<ArVr />} />
          <Route path="/map" element={<Map />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </section>
      <Footer />
    </>
  );
}

export default App;
