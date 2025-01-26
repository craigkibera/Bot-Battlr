import React from "react";
import Bot from "./Bot";

function YourBotArmy({ army, releaseBot, dischargeBot }) {
  return (
    <div>
      <h1>YourBotArmy</h1>
      {army.length === 0 ? (
        <p>No bots</p>
      ) : (
        <div className="bot-list">
          {army.map((bot) => (
            <div key={bot.id} className="bot-container">
              <Bot
                image={bot.avatar_url}
                name={bot.name}
                botClass={bot.bot_class}
                health={bot.health}
                onClick={() => releaseBot(bot.id)} 
              />
              <button className="button"
               
                onClick={() => dischargeBot(bot.id)} 
              >
                X
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default YourBotArmy;
