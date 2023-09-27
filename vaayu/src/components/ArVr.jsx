import React from "react";
import srcData from "./Json/Vrs.json"; // Make sure the path is correct

const ArVr = () => {
  return (
    <div className="vrcontainer">
      {srcData.map((src, index) => (
        <div id="iframeContainer" key={index}>
          <iframe
            title="VRPlaces"
            className="embeddedIframe hide-scrollbars"
            src={src.url}
            frameBorder="0"
            allowFullScreen
            scrolling="no"
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default ArVr;
