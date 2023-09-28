import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import placesdata from "./Json/Aims.json";

export default function Aims() {
  const[perPage, setPerPage] = useState(null)
  const splideOptions = {
    type: "loop",
    autoplay: true,
    focus: "center", // Center the single card.
    pauseOnHover: false,
    drag: "free",
    pagination: false,
    rewind: true,
    autoScroll: {
      speed: 4,
    },
  };

  // Define the number of cards per slide based on screen size
  useEffect(() => {
    const perPage = window.innerWidth < 768 ? 1 : 4;
    setPerPage(perPage)
  });

  return (
    <div className="main-homecard">
      <h2 className="featureddestiations">
        Our Aims <i className="fa-solid fa-users"></i>
      </h2>
      <hr />
      <Splide options={{ ...splideOptions, perPage }}>
        {placesdata.map((destination, index) => (
          <SplideSlide key={index}>
            <div className="aims-card">
              <div className="aims-content">
                <p className="aims-heading">{destination.title}</p>
                <p className="aims-para">{destination.description}</p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
