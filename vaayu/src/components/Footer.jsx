import React from "react";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <footer>
      <div className="container featured">
        <div className="row">
          <div className="col-md-6 content">
            <h2>About Us</h2>
            <p>
              We are passionate about travel and committed to making your
              journey unforgettable. Discover new places, experience different
              cultures, and create lifelong memories with us.
            </p>
          </div>
          <div className="col-md-6">
            <SocialMedia />
          </div>
        </div>
      </div>
    </footer>
  );
}
