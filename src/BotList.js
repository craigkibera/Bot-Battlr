import React, { useEffect, useState } from 'react';
import Bot from './Bot';
function BotList({addBotsArmy}) {
  const [bots,setBots] = useState([]);
  

    useEffect(()=>{
        fetch("http://localhost:3000/bots")
        .then((r)=> r.json())
        .then((bots)=> setBots(bots))
  },[])

 return (
    
    <div className='bot-list'>
    {bots.map((bot) => (
      <Bot
        key={bot.id} 
        image={bot.avatar_url}
        name={bot.name}
        botClass={bot.bot_class}
        health={bot.health}
        onClick={()=>addBotsArmy(bot)}
      />
    ))}
  </div>
  )
}

export default BotList
