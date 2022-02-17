import React from 'react'
import HomeEventCard from './HomeEventCard'
import Background from './Background'
import NavBar from './NavBar'


function Home({allEvents, updateLikes}) {


  const topFive = allEvents.slice(0, 4)

  return (
    <>
    <Background>
      <div className="overlay"></div>
      <div className="content">
        <h1>Houston Awaits You</h1>
        <h2>Where will you go tonight?</h2>
      </div>
    </Background>
    
   
    <h1 className="homeheader">-PEOPLES CHOICE-</h1>
    <ul className="cards">
      {topFive.map(event => <HomeEventCard key={event.id} event={event} updateLikes={updateLikes}/>)}
    </ul>
    </>
  )
}

export default Home