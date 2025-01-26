import "./App.css";
import React, { useState } from "react";
import BotList from "./BotList";
import YourBotArmy from "./YourBotArmy";
function App() {
  const [army, setArmy] = useState([]);

  function addBotsArmy(bot) {
    if (!army.some((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  }
  function releaseBot(botId){
    setArmy(army.filter((b)=>b.id !== botId))
  }

  function dischargeBot(botId){
    fetch(`http://localhost:3000/bots/${botId}`, {
      method: "DELETE"
    })
    .then((r) => {
      if (r.ok) {
        setArmy(army.filter((b) => b.id !== botId));
      } else {
        console.log('failed')
      }
    })
    .catch((error) => console.error('error'))


  }



  return (
    <div>
      <BotList addBotsArmy={addBotsArmy} />
      <YourBotArmy army={army} releaseBot={releaseBot} dischargeBot={dischargeBot}/>
    </div>
  );
}

export default App;
