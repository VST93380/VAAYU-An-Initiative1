import React from "react";

export default function Detailed(props) {
  const details = props.details;
  return (
    <div
      className="offcanvas offcanvas-start"
      tabindex="-1"
      id="detailedOffcanvas"
      data-bs-scroll="false"
      data-bs-backdrop="true"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel">
          {details.name}
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <div className="container">
          <img src={details.image_url} />
          <div>State: {details.state}</div>
          <div>Category: {details.category}</div>
          <div>{details.description}</div>
          <div>City: {details.city}</div>
          <div>Rating: {details.rating} 🌟</div>
          <div>Fee: {details.entrance_fee}</div>
          <div>Open Hours: {details.open_hours}</div>
          <div>Best time: {details.best_time_to_visit}</div>
          <div className="facilities">
            Facilities:
            <ul>
              {details.facilities &&
                details.facilities.map((facility, index) => (
                  <li key={index}>{facility}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
