import React from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import placesdata from "./Json/Aims.json";

export default function Aims() {
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

  return (
    <div className='main-homecard'>
       <h2 className="featureddestiations">
          Our Aims <i class="fa-solid fa-users"></i>
        </h2>
        <hr />
      <Splide options={splideOptions}>
        {placesdata.map((destination, index) => (
          <SplideSlide key={index}>
            <div className="aims-card">
              <div className="aims-content">
                <p className="aims-heading">{destination.title}</p>
                <p className="aims-para">
                  {destination.description}
                </p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
