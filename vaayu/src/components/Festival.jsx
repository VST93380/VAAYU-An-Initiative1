import React, { useState, useEffect } from "react";
import festivalsData from "./Json/festival.json";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

function FestivalCard(props) {
  const { name, famous_place, description, month, image_url } = props;
  return (
    <div className="festival_card">
      <div className="card-image">
        <img src={image_url} alt={name} />
      </div>
      <p className="card-title">{name}</p>
      <p className="card-body">{description}</p>
      <p className="footer">
        Location: {famous_place} | Month: {month}
      </p>
    </div>
  );
}

function MonthDisplay() {
  const [currentMonth, setCurrentMonth] = useState("");
  const [currentMonthFestivals, setCurrentMonthFestivals] = useState([]);
  const [perPage, setPerPage] = useState(null);

  const splideOptions = {
    type: "loop",
    perPage: perPage,
    autoplay: true,
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
  useEffect(() => {
    const currentDate = new Date();
    const options = { month: "long" };
    const monthName = currentDate.toLocaleDateString("en-US", options);
    setCurrentMonth(monthName);
    const filteredFestivals = festivalsData.filter((festival) => {
      return festival.month === monthName;
    });

    setCurrentMonthFestivals(filteredFestivals);
  }, []);

  return (
    <>
      <div className="festival_container">
        <h2>
          Festivals in {currentMonth}
          <i className="fa-solid fa-wand-magic-sparkles fa-bounce"></i>
        </h2>
        <Splide options={splideOptions}>
          {currentMonthFestivals.map((festival, index) => (
            <SplideSlide key={index}>
              <FestivalCard
                name={festival.name}
                famous_place={festival.famous_place}
                description={festival.description}
                month={festival.month}
                image_url={festival.image_url}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
}

export default MonthDisplay;
