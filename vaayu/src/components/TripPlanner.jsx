import React, { useState } from "react";
import Package from "./Package"

function ItineraryForm() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Title:", title);
    // console.log("Details:", details);
  };

  return (
    <div className="container mt-5 tripplanner">
      <h2>Plan Itinerary</h2>
      <div className="glass p-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title:</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Details:</label>
            <textarea
              className="form-control"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-light">
            Create Itinerary
          </button>
        </form>
      </div>
    </div>
  );
}

function ItineraryItem({ title, details }) {
  const [isDone, setIsDone] = useState(false);

  return (
    <div className="col-lg-4 col-md-6 mb-4 d-flex">
      <div className="card flex-fill">
        <div className="card-header">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={isDone}
              onChange={() => setIsDone(!isDone)}
            />
            <label className="form-check-label" htmlFor="doneCheck">
              {title}
            </label>
          </div>
        </div>
        <div className="card-body">
          <p className="card-text">{details}</p>
        </div>
      </div>
    </div>
  );
}

function TripPlanner() {
  // Replace this with your actual data
  const itineraryData = [
    { title: "Place to visit 1", details: "Details about the place." },
    { title: "Place to visit 1", details: "Details about the place." },
    { title: "Place to visit 1", details: "Details about the place." },
    { title: "Place to visit 1", details: "Details about the place." },
    // Add more itinerary items here
  ];

  return (
    <div className="tripplanner">
      <Package />
      <ItineraryForm />
      <div className="container">
        <h2 className="my-3">Your Itinerary</h2>
        <div className="row">
          {itineraryData.map((item, index) => (
            <ItineraryItem
              key={index}
              title={item.title}
              details={item.details}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TripPlanner;
