import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="logo">
        <h2>GoHTX</h2>
        <h3></h3>
      </div>
      <ul className="nav-menu">
        <li> <Link to='/'>Home</Link></li>
        <li> <Link to='/events'>All Events</Link></li>
        <li> <Link to='/add_event'>Submit An Event</Link></li>
      </ul>
    </div>
  );
}

export default NavBar;
