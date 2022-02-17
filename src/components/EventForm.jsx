import React, {useState} from "react";
import "./EventForm.css"

import Background from './Background'


function EventForm({addEventToState}) {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [location, setLocation] = useState("")
  const [hours, setHours] = useState("")
  const [date, setDate] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    console.log(e.target.value);
    
    const postBody = {
      title: title, 
      image: image,
      location: location,
      hours: hours,
      date: date,
    }
    
    fetch('http://localhost:3000/events', {
    method: "POST", 
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(postBody)
    })
    .then(res => res.json())
    .then(eventObj => addEventToState(eventObj))
  }

  return (
    <>
      <Background >
      <div className="overlay"></div>
        <div className="content">
          <div className="newEvent">
            <h2>New Event</h2>
            <form onSubmit={handleSubmit}>
              <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" placeholder="Event name" />
              <input value={image} onChange={(e) => setImage(e.target.value)} type="text" name="image" placeholder="Image URL" />
              <input value={location} onChange={(e) => setLocation(e.target.value)} type="text" name="location" placeholder="Location" />
              <input value={hours} onChange={(e) => setHours(e.target.value)} type="text" name="hours" placeholder="Start Time of Event" />
              <input value={date} onChange={(e) => setDate(e.target.value)} type="text" name="date" placeholder="Day of Event" />
              <button type="submit">Add Event</button>
            </form>
          </div>
        </div>
      </ Background>
    </>
    
  );
}

export default EventForm;