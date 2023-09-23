import React from "react";

const FeaturedDestination = (props) => {
  const userState = props.state;

  const destinations = [
    {
      name: "Destination 1",
      image:
        "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_2814,w_4241,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/shutterstock_400068991_qpukq2.jpg",
      description: "Explore the beauty of Destination 1.",
    },
    {
      name: "Destination 2",
      image:
        "https://th.bing.com/th/id/OIP.j4g2NjMig_bpdVkpxF0vjwHaHa?pid=ImgDet&rs=1",
      description: "Discover the wonders of Destination 2.",
    },
    // Add more destinations here
  ];

  return (
    <div className="container featured">
      <h2 className="mt-4">
        Featured Destinations {userState && <>Of {userState}</>}
      </h2>
      <div className="row">
        {destinations.map((destination, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <img
                src={destination.image}
                className="card-img-top"
                alt={destination.name}
              />
              <div className="card-body">
                <h5 className="card-title">{destination.name}</h5>
                <p className="card-text">{destination.description}</p>
                <a href="#" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedDestination;
