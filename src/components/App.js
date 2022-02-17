import React, {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";


import NavBar from "./NavBar";
import HomeContainer from './HomeContainer'
import EventContainer from "./EventContainer";
import EventForm from "./EventForm";
import '../App.css'


function App() {

const [allEvents, setAllEvents] = useState ([])

function updateLikes(eventId){

  const updatedEvents = allEvents.map(event => {
    if(event.id === eventId){
      return {...event, likes: event.likes + 1}
    }else{
      return event
    }
  })

  setAllEvents(updatedEvents)
}

function addEventToState(event){
  setAllEvents([...allEvents, event])
}

useEffect(() => {
fetch("http://localhost:3000/events")
.then (res => res.json())
.then (eventsArray => setAllEvents(eventsArray))
}
,[])

const sortedEvents = allEvents.sort((a, b) =>  b.likes - a.likes)

console.log(sortedEvents);

  return (
    <>
     <NavBar />
     
    <div className="app-container">
      <Routes>
        <Route path="/" element={<HomeContainer allEvents={sortedEvents} updateLikes={updateLikes}/>} />
        <Route path="/events" element={ <EventContainer allEvents={sortedEvents} updateLikes={updateLikes} />} />
        <Route path="/add_event" element={ <EventForm addEventToState={addEventToState}/>  } />
      </Routes>
    </div>
       
    </>
  );
}

export default App;
