import React, { useEffect,useState } from 'react'

function BotList() {
    const [bots,setBots] =useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/bots")
        then((r)=> r.json())
    .then((bots)=> setBots(bots))
  },[])
  return (
    <div>
      
    </div>
  )
}

export default BotList
