import React, { useEffect } from 'react';
import ProgressBar from 'progressbar.js';
import './../Styles/Profile.css'
function Profile() {
    useEffect(() => {

        const completedProgress = new ProgressBar.Circle('#completed-progress', {
            color: '#28a745',
            strokeWidth: 10,
            trailWidth: 10,
            duration: 1000,
            easing: 'easeInOut',
            text: {
                value: '0%',
                style: {
                    fontSize: '18px',
                    color: '#28a745',
                },
            },
        });

        completedProgress.animate(0.75);

        const canceledProgress = new ProgressBar.Circle('#canceled-progress', {
            color: '#dc3545',
            strokeWidth: 10,
            trailWidth: 10,
            duration: 1000,
            easing: 'easeInOut',
            text: {
                value: '0%',
                style: {
                    fontSize: '18px',
                    color: '#dc3545',
                },
            },
        });

        canceledProgress.animate(0.20);

        const upcomingProgress = new ProgressBar.Circle('#upcoming-progress', {
            color: '#17a2b8',
            strokeWidth: 10,
            trailWidth: 10,
            duration: 1000,
            easing: 'easeInOut',
            text: {
                value: '0%',
                style: {
                    fontSize: '18px',
                    color: '#17a2b8',
                },
            },
        });

        upcomingProgress.animate(0.40);
    }, []);

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="text-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbR4n6lzmBoQRRGCjICBBU7g5m4FSl_rniwg&usqp=CAU" alt="Profile Picture" className="profile-img" />
                        <h5 className="mt-3" style={{ color: "green" }}>Tripathy</h5>
                    </div>
                    <div className="card mt-3">
                        <div className="card-body">
                            <h5 className="card-title">User Details</h5>
                            <p className="card-text">Email: tripathy@example.com</p>
                            <p className="card-text">Location: New York</p>
                            <a href="#" className="btn btn-primary loginbtn">
                                Edit Profile
                            </a>
                        </div>
                    </div>
                    <div className="card mt-3">
                        <div className="card-body">
                            <div className="badges">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/4018/4018177.png"
                                    alt="Badge 1"
                                    className="badge-img"
                                />
                            </div>
                            <p className="reward-points">Reward Points: 500</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="row mt-4">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Completed Trips</h5>
                                    <div id="completed-progress"></div>
                                    <p>No completed trips yet.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Canceled Trips</h5>
                                    <div id="canceled-progress"></div>
                                    <p>No canceled trips yet.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Upcoming Trips</h5>
                                    <div id="upcoming-progress"></div>
                                    <p>No upcoming trips planned.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Recent Visits</h5>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbR4n6lzmBoQRRGCjICBBU7g5m4FSl_rniwg&usqp=CAU" alt="Recent Visit 1" className="recent-visit-img" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbR4n6lzmBoQRRGCjICBBU7g5m4FSl_rniwg&usqp=CAU" alt="Recent Visit 2" className="recent-visit-img" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbR4n6lzmBoQRRGCjICBBU7g5m4FSl_rniwg&usqp=CAU" alt="Recent Visit 3" className="recent-visit-img" />
                        </div>
                    </div>
                    <div className="card mt-4">
                        <div className="card-body">
                            <h5 className="card-title">Wishlists</h5>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbR4n6lzmBoQRRGCjICBBU7g5m4FSl_rniwg&usqp=CAU" alt="Wishlist Item 1" className="wishlist-img" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbR4n6lzmBoQRRGCjICBBU7g5m4FSl_rniwg&usqp=CAU" alt="Wishlist Item 2" className="wishlist-img" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbR4n6lzmBoQRRGCjICBBU7g5m4FSl_rniwg&usqp=CAU" alt="Wishlist Item 3" className="wishlist-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;