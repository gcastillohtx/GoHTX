import React from 'react'
import HomeEventCard from './HomeEventCard'


function Home({allEvents}) {

  

  return (
    <>
    <h1 className="homeheader">THIS WEEKEND</h1>
    <ul className="cards">
      {allEvents.map(event => <HomeEventCard key={event.id} event={event} />)}
    </ul>
    </>
  )
}

export default Home