import React from 'react'
import HomeEventCard from './HomeEventCard'
import './EventContainer.css'

function EventContainer({allEvents}) {
  return (
    <div id="container">
      
      {/* <form className="search">
        <div>
          <input type="text" placeholder="Search Events" />
        </div>
        <div>
          <button>Go!</button>
        </div>
      </form> */}
      <ul className="cards">
        {allEvents.map(event => <HomeEventCard key={event.id} event={event} />)}
      </ul>
    </div>
  )
}

export default EventContainer