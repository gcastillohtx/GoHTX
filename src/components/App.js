import React, {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";


import NavBar from "./NavBar";
import HomeContainer from './HomeContainer'
import EventContainer from "./EventContainer";
import EventForm from "./EventForm";
import '../App.css'


function App() {

const [allEvents, setAllEvents] = useState ([])

function addEventToState(event){
  setAllEvents([...allEvents, event])
}

useEffect(() => {
fetch("http://localhost:3000/events")
.then (res => res.json())
.then (eventsArray => setAllEvents(eventsArray))
}
,[])



  return (
    <>
     {/* <NavBar /> */}
     
    <div className="app-container">
      <Routes>
        <Route path="/" element={<HomeContainer allEvents={allEvents} />} />
        <Route path="/events" element={ <EventContainer allEvents={allEvents}  />} />
        <Route path="/add_event" element={ <EventForm addEventToState={addEventToState}/>  } />
      </Routes>
    </div>
       
    </>
  );
}

export default App;
