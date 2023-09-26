import React from "react";
import logo from "./../assets/logo.png";
import Authenticate from "./Authenticate";
import { NavLink } from "react-router-dom";

export default function Navbar() {
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
              <i class="fa-solid fa-compass fa-spin"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  <i class="fa-solid fa-house"></i>&nbsp;Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/tripplanner"
                >
                  <i class="fa-solid fa-plane-departure"></i>&nbsp;Trip Planner
                </NavLink>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fa-solid fa-crown"></i>&nbsp;Attractions
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <NavLink class="dropdown-item" to="/attractions">
                    <i class="fa-solid fa-map-location-dot"></i>&nbsp;Tourism
                    </NavLink>
                  </li>
                  <li>
                    <NavLink class="dropdown-item" to="/hotel">
                    <i class="fa-solid fa-hotel"></i>&nbsp;Hotels
                    </NavLink>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink class="dropdown-item" to="/vr">
                    <i class="fa-solid fa-vr-cardboard fa-bounce"></i> &nbsp;VR's
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
                  <i class="fa-solid fa-comments"></i>&nbsp;Community
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/vaayusoul"
                >
                  <i class="fa-solid fa-heart-pulse"></i>&nbsp;Vaayu Soul
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page">
                  <button
                    className="loginbtn"
                    role="button"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                  >
                    <i class="fa-solid fa-unlock-keyhole"></i>&nbsp;Login
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Authenticate />
    </>
  );
}
