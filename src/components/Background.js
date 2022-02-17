import React from "react";
import "./Background.css";

import Video from "../assets/houston.mp4";

function Background(props) {

  console.log(props);
  return (
    <div className="background">
      <video autoPlay loop muted id="video">
        <source src={Video} type="video/mp4" />
      </video>

      {props.children}
      
    </div>
  );
}

export default Background;
