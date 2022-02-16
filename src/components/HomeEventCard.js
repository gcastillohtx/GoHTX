import React from "react";
import "./HomeEventCard.css";

function HomeEventCard({ event }) {
  return (
    <li className="cards__item">
      <div className="card">
        <img src={event.image} className="card__image" />
        <div className="card__content">
          <div className="card__title">{event.name}</div>
          <h3 className="title">{event.title}</h3>
          <p className="card__text">{event.location}</p>
          <h2>{event.free ? "Free Event" : "Buy Tickets"}</h2>
          <p classname="start"> Time: {event.hours} </p>
          <p className="likes"> 🤘{event.likes} Likes</p>
        </div>
      </div>
    </li>
  );
}

export default HomeEventCard;
