import React, { useState, useEffect } from "react";
import HotelDetailed from "./HotelDetailed"; // Import your HotelDetailed component
import locations from "./Json/Hotels.json";
import statesData from "./Json/States.json";
export default function HotelAttractions() {
  const [detailedProp, setDetailedProp] = useState([]);
  const originalLoc = locations;
  const [selectedState, setSelectedState] = useState("default");
  const [places, setPlaces] = useState(locations);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    handlePro();
  }, [selectedState, currentPage]);

  const handleDetails = (data, e) => {
    e.preventDefault();
    setDetailedProp(data);
  };

  const handlePro = () => {
    if (selectedState === "default") {
      setPlaces(originalLoc);
    } else {
      setPlaces(
        locations.filter((destination) => destination.state === selectedState)
      );
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalItems = places.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedPlaces = places.slice(startIndex, endIndex);

  return (
    <>
      <div className="attractions">
        <div class="container mt-5">
          <div class="row glass p-3">
            <div class="col-md-5">
              <select
                className="form-control"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                <option value="default">All States</option>
                {statesData.map((state, index) => (
                  <option key={index} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
            <div class="col-md-5">
              <select class="form-control">
                <option>Dropdown 2</option>
                <option>Dropdown 2</option>
                <option>Dropdown 2</option>
              </select>
            </div>
            <div class="col-md-2">
              <button className="loginbtn filterbtn" onClick={handlePro}>
                Apply Filter <i class="fa-solid fa-paint-roller"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="attcontainer">
          {displayedPlaces.map((item, index) => (
            <div className="card" key={index}>
              <div className="first-content">
                <div className="image-container">
                  <img src={item.image} alt={item.name} />
                  <div className="overlay-text">{item.name}</div>
                </div>
              </div>
              <div className="second-content">
                <p id="klef">{`Welcome to ${item.name}`}</p>
                <p>{`Name : ${item.name}`}</p>
                <p>{`State : ${item.state}`}</p>
                <p>{`City : ${item.city}`}</p>
                <p>{`Rating : ${item.rating}`}</p>
          
                <br />
                <div className="pos">
                  <a
                    className="button"
                    data-bs-toggle="offcanvas"
                    href="#detailedOffcanvas"
                    role="button"
                    onClick={(e) => handleDetails(item, e)}
                  >
                    <span className="button__icon-wrapper">
                      <svg
                        width="10"
                        className="button__icon-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 15"
                      >
                        <path
                          fill="currentColor"
                          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        ></path>
                      </svg>

                      <svg
                        className="button__icon-svg button__icon-svg--copy"
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        fill="none"
                        viewBox="0 0 14 15"
                      >
                        <path
                          fill="currentColor"
                          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        ></path>
                      </svg>
                    </span>
                    <p className="button__text">Explore For More</p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-center">
            {Array.from({ length: totalPages }).map((_, index) => (
              <li
                className={`page-item ${index + 1 === currentPage ? "active" : ""}`}
                key={index}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {detailedProp && <HotelDetailed details={detailedProp} />}
    </>
  );
}
