import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="logo">
        <h2>GoHTX</h2>
        <h3></h3>
      </div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>All Events</li>
        <li>Submit An Event</li>
      </ul>
    </div>
  );
}

export default NavBar;
