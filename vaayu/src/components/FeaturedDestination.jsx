import React from "react";
import placesdata from "./Json/Places.json";

const FeaturedDestination = (props) => {
  const filteredPlaces = placesdata.filter(
    (destination) => destination.state === props.state
  );

  return (
    <div className="main-homecard">
      <ul className="homecard__list">
        {filteredPlaces.map((destination, index) => (
          <li className="homecard" key={index}>
            <img src={destination.image_url} alt={destination.name} />
            <div className="homecard__content">
              <p className="homecard__title">{destination.name}</p>
              <p className="homecard__description">{destination.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturedDestination;
