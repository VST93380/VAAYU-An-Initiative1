import React from "react";
import { toast } from "react-toastify";
import { useAuth } from "./../Authcontext";
import urlmap from "./../UrlHelper"

export default function Detailed(props) {
  const details = props.details;
  const auth = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    urlmap
      .post("/vaayu/itinerary", {
        username: auth.user.username,
        place: details.name,
        city: details.city,
        state: details.state,
        category: details.category,
        opeingHours: details.open_hours,
      })
      .then((response) => {
        console.log(response.data);
        if (response.status === 201) {
          toast.success("BlogPost has been saved");
        } else {
          toast.error("error in saving the post");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        <button data-bs-dismiss="offcanvas"
          aria-label="Close"
        ><i class="fa-solid fa-circle-xmark fa-spin"></i></button>
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

          <button onClick={handleSubmit} className="loginbtn">Add to trip</button>

        </div>
      </div>
    </div>
  );
}
