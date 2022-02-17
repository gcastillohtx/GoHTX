import React from 'react'
import HomeEventCard from './HomeEventCard'
import Background from './Background'
import NavBar from './NavBar'


function Home({allEvents}) {

  const sortedEvents = allEvents.sort(event => event.likes)
  const topFive = sortedEvents.slice(0, 4)

  return (
    <>
    
    <Background  />
   
    <h1 className="homeheader">-PEOPLES CHOICE-</h1>
    <ul className="cards">
      {topFive.map(event => <HomeEventCard key={event.id} event={event} />)}
    </ul>
    </>
  )
}

export default Home