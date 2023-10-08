import React from "react";
import logo from "./../assets/logo.png";
import Authenticate from "./Authenticate";
import { NavLink } from "react-router-dom";
import { useAuth } from "../Authcontext";
import { toast } from "react-toastify";

export default function Navbar() {
  const auth = useAuth();
  const handleLogout = () => {
    auth.logout();
    localStorage.clear();
    toast.info("Logged out successfully", {
      position: "bottom-right",
      theme: "dark",
    });
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg custom-navbar"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} className="navbar-image" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i className="fa-solid fa-compass fa-spin"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  <i className="fa-solid fa-house"></i>&nbsp;Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-plane-departure"></i>&nbsp;Trip
                  Planner
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/packages">
                      <i className="fa-solid fa-map-location-dot"></i>
                      &nbsp;Packages
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/tripplanner">
                      <i className="fa-solid fa-map-location-dot"></i>
                      &nbsp;Itenary
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-crown"></i>&nbsp;Attractions
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/attractions">
                      <i className="fa-solid fa-map-location-dot"></i>
                      &nbsp;Tourism
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/hotel">
                      <i className="fa-solid fa-hotel"></i>&nbsp;Hotels
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/vr">
                      <i className="fa-solid fa-vr-cardboard fa-bounce"></i>{" "}
                      &nbsp;VR's
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/community"
                >
                  <i className="fa-solid fa-comments"></i>&nbsp;Community
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/vaayusoul"
                >
                  <i className="fa-solid fa-heart-pulse"></i>&nbsp;Vaayu Soul
                </NavLink>
              </li>

              <li className="nav-item">
                {!auth.user && (
                  <NavLink className="nav-link" aria-current="page">
                    <button
                      className="loginbtn"
                      data-bs-toggle="modal"
                      data-bs-target="#loginModal"
                    >
                      <i className="fa-solid fa-unlock-keyhole"></i>&nbsp;Login
                    </button>
                  </NavLink>
                )}
                {auth.user && (
                  <NavLink
                    to="/profile"
                    className="nav-link"
                    aria-current="page"
                  >
                    <button
                      className="loginbtn"
                      // onClick={handleLogout}
                    >
                      <i className="fa-solid fa-user-secret fa-fade"></i>&nbsp;
                      {auth.user.role}
                    </button>
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Authenticate />
    </>
  );
}
