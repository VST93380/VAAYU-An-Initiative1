import React, { useState, useEffect } from "react";
import Backvid from "./Backvid";
import FeaturedDestination from "./FeaturedDestination";
import stateRanges from './indianStates.json';

export default function Home() {
  const [userLocation, setUserLocation] = useState(null);

  const fetchUserLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const foundState = stateRanges.find((state) => {
          return (
            latitude >= state.latMin &&
            latitude <= state.latMax &&
            longitude >= state.lonMin &&
            longitude <= state.lonMax
          );
        });

        if (foundState) {
          setUserLocation(foundState.name);
        } else {
          setUserLocation("Location not found");
        }
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
      <Backvid></Backvid>
      <div className="container homewelcome">
        <h1 className="display-2">Welcome to Your Travel Adventure!</h1>
        <p className="lead">
          Your gateway to amazing destinations and experiences
          <br />
          {userLocation && <p>User Location: {userLocation}</p>}
        </p>
        <a className="loginbtn explorehome" href="#welcomehome" role="button" onClick={fetchUserLocation}>
          Explore Now
        </a>
      </div>

      <section id="welcomehome">
        {/* Featured Destinations */}
        <div className="container">
          <FeaturedDestination />
        </div>

        {/* About Us */}
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>About Us</h2>
              <p>
                We are passionate about travel and committed to making your
                journey unforgettable. Discover new places, experience different
                cultures, and create lifelong memories with us.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="about-us-image.jpg"
                alt="About Us"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
