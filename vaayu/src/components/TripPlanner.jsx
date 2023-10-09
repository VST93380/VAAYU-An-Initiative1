import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "./../Authcontext";

function ItineraryForm() {
  const auth = useAuth();

  const [place, setPlace] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [opeingHours, setOpeingHours] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/itinerary", {
        username: auth.user.username,
        place: place,
        city: city,
        state: state,
        category: category,
        opeingHours: opeingHours,
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
    auth.user && (
      <div className="container mt-5 tripplanner">
        <h2>Plan Itinerary</h2>
        <div className="glass p-4  tilt-in-fwd-br">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-lg-4 col-md-6 mb-3">
                <label className="form-label">
                  <i className="fas fa-map-marker-alt"></i> Place:
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                />
              </div>
              <div className="col-lg-4 col-md-6 mb-3">
                <label className="form-label">
                  <i className="fas fa-map-marker-alt"></i> City:
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="col-lg-4 col-md-12 mb-3">
                <label className="form-label">
                  <i className="fas fa-map-marker-alt"></i> State:
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-6 col-md-12 mb-3">
                <label className="form-label">
                  <i className="far fa-clock"></i> Visiting time:
                </label>
                <input
                  type="time"
                  className="form-control"
                  value={opeingHours}
                  onChange={(e) => setOpeingHours(e.target.value)}
                />
              </div>
              <div className="col-lg-6 col-md-12 mb-3">
                <label className="form-label">
                  <i className="far fa-clock"></i> Category:
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-light">
              Create Itinerary
            </button>
          </form>
        </div>
      </div>
    )
  );
}

function ItineraryItem({
  place,
  city,
  state,
  category,
  openingHours,
  isVisited,
  dateAdded,
}) {
  const [isDone, setIsDone] = useState(isVisited);

  return (
    <div className="col-lg-4 col-md-6 mb-4 d-flex">
      <div className="itedisplayer card flex-fill rounded-lg shadow-sm tilt-in-fwd-br">
        <div className="card-header bg-transparent border-bottom-0">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={isDone}
              onChange={() => setIsDone(!isDone)}
            />
            <label className="form-check-label" htmlFor="doneCheck">
              {place}
            </label>
          </div>
        </div>
        <div className="card-body">
          <p className="card-text">{`${city}, ${state}`}</p>
          <p className="card-text">{category}</p>
          <p className="card-text">{openingHours}</p>
          <p className="card-text">{`Added on ${dateAdded}`}</p>
        </div>
        <div className="card-footer bg-transparent border-top-0">
          <button type="button" className="btn btn-light">
            <i className="fas fa-edit"></i> Edit
          </button>
        </div>
      </div>
    </div>
  );
}

function TripPlanner() {

  const auth = useAuth();

  const [itineraryData, setItineraryData] = useState([]);

  useEffect(() => {
    if (auth.user) {
      axios
        .get("http://localhost:5000/api/getitinerary", {
          params: {
            user: auth.user.username,
          }
        })
        .then((response) => {
          setItineraryData(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [auth.user]);

  return (
    <div className="tripplanner">
      <ItineraryForm />
      <div className="container">
        <h2 className="my-3">Your Itinerary</h2>
        <div className="row">
          {itineraryData.map((item, index) => (
            <ItineraryItem
              key={index}
              username={item.username}
              place={item.place}
              city={item.city}
              state={item.state}
              category={item.category}
              openingHours={item.openingHours}
              isVisited={item.isVisited}
              dateAdded={item.dateAdded}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TripPlanner;
