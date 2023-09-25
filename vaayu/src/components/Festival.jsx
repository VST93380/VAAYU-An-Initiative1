import React, { useState, useEffect } from 'react';
import festivalsData from './Json/festival.json';


function FestivalCard(props) {
  const { name, location, description, month, image_url } = props;

  return (
    <div className="festival_card">
      <div className="card-image">

        <img src={image_url} alt={name} />
      </div>
      <p className="card-title">{name}</p>
      <p className="card-body">{description}</p>
      <p className="footer">
        Location: {location} | Month: {month}
      </p>
    </div>
  );
}

function MonthDisplay() {
  const [currentMonth, setCurrentMonth] = useState('');
  const [currentMonthFestivals, setCurrentMonthFestivals] = useState([]);

  useEffect(() => {
    const currentDate = new Date();
    const options = { month: 'long' };
    const monthName = currentDate.toLocaleDateString('en-US', options);
    setCurrentMonth(monthName);
    const filteredFestivals = festivalsData.filter(festival => {
      return festival.month === monthName;
    });

    setCurrentMonthFestivals(filteredFestivals);
  }, []);

  return (
    <div>
      <div className="container festival_container">
        {currentMonthFestivals.map((festival, index) => (
          <FestivalCard
            key={index}
            name={festival.name}
            location={festival.location}
            description={festival.description}
            month={festival.month}
            image_url={festival.image_url}
          />
        ))}
      </div>

    </div>
  );
}

export default MonthDisplay;
