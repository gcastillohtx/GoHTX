import React, {useEffect, useState} from "react";
import NavBar from "./NavBar";
import Background from './Background'
import HomeContainer from './HomeContainer'


function App() {

const [allEvents, setAllEvents] = useState ([])



useEffect(() => {
fetch("http://localhost:3000/events")
.then (res => res.json())
.then (eventsArray => setAllEvents(eventsArray))
}
,[])



  return (
    <>
     <NavBar />
     <Background  />
     <HomeContainer allEvents={allEvents} />

     
        
    
          
       
    </>
  );
}

export default App;
