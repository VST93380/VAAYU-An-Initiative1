import React from 'react';
import srcData from './Json/Vrs.json'; // Make sure the path is correct

const ArVr = () => {
  return (
    <div>
      {srcData.map((src, index) => (
        <div id="iframeContainer" key={index}>
          <iframe
            className="embeddedIframe"
            src={src}
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
