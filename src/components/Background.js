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
      <div className="content">
        <h1>Houston Awaits You</h1>
        <h2>What will you do tonight?</h2>
        <form className="search">
          <div>
            <input type="text" placeholder="Search Events" />
          </div>
          <div>
            <button>Go!</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Background;
