import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "./../Authcontext";
import urlmap from "./../UrlHelper"


function ItineraryForm() {
  const auth = useAuth();

  const [place, setPlace] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [opeingHours, setOpeingHours] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    urlmap
      .post("/vaayu/itinerary", {
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
  itemid,
  place,
  city,
  state,
  category,
  openingHours,
  isVisited,
  dateAdded,
}) {
  const [isDone, setIsDone] = useState(isVisited);

  const handleCheckboxClick = async () => {
    // console.log('Checkbox clicked'); 
    try {
      // Make an API request using Axios to update the server with the new checkbox state
      const response = await urlmap.post("/vaayu/updatecheckbox", {
        _id: itemid, // Send the _id of the item to identify it uniquely
        isVisited: !isDone, // Send the new state
      });

      if (response.status === 200) {
        // If the API request is successful, update the local state
        setIsDone(!isDone);
      } else {
        // Handle the case when the API request fails
        console.error('Failed to update checkbox state on the server');
      }
    } catch (error) {
      console.error('Error while updating checkbox state:', error);
    }
  };
  const handleDeleteClick = async () => {
    try {
      // Make an API request using Axios to delete the item on the server
      const response = await urlmap.delete(`/vaayu/deleteItem/${itemid}`);

      if (response.status === 200) {
        // If the API request is successful, you can handle the deletion on the client-side.
        // For example, remove the item from the UI or perform any necessary cleanup.
        // This depends on your specific UI structure and requirements.
        toast.success("Itinenary Deleted Successfully", {
          position: "bottom-right",
        })
      } else {
        // Handle the case when the API request fails
        console.error('Failed to delete item on the server');
      }
    } catch (error) {
      console.error('Error while deleting item:', error);
    }
  };
  return (
    <div className="col-lg-4 col-md-6 mb-4 d-flex">
      <div className="itedisplayer card flex-fill rounded-lg shadow-sm tilt-in-fwd-br">
        <div className="card-header bg-transparent border-bottom-0">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={isDone}
              onChange={() => handleCheckboxClick()}
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
          <button type="button" className="btn btn-light"
            onClick={handleDeleteClick}>
            <i class="fa-solid fa-trash"></i>Delete
          </button>
        </div>
      </div>
    </div>
  );
}

function TripPlanner() {

  const auth = useAuth();

  const [visitedData, setVisitedData] = useState([]);
  const [notvisitedData, setNotVisitedData] = useState([]);
  const [totaldata, setTotalData] = useState([]);

  useEffect(() => {
    if (auth.user) {
      urlmap
        .get("/vaayu/getitinerary", {
          params: {
            user: auth.user.username,
          }
        })
        .then((response) => {

          setTotalData(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
      setVisitedData(totaldata.filter(
        (item) => item.isVisited === true
      ))
      setNotVisitedData(totaldata.filter(
        (item) => item.isVisited === false
      ))
    }
  }, [auth.user, totaldata]);

  return (
    <div className="tripplanner">
      <ItineraryForm />
      <div className="container">
        <h2 className="my-3">Your Itinerary</h2>
        <div className="row">
          {notvisitedData.map((item, index) => (
            <ItineraryItem
              key={item._id}
              itemid={item._id}
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
      {visitedData.length !== 0 &&
        <div className="container">
          <h2 className="my-3">Visited</h2>
          <div className="row">
            {visitedData.map((item, index) => (
              <ItineraryItem
                key={item._id}
                itemid={item._id}
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
      }
    </div>
  );
}

export default TripPlanner;
