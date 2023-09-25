import React, { useState } from "react";

function ItineraryForm() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Title:", title);
    console.log("Details:", details);
  };

  return (
    <div className="container">
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
    <div className="card mb-3">
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
  );
}

function TripPlanner() {
  const itineraryData = [
    { title: "Place to visit 1", details: "Details about the place." },
    { title: "Place to visit 1", details: "Details about the place." },
    { title: "Place to visit 1", details: "Details about the place." },
    { title: "Place to visit 1", details: "Details about the place." },
  ];

  return (
    <div className="tripplanner">
      <ItineraryForm />
      <div className="container">
        <h2 className="my-3">Your Itinerary</h2>
        {itineraryData.map((item, index) => (
          <ItineraryItem
            key={index}
            title={item.title}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
}

export default TripPlanner;
