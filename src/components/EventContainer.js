import React from 'react'
import HomeEventCard from './HomeEventCard'
import NavBar from './NavBar'
import './EventContainer.css'

function EventContainer({allEvents, updateLikes}) {
  
  return (
    <>
      <div id="container">
        <ul className="cards">
          {allEvents.map(event => <HomeEventCard key={event.id} event={event} updateLikes={updateLikes}/>)}
        </ul>
      </div>
    </>
  )
}

export default EventContainer