import React, { useState, useEffect } from "react";
import Backvid from "./Backvid";
import FeaturedDestination from "./FeaturedDestination";
import greetingsData from "./Json/Greetings.json";
import Aims from "./Aims";
import { useAuth } from "../Authcontext";
import TopPicks from "./TopPicks";

export default function Home(props) {
  const auth = useAuth();
  const userLocation = props.location;
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

  return (
    <>
      <Backvid></Backvid>
      <div className="puff-in-center container homewelcome">
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
        >
          Explore {userLocation} <i className="fa-solid fa-location-arrow"></i>
        </a>
      </div>

      <section id="welcomehome" className="welcomehome">
        {/* Featured Destinations */}
        <FeaturedDestination state={userLocation} />
        <TopPicks></TopPicks>
        <Aims></Aims>
      </section>
    </>
  );
}
