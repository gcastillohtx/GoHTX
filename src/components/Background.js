import React from "react";
import "./Background.css";

import Video from "../assets/houston.mp4";

function Background() {
  return (
    <div className="background">
      <video autoPlay loop muted id="video">
        <source src={Video} type="video/mp4" />
      </video>
      <div className="overlay"></div>
    </div>
  );
}

export default Background;
