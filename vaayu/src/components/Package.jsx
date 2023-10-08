import React from "react";
import "./../Styles/Package.css";
import { Link } from "react-router-dom";

function PackageCard({ id, title, locations, expenditure, ratings, url }) {
  const link = `/attractions/${url}`;
  return (
    <Link to={link}>
      <div className="Package_card bounce-top">
        <div className="top-section" id={id}></div>
        <div className="bottom-section">
          <span className="title">{title}</span>
          <div className="row row1">
            <div className="item">
              <span className="big-text">{locations}</span>
              <span className="regular-text">Locations</span>
            </div>
            <div className="item">
              <span className="big-text">{expenditure}</span>
              <span className="regular-text">Expenditure</span>
            </div>
            <div className="item">
              <span className="big-text">{ratings}</span>
              <span className="regular-text">Ratings</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function Package_App() {
  return (
    <div className="Package_card-container">
      {/* PackageCard -1 */}
      <PackageCard
        id="c-1"
        title="RELIGIOUS & SPIRITUAL"
        locations="9+"
        expenditure="12946"
        ratings="4.8"
        url="Religious"
      />

      {/* PackageCard - 2 */}
      <PackageCard
        id="c-2"
        title="NATURE & NATURAL BEAUTY"
        locations="12+"
        expenditure="14256"
        ratings="4.3"
        url="Nature"
      />

      {/* PackageCard - 3 */}
      <PackageCard
        id="c-3"
        title="HISTORICAL & CULTURAL"
        locations="7+"
        expenditure="10236"
        ratings="4.9"
        url="Historical"
      />

      {/* PackageCard - 4 */}
      <PackageCard
        id="c-4"
        title="WILDLIFE & ADVENTURE"
        locations="4+"
        expenditure="6346"
        ratings="4.5"
        url="Wildlife"
      />

      {/* PackageCard - 5 */}
      <PackageCard
        id="c-5"
        title="CITY & URBAN EXPLORATION"
        locations="5+"
        expenditure="7485"
        ratings="4.7"
        url="City"
      />

      <PackageCard
        id="c-6"
        title="Haunted Places"
        locations="6+"
        expenditure="12885"
        ratings="4.9"
      />
    </div>
  );
}

export default Package_App;
