import React, { useState, useEffect } from "react";
import Detailed from "./Detailed";
import hotelsData from "./Json/Hotels.json"; // Import your hotels data JSON file

export default function HotelAttractions() {
  const [detailedProp, setDetailedProp] = useState(null);
  const [hotels, setHotels] = useState([]); // Initialize with an empty array
  const [filteredHotels, setFilteredHotels] = useState([]); // Separate state for filtered hotels
  const [filters, setFilters] = useState({
    state: "all",
    rating: "all",
    minLivingCost: "",
    maxLivingCost: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    // Set the hotels data from your JSON file
    console.log(hotelsData)
    setHotels(hotelsData);
    setFilteredHotels(hotelsData); // Initialize filteredHotels with all hotels
  }, []);

  const handleDetails = (data, e) => {
    e.preventDefault();
    setDetailedProp(data);
  };

  const applyFilters = () => {
    // Filter hotels based on selected filter options
    let newFilteredHotels = [...hotelsData];

    if (filters.state !== "all") {
      newFilteredHotels = newFilteredHotels.filter(
        (hotel) => hotel.state === filters.state
      );
    }

    if (filters.rating !== "all") {
      newFilteredHotels = newFilteredHotels.filter(
        (hotel) => hotel.rating === filters.rating
      );
    }

    if (filters.minLivingCost !== "") {
      newFilteredHotels = newFilteredHotels.filter(
        (hotel) =>
          parseFloat(hotel["living cost"]) >= parseFloat(filters.minLivingCost)
      );
    }

    if (filters.maxLivingCost !== "") {
      newFilteredHotels = newFilteredHotels.filter(
        (hotel) =>
          parseFloat(hotel["living cost"]) <= parseFloat(filters.maxLivingCost)
      );
    }

    setFilteredHotels(newFilteredHotels);
    setCurrentPage(1); // Reset to the first page after filtering
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredHotels.length / itemsPerPage);

  // Calculate the starting and ending index of the hotels to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the hotels to display on the current page
  const displayedHotels = filteredHotels.slice(startIndex, endIndex);

  return (
    <>
      <div className="attractions">
        <div className="container mt-5">
          <div className="row glass p-3">
            <div className="col-md-2">
              <select
                className="form-control"
                value={filters.state}
                onChange={(e) =>
                  setFilters({ ...filters, state: e.target.value })
                }
              >
                <option value="all">All States</option>
                {Array.from(
                  new Set(hotelsData.map((hotel) => hotel.state))
                ).map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-2">
              <select
                className="form-control"
                value={filters.rating}
                onChange={(e) =>
                  setFilters({ ...filters, rating: e.target.value })
                }
              >
                <option value="all">All Ratings</option>
                {Array.from(
                  new Set(hotelsData.map((hotel) => hotel.rating))
                ).map((rating, index) => (
                  <option key={index} value={rating}>
                    {rating}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-2">
              <input
                type="number"
                className="form-control"
                placeholder="Min Living Cost"
                value={filters.minLivingCost}
                onChange={(e) =>
                  setFilters({ ...filters, minLivingCost: e.target.value })
                }
              />
            </div>
            <div className="col-md-2">
              <input
                type="number"
                className="form-control"
                placeholder="Max Living Cost"
                value={filters.maxLivingCost}
                onChange={(e) =>
                  setFilters({ ...filters, maxLivingCost: e.target.value })
                }
              />
            </div>
            <div className="col-md-2">
              <button className="loginbtn filterbtn" onClick={applyFilters}>
                Apply Filters
              </button>
            </div>
          </div>
        </div>
        <div className="attcontainer">
          {displayedHotels.map((hotel, index) => (
            <div className="card" key={index}>
              <div className="first-content">
                <div className="image-container">
                  <img src={hotel.image} alt={hotel.name} />
                  <div className="overlay-text">{hotel.name}</div>
                </div>
              </div>
              <div className="second-content">
                <p id="klef">{`Welcome to ${hotel.name}`}</p>
                <p>{`Name : ${hotel.name}`}</p>
                <p>{`State : ${hotel.state}`}</p>
                <p>{`City : ${hotel.city}`}</p>
                <p>{`Rating : ${hotel.rating}`}</p>
                <p>{`Living Cost : ${hotel["living cost"]}`}</p>
                <div className="pos">
                  <a
                    className="button"
                    data-bs-toggle="offcanvas"
                    href="#detailedOffcanvas"
                    role="button"
                    onClick={(e) => handleDetails(hotel, e)}
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
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {detailedProp && <Detailed details={detailedProp} />}
    </>
  );
}
