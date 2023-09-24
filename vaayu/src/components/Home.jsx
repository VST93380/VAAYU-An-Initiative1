import React, { useState, useEffect } from "react";
import Backvid from "./Backvid";
import FeaturedDestination from "./FeaturedDestination";
import greetingsData from "./Json/Greetings.json";
import axios from "axios";


export default function Home() {
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const foundGreeting = greetingsData.find(
      (item) => item.name === userLocation
    );
    if (foundGreeting) {
      setGreeting(foundGreeting.Greetings);
    } else {
      setGreeting("Your gateway to amazing destinations and experiences");
    }
  }, [userLocation]);

  useEffect(() => {
    async function fetchLocationData() {
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        );
        if (response.data.address && response.data.address.state) {
          setUserLocation(response.data.address.state);
        } else {
          setUserLocation("State not found");
        }
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    }

    fetchLocationData();
  }, [latitude, longitude]);

  const fetchUserLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        // const latitude = 17.5892;
        // const longitude = 78.9448;

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
      <Backvid></Backvid>
      <div className="container homewelcome">
        <h1 className="display-2">Welcome to Your Travel Adventure!</h1>
        <p className="lead">
          {greeting}
          <br />
          {/* {userLocation && <p>User Location: {userLocation}</p>} */}
        </p>
        <a
          className="loginbtn explorehome"
          href="#welcomehome"
          role="button"
          onClick={fetchUserLocation}
        >
          Explore {userLocation} <i class="fa-solid fa-location-arrow"></i>
        </a>
      </div>

      <section id="welcomehome" className="welcomehome">
        {/* Featured Destinations */}
        <FeaturedDestination state={userLocation} />
      </section>
    </>
  );
}
