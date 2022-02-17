import React, {useState} from "react";
import "./HomeEventCard.css";



function HomeEventCard({ event, updateLikes }) {
// const [likeCount, setLikeCount] = useState(event.likes) // This state should be deleted



  return (
    <li className="cards__item">
      <div className="card">
        <img src={event.image} className="card__image" />
        <div className="card__content">
          <div className="card__title">{event.name}</div>
          <h2 className="title">{event.title}</h2>
          <p className="card__text">{event.location}</p>
          <p>🤘{event.likes} Likes</p>
          <p className= "date"> {event.date} </p>
          <p className="start"> Time: {event.hours} </p>
          <h2 style={{color: 'white'}}>{event.free ? "Free Event" : <a href={event.ticketlink}>Buy Tickets</a>} </h2>
          <button onClick={() => updateLikes(event.id)}> Like </button>
        </div>
      </div>
    </li>
  );
}

export default HomeEventCard;
