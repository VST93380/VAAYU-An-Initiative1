import React from "react";
import bgvid from "./../assets/1.mp4";


export default function Backvid() {
  return (
    <div>
      <div className="hmvid">
        <video autoPlay muted loop>
          <source src={bgvid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
