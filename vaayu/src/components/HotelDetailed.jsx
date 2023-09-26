import React from "react";

export default function HotelDetailed(props) {
    const details = props.details;
    console.log(details)
    return (

        <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
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
                    <img src={details.image} alt={details.name} />
                    <div>State: {details.state}</div>
                    <div>City: {details.city}</div>
                    <div>Rating: {details.rating} 🌟</div>
                    <div>Living Cost: {details["living cost"]}</div>
                    <div>Description: {details.description}</div>
                </div>
            </div>
        </div>

    );
}
