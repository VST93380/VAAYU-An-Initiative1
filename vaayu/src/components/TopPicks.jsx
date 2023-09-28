import React, { useState, useEffect } from "react";
import placesdata from "./Json/Places.json";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const FeaturedDestination = (props) => {
  // Initialize state for filtered places and set it to an empty array.
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const splideOptions = {
    type: "loop",
    perPage: 4,
    autoplay: true,
    focus: "center",
    pauseOnHover: false,
    drag: "free",
    pagination: false,
    rewind: true,
    autoScroll: {
      speed: 4,
    },
  };

  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  // Use useEffect to update filteredPlaces when the component mounts or props.state changes.
  useEffect(() => {
    // Shuffle the placesdata array to get a random order.
    const shuffledPlaces = [...placesdata].sort(() => 0.5 - Math.random());
    // Take the first 20 destinations from the shuffled array.
    const randomPlaces = shuffledPlaces.slice(0, 20);
    setFilteredPlaces(randomPlaces);
  }, []);

  return (
    <>
      <div className="main-homecard">
        <h2 className="featureddestiations">
          Top Picks <i className="fa-solid fa-wand-magic-sparkles fa-bounce"></i>
        </h2>
        <hr />
        <Splide options={splideOptions}>
          {filteredPlaces.map((destination, index) => (
            <SplideSlide key={index}>
              <div
                className={`homecard ${isFlipped ? "flipped" : ""}`}
                onClick={handleCardClick}
              >
                <div className="homecard__inner">
                  <div className="homecard__front">
                    <img
                      src={destination.image_url}
                      alt={destination.name}
                      className="homecard__image"
                    />
                    <div className="homecard__content">
                      <p className="homecard__title">{destination.name}</p>
                    </div>
                  </div>
                  <div className="homecard__back">
                    <div className="homecard__back-content">
                      <p className="homecard__description">
                        <i className="fa-solid fa-map-location-dot fa-bounce"></i><br></br>
                        {destination.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
};

export default FeaturedDestination;
