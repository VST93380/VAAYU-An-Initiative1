import React, { useState, useEffect } from "react";
import b1 from "./../assets/vids/1.mp4";
import b2 from "./../assets/vids/2.mp4";
import b3 from "./../assets/vids/3.mp4";
import b4 from "./../assets/vids/4.mp4";
import b5 from "./../assets/vids/5.mp4";
import b6 from "./../assets/vids/6.mp4";

export default function Backvid() {

  return (
    <div>
      <div className="hmvid">
        <video autoPlay muted loop>
          <source src={b5} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
