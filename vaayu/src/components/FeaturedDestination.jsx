import React, { useState, useEffect } from "react";
import placesdata from "./Json/Places.json";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const FeaturedDestination = (props) => {
  const [perPage, setPerPage] = useState(null);
  const filteredPlaces = placesdata.filter(
    (destination) => destination.state === props.state
  );
  const splideOptions = {
    type: "loop",
    perPage: perPage,
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

  useEffect(() => {
    const perPage = window.innerWidth < 991 ? 1 : 4;
    setPerPage(perPage);
  });

  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div className="main-homecard">
        <h2 className="featureddestiations">
          Featured Destinations{" "}
          {props.state && (
            <>
              Of {props.state} <i className="fa-solid fa-location-dot"></i>
            </>
          )}
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
                        <i className="fa-solid fa-map-location-dot fa-bounce"></i>
                        <br></br>
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
